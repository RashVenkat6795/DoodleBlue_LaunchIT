import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList,SectionList,Text, AsyncStorage, Alert
} from "react-native";
import styles from "./styles";
import WorkFlowCell from '../../../component/cell/workFlowcell'
import PlumbingPermitcell from '../../../component/cell/plumbingPermitcell';
import { colors, fonts } from "../../../theme/constant";
import Loader from '../../../component/Loader'
import * as PermitsServices from '../../../api/PermitsServices'
import moment from 'moment'
import { ScrollView } from "react-native-gesture-handler";
import BottomAlert from "../../../component/BottomAlert";

export default class WorkFlow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: true,
            sectionData : []
        };
    }

    onLoad = async () => {
        const lid = this.props.route.params.lid;
        await PermitsServices.getWorkflow(lid, this.props.route.params.folderRSN).then((response) => {
            if(response.successful){
                this.props.actions.workFlowResult(response.responseObject);
                let sectionData = []
                this.props.workFlow.map((item,index) => {
                    let dataObj = {
                        "title" : item.processDesc,
                        "data" : [
                            {"title": "Status", "value": item.statusDesc ? item.statusDesc : ''},
                            {"title": "Scheduled", "value":  item.scheduleDate ? moment(item.scheduleDate).format("DD/MM/YYYY") : null},
                            {"title": "Started", "value": item.startDate ? moment(item.startDate).format("DD/MM/YYYY") : null},
                            {"title": "Ended", "value":  item.endDate ? moment(item.endDate).format("DD/MM/YYYY") : null},
                            {"title": "Staff", "value": item.assignedUser ? item.assignedUser : ''},  
                        ]
                    }
                    sectionData.push(dataObj)
                })
                this.setState({ sectionData, loaded: false })
            }else {
                this.setState({ loaded: false })
                BottomAlert(response.message)
            }
        }).catch((error) => {
            //ERROR HANDLING
            this.setState({ loaded: false });
            console.log("axios error", error)
            Alert.alert("Error", error, [{ text: "OK", onPress: () => {}}]);
        })
    }

    componentDidMount() {
        this.onLoad();
        this.props.navigation.setOptions({ title: "Work Flow", headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'} })
    }

    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <Loader isVisible={this.state.loaded}/>
                <ScrollView>
                    <View style={{width: '90%',marginTop: 10,alignSelf:'center'}}>
                        {this.state.sectionData?.map((item,index) =>{
                            return this._renderSectiontem(item,index)
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    _renderSectiontem(item,index) {
        return(
            <View style={styles.sectionFlatlistStyle} key={index}>
                <View style={styles.sectionListHeader}>
                    <Text style={styles.sectionHeaderText}>{item.title}</Text>
                </View>
                <View style={{flex: 1}}>
                    {item.data.map((childitem, index) => {
                        return this.renderItem(childitem, index)
                    })}
                </View>       
            </View>
        )
    }

    renderItem(item,index){
        return( 
            <View key={index}>
                <View style = {[styles.workflowContainer]}>
                    <View style={{width:'40%'}}>
                        <Text style={[styles.workflowTitleText]}>{item.title}</Text>
                    </View>
                    <View style={{width:'60%'}}>
                        <Text style={{...fonts.H4_Regular},styles.workflowText}>{item.value}</Text>
                    </View>
                </View>
                <View style={styles.lineSepStyle}/>
            </View>
            
        )
    }
}
