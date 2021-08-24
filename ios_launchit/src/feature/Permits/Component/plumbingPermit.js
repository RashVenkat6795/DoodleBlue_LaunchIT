import React, { Component } from "react";
import { View, SafeAreaView, FlatList,Text,ScrollView,Dimensions,Image,TouchableOpacity, StyleSheet, AsyncStorage, Alert } from "react-native";
import styles from "./styles";
import InputField from '../../../component/inputField/searchProperty';
import PlumbingPermitcell from '../../../component/cell/plumbingPermitcell';
import { fonts, colors } from "../../../theme/constant";
import { images } from '../../../assets/constant';
import Loader from '../../../component/Loader'
import * as PermitsServices from '../../../api/PermitsServices'
import moment from 'moment'
import async from 'async'
import BottomAlert from "../../../component/BottomAlert";
import CurrencyFormatter from "../../../component/CurrencyFormatter";

const width = ((Dimensions.get('window').width*100)/100)/3
export default class PlumbingPermit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.route.params.item,
            feesDue: 0,
            lid:'',
            data: [
                {"title": "Application Details", "imageName": images.oil_drill},
                {"title": "Property Details", "imageName": images.propertyDetails},
                {"title": "Associated People", "imageName": images.associatedPeople, "folderRSN": this.props.route.params.item},
                {"title": "Work Flow", "imageName": images.workFlow},
                {"title": "Attachment List", "imageName": images.permit},
                {"title": "Fees and Payments", "imageName": images.feesAndPayments},
            ] ,
            plumbingData : [
                {"title": "Permit Number", "value": '...'},
                {"title": "Status", "value": '...'},
                {"title": "Sub", "value": '...'},
                {"title": "Work", "value": '...'},
                {"title": "Reference File", "value": '...'},
                {"title": "Application Date", "value": '...'},  
                {"title": "Issued", "value": '...'}
            ],
            loaded: true
        };
        this.onLoad();
    }

    async onLoad(){
        let folderRSN = this.props.route.params.title == "Animal License" ? this.state.key.FolderRSN : this.state.key.folderRSN
        if(this.props.route.params.isBoLoginLid) {
            let datas = this.state.data
            datas.splice(4,1)
            this.setState({data:datas})
        }
        const  getLid = () => {
            if (this.props.route.params.isBoLoginLid)
                return AsyncStorage.getItem("boLoginLid");
            return AsyncStorage.getItem("lid");
        }

    
        await getLid().then(async (lid) => {
            this.setState(() => ({lid}));
            async.parallel([
                (callback) => {
                    PermitsServices.getFolderByRSN(lid,folderRSN).then((response) =>{
                        // this.setState({loaded:false})
                        if(response.message == "Success"){
                            let responseDt = response.responseObject
                            plumbingData = [
                                {"title": "Permit Number", "value": responseDt.folderNumber},
                                {"title": "Status", "value": responseDt.statusDesc},
                                {"title": "Sub", "value": responseDt.subCodeDesc},
                                {"title": "Work", "value": responseDt.workCodeDesc},
                                {"title": "Reference File", "value": responseDt.propertyRSN},
                                {"title": "Application Date", "value": moment(responseDt.indate).format("MM/DD/YYYY")},  
                                {"title": "Issued", "value": moment(responseDt.issueDate).format("MM/DD/YYYY")}
                            ]
                            this.setState({ plumbingData: plumbingData, loaded: false, propertyRSN: responseDt.propertyRSN })
                        }
                    }).catch(err => {
                        console.log("errors", JSON.stringify(err));
                         this.setState({loaded:false})
                    });
                },
                (callback) => {
                    PermitsServices.getFolderFee(lid,folderRSN).then((response) => {
                        if(response.message == "Success"){
                            let data = response.responseObject
                            let fees = 0
                            data.folderFees.map((item) => {
                                fees = fees + item.amountLeft
                            })
                            this.setState({feesDue: fees, loaded: false})
                        }
                    }).catch(err => {
                        console.log("errors", JSON.stringify(err));
                         this.setState({loaded:false})
                    });
                }
            ],(err,resp) => {
                this.setState({loaded:false})
            })
        }).catch((error) => {
            //ERROR HANDLING
            this.setState({ loaded: false });
            console.log("axios error", error)
            BottomAlert("Data not found")
            //Alert.alert("Error", error, [{ text: "OK", onPress: () => {}}]);
        })
    }

    componentDidMount() {
        this.props.navigation.setOptions({ title:this.props.route.params.title, headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'}})
    }

    render() {
        return (
        <View style = {styles.container}>
            <Loader isVisible={this.state.loaded}/>
            <ScrollView>
                <TouchableOpacity style={styles.releatedFolderStyle}>
                <Text style={styles.textStyle}>Related Folder</Text>
                <Image style={styles.drodownStyle} source = {images.chevrondown} />
                </TouchableOpacity>
                {/* <InputField 
                    onTextChange={(text) => {
                    }}
                    style = {[{ 
                    width: '100%', 
                    height: 60, 
                    alignSelf: 'center',}]}
                    hint = {""}
                    isBottomBorder = {false}
                    rightImage = {'chevrondown'}
               /> */}
               {this._renderHeaderView()}
                <FlatList
                    style={[styles.listStyle, {borderWidth:StyleSheet.hairlineWidth, borderColor: colors.CARD_BORDER_COLOR}]}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    //ListHeaderComponent = {() => this._renderHeaderView()}
                    renderItem={this._renderItem}
                    numColumns = {3}
                />
                <FlatList
                    style={[styles.listStyle, {marginVertical: 10, borderWidth: StyleSheet.hairlineWidth, borderColor: colors.CARD_BORDER_COLOR}]}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.plumbingData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent = {() => (<View style={{height:1,backgroundColor:'#E3E3E3',width:'100%'}}/>)}
                    renderItem={this._renderPlubmingPermitItem}
                />
                {this._renderFooterView()}
            </ScrollView>
        </View>
        )
    }

    _renderHeaderView() {
        const status = this.props.route.params.status
        return(
            <View style={[styles.listHeaderStyle, {marginVertical: 14}]}>
                <Text style={styles.feeDueTextStyle}>Fees Due</Text>
                <View style={styles.statusViewStyle}>
                <Text style={{...fonts.H3_Bold,color:colors.TEXT_BROWNRED_COLOR}}>$</Text>
                <Text style={[styles.activeTextStyle]}>{CurrencyFormatter(this.state.feesDue)}</Text>
                </View>
            </View>
        )
    }

    _renderFooterView() {
        const status = this.props.route.params.status
        return(
            <View style={styles.footerStyle}>
                <Text style={styles.descStyle}>Description</Text>
                <Text style={styles.descText}>APD Officer called in 817-999-5470 and said at West Village Apts #116, there is a Husky puppy living on the balcony and it is covered in feces. He knocked on the door but nobody answered even though he heard movement inside. This is test</Text>
            </View>
        )
    }

    _renderPlubmingPermitItem = (rowData) => {
        const {item,index} = rowData
        return (
            <PlumbingPermitcell item = {item} status = {this.props.route.params.status}/>
        )
    }

    _renderItem = (rowData) => {
        const {item,index} = rowData
        return(
            <TouchableOpacity style={[styles.itemStyle,{width:width}]} onPress = {() => this.detailsPage(index)}>
                <Image resizeMode = 'contain' source={item.imageName} style = {styles.imageItem}/>
                <Text style = {{marginTop:5,textAlign:'center', ...fonts.H4_Regular,color:colors.TEXT_DARKGREY_COLOR}}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
 
    detailsPage(index) {
        let folderRSNValue = this.props.route.params.title == "Animal License" ?  this.state.key.FolderRSN : this.state.key.folderRSN
        switch(index) {
            case 0 : 
              this.props.navigation.navigate('Details', {folderRSN: folderRSNValue, lid:this.state.lid})
              break
            case 1 : 
              this.props.navigation.navigate('PropertyDetails',{showHeader:this.props.route.params.showPropertyHeader, propertyRSN: this.state.propertyRSN, lid:this.state.lid})
              break
            case 2 : 
              this.props.navigation.navigate('AssociatedPeople', {folderRSN: folderRSNValue, lid:this.state.lid})
              break
            case 3 : 
              this.props.navigation.navigate('WorkFlow',{folderRSN: folderRSNValue, lid:this.state.lid})
              break
            case 4 : 
              this.props.navigation.navigate('AddAttachementsList', {folderRSN: folderRSNValue, lid:this.state.lid})
              break
            case 5 : 
              this.props.navigation.navigate('FeesAndPayments', {folderRSN: folderRSNValue, lid:this.state.lid})
              break
        }
    }
}
