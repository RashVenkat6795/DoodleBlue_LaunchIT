import React, { Component } from "react";
import { View, SafeAreaView, FlatList,TouchableOpacity, Image, Text, AsyncStorage, TouchableWithoutFeedbackBase } from "react-native";
import styles from "./styles";
import SegmentedControl from '@react-native-community/segmented-control';
import {colors, fonts} from '../../../theme/constant'
import { images } from '../../../assets/constant';
import InspectionCell from '../../../component/cell/inspectionCell'
import Schedulecell from '../../../component/cell/scheduleInspection'
import BottomSheet from '../../../component/bottomSheet'
import ScheduleBottomSheet from '../../../component/view/scheduleBottomSheet'
import PrimaryButton from '../../../component/Button/primaryButton'
import Loader from '../../../component/Loader'
import * as InspectionService from '../../../api/InspectionsServices'
import Snackbar from 'react-native-snackbar';
import { call } from "react-native-reanimated";
import async from 'async'
import BottomAlert from "../../../component/BottomAlert";


export default class Inspection extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false,
            loaded: true,
            invoiceData: [], 
            scheduleData: [],
            values: ['My Inspections', 'Scheduled Inspections'],
            value: 'Unselected',
            selectedIndex: 0,
        };
    }

    onLoad = async (fieldName,transactionCode) => {
        await AsyncStorage.multiGet(["lid","peopleRSN"]).then(async (response) => {
            this.setState({ lid: response[0][1] });
            let lid = response[0][1], peopleRSN = response[1][1];
            let data = [
                {
                    "fieldName": fieldName,
                    "fieldValue": `${peopleRSN}`
                }
            ]
                    InspectionService.getMyInspectionsData(lid,transactionCode,data).then((listresponse) =>{
                        if(listresponse.successful) {
                            console.log("props", this.props);
                            this.setState({loaded: false})
                            this.props.actions.inspectionsResults(listresponse.responseObject);
                            let data = this.props.inspection, dataArr = [];
                            console.log("data from redux", data)
                         //   alert(this.state.selectedIndex)
                            this.setState({ loaded: false })
                            let columnLen = data[0].columnValues.length;
                            if(this.state.selectedIndex == 0) {
                            for (let i = 0; i < columnLen; i++) {
                                let obj = {};
                                data.map(item => {
                                    obj[item.columnName] = item.columnValues[i];
                                })
                                dataArr.push(obj);
                            }
                            this.setState({ invoiceData: dataArr.map(v => {return {...v,"folderRSN":v.FolderRSN}})})
                         }else {
                            for (let i = 0; i < columnLen; i++) {
                                 let obj = {};
                                data.map(item => {
                                      obj[item.columnName] = item.columnValues[i];
                                     })
                                 dataArr.push(obj);
                                 }
                            this.setState({ scheduleData: dataArr})
                            console.log("vauessssdata",JSON.stringify(this.state.scheduleData))
                         }
                        }else {
                        this.setState({ loaded: false });
                         BottomAlert(listresponse.message)  
                        }
                    }).catch((error) => {
                        //ERROR HANDLING
                        this.setState({ loaded: false });
                         BottomAlert("No data found")
                        console.log("axios error1", error)
                    })
        })
    }

    componentWillMount(){
        this.props.navigation.setOptions({ title:'Inspections', headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'} })
        this.setState({selectedIndex: this.props.route.params.tabID})
        this.props.route.params.tabID == 1 ? this.onLoad("PeopleRSN",30) : this.onLoad("argPeopleRSN",28)
    }

    render() {
        return (
            <View style = {styles.container}>
                <Loader isVisible={this.state.loaded}/>
                <View style={styles.inspectionViewContainer}>
                    <PrimaryButton
                        isRounded = {true}
                        text = "My Inspections"
                        height={42}
                        textStyle={{color: this.state.selectedIndex == 0 ? 'white' : colors.TEXT_BROWN_COLOR,fontSize:13}}
                        style = {[styles.buttonStyle,{backgroundColor:this.state.selectedIndex == 0 ? colors.PRIMARY : null}]}
                        onPress = {() => { 
                            this.setState({selectedIndex: 0 ,loaded:true})
                            this.onLoad("argPeopleRSN",28);
                               }}
                    />
                    <PrimaryButton
                        isRounded = {true}
                        text = "Scheduled Inspections"
                        height={42}
                        textStyle={{color: this.state.selectedIndex == 1 ? 'white' : colors.TEXT_BROWN_COLOR,textAlign:'center',fontSize:13}}
                        style = {[styles.buttonStyle,{backgroundColor:this.state.selectedIndex == 1 ? colors.PRIMARY : null}]}
                        onPress = {() => { 
                            this.setState({selectedIndex: 1,loaded:true })
                            this.onLoad("PeopleRSN",30);
                        }}
                    />
                </View>
                {this.renderDataList()}
                <BottomSheet
                    ref={ref => { this.BottomSheet = ref; }}
                    closeOnDragDown={true}
                    customStyles={{
                        // wrapper: {
                        //   backgroundColor: "transparent"
                        // },
                        draggableIcon: {
                            backgroundColor: '#ADA8A2',//"#000",
                            width: 100
                        }
                    }}
                >
                    <ScheduleBottomSheet style = {{width: '100%'}} 
                        item={this.state.selectedItem}
                        onPressSchedule = {()=> { this.BottomSheet.close() }}
                        onPressClose = {()=> { this.BottomSheet.close()}}
                        lid={this.state.lid}
                    />
                </BottomSheet>
            </View>

        )
    }

    _onChange = (event) => {
        this.setState({
          selectedIndex: event.nativeEvent.selectedSegmentIndex,
        }, () => {
            this.flatListRef.scrollToIndex({animated: true, index: this.state.selectedIndex})
        });
      };

    
      _onValueChange = (value) => {
        this.setState({
          value: value,
        });
      };

      renderDataList = () => {
          const {selectedIndex, invoiceData, scheduleData} = this.state
          let data = selectedIndex == 0 ? invoiceData : scheduleData
        return( 
            <FlatList
                showsVerticalScrollIndicator={false}
                style = {{marginVertical: 10}}
                showsHorizontalScrollIndicator={false}
                data = {selectedIndex == 0 ? invoiceData : scheduleData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={selectedIndex == 0 ? this._renderInspectItem : this._renderScheduleItem}
            />
        )
    }

    _renderInspectItem = ({ item, index }) => {
        return(
            <InspectionCell 
                onPress={()=> { this.props.navigation.navigate('PlumbingPermit',{item})}}
                onPressSchedule={()=> { 
                    this.setState({ selectedItem: item})
                    this.props.navigation.navigate('ScheduleInspection',{info:item,lid:this.state.lid})
                    //this.BottomSheet.open())
                }}
                item = {item}
                style = {styles.inspectionListViewStyle}
            />
        )
    }

    _renderScheduleItem = ({ item, index }) => {
        return(
            <Schedulecell 
                item = {item}
                style = {styles.scheduleListViewStyle}
            />
        )
    }

    _dismissPopUp = (navigate) => {
        this.setState({
            showPopup: false
        }, () => {
            navigate && this.props.navigation.navigate(navigate)
        })
    }

}
Inspection.navigationOptions = {
    headerRight:(
        <TouchableOpacity>
            <Image 
                    resizeMode = 'contain'
                    source={images['search']}
                    style = {{width: 15, height:15, alignSelf: 'center'}}/>
        </TouchableOpacity>
    )
}

const Styles = {
    buttonStyle:{
        width: '50%', alignItems:'center', justifyContent:'center', padding: 10, borderRadius: 20
    }
}
