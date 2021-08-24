import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList,Text,Dimensions, AsyncStorage, Alert
} from "react-native";
import styles from "./styles";
import FeesAndPaymentsCell from '../../../component/cell/feesAndPaymentsCell'
import { colors, fonts } from "../../../theme/constant";
import * as PermitService from "../../../api/PermitsServices";
import Loader from '../../../component/Loader'
import BottomAlert from "../../../component/BottomAlert";
import CurrencyFormatter from "../../../component/CurrencyFormatter";

const width = ((Dimensions.get('window').width*100)/100)/3 - 10
export default class FeesAndPayments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: true,
            folderRSN: this.props.route.params.folderRSN,
            data: [],
            headerData : []
        };
    }

    async onLoad(){
            const lid = this.props.route.params.lid;
            await PermitService.getFolderFee(lid,this.state.folderRSN).then((response) => {
                if(response.message == "Success"){
                    console.log("fees and payment", response)
                    let data = response.responseObject, dataArr = [], totalBal = 0, totalFee = 0, totalPayment = 0
                    data.folderFees.map((item) => {
                        totalBal += item.amountLeft, totalFee += item.feeAmount
                        let dataObj = {
                            "title": item.feeDesc, "balance": item.amountLeft, "feeAmount": item.feeAmount
                        }
                        dataArr.push(dataObj)
                    })
                    let headerDt = [ totalBal, totalFee - totalBal, totalFee]
                    this.setState({data: dataArr, headerData: headerDt, loaded: false})
                }
            }).catch((error) => {
                //ERROR HANDLING
                this.setState({ loaded: false });
                console.log("axios error", error)
                BottomAlert("data not found")
            })
        
    }

    componentDidMount() {
        this.onLoad();
        this.props.navigation.setOptions({ title: "Fees and Payments", headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'}})
    }


    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <Loader isVisible={this.state.loaded}/>
                {this.renderHeader()}
                <FlatList
                    style={{width: '100%',alignSelf:'center', paddingBottom: 30}}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                />
            </SafeAreaView>
        )
    }

    renderHeader() {
        let headerData = this.state.headerData;
        let card1 = CurrencyFormatter(parseInt(headerData[2])), card2 = CurrencyFormatter(parseInt(headerData[1])), card3 = CurrencyFormatter(parseInt(headerData[0]))
        return(
            <View style={[styles.headerStyle, {flexDirection:'row', justifyContent:'space-between', margin: 10}]}>
                <View style={[styles.headerSubViewStyle,{borderColor:"#F2994A",width:width,backgroundColor:"rgba(242, 153, 74, 0.12)"}]}>
                    <Text style={[styles.paymentsText,{color:"#F2994A"}]}>{'Total Fees'}</Text>
                    <Text style={{marginBottom:5, marginTop: 0, color:'black',...fonts.H4_Bold}}>$ {card1}</Text>
                </View>
                <View style={[styles.headerSubViewStyle,{borderColor:"#27AE60",width:width,backgroundColor:"rgba(39, 174, 96, 0.12)"}]}>
                    <Text style={[styles.paymentsText,{color:'#27AE60'}]}>{'Total Payments'}</Text>
                    <Text style={{marginBottom:5, marginTop: 0, color:'black',...fonts.H4_Bold}}>$ {card2}</Text>
                </View>
                <View style={[styles.headerSubViewStyle,{borderColor:'#EB5757',width:width,backgroundColor:"rgba(235, 87, 87, 0.12)"}]}>
                    <Text style={[styles.paymentsText,{color:'#EB5757'}]}>{'Total Balance'}</Text>
                    <Text style={{marginBottom:5, marginTop: 0, color:'black',...fonts.H4_Bold}}>$ {card3}</Text>
                </View>
            </View>
        )
    }

    _renderItem = ({ item, index }) => {
        return( 
            <FeesAndPaymentsCell item={item} /> 
        )
    }
}
