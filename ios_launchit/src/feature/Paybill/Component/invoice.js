import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList,Text,ScrollView
} from "react-native";
import InputField from '../../../component/inputField/inputField';
import PrimaryButton from '../../../component/Button/primaryButton';
import Header from '../../../component/Header/AuthenticationHeader'
import styles from "./styles";
import InvoiceCell from '../../../component/cell/invoice'
import PaymentPopup from '../../../component/view/paymentPopup'
import FooterButton from '../../../component/view/footerButton';
import { colors } from "../../../theme/constant";


export default class Invoice extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false,
            invoiceData: [
                {"title": "Application Extension Fee", "description": "2018-002699 MP", "fee": "$50.00", "amount": "$50.00", "isSelected": true},
                {"title": "Converted Permit Fee", "description": "2018-002699 MP", "fee": "$50.00", "amount": "$50.00", "isSelected": false},
                {"title": "Application Extension Fee", "description": "2018-002699 MP", "fee": "$50.00", "amount": "$50.00", "isSelected": false},
            ], 
        };
    }

    componentDidMount(){
        this.props.navigation.setOptions({ headerStyle: styles.headerStyle ,headerTitleStyle : {fontWeight:'bold'}})
    }

    render() {

        const {showPopup, invoiceData} = this.state
        return (
        <ScrollView style = {styles.container}>
            <FlatList
                style={styles.invoiceListStyle}
                showsHorizontalScrollIndicator={false}
                data={invoiceData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
            />
            <PaymentPopup
                isVisible={showPopup}
                onDismiss={() => {this._dismissPopUp()}}
                onPressEscrow = {()=> {  this._dismissPopUp("EscrowPayment") }}
                onPressCredit = {() => {   }} // this._dismissPopUp('CardPayment')
            />
            <View style={styles.bottomView}>
                <View style={styles.bottomTextView}>
                    <Text style={styles.payableAmount}>Total Amount Payable :</Text>
                    <Text style={[styles.payableAmountValue,{marginLeft:10,color:colors.PRIMARY}]}>$50.00</Text>
                </View>
                <FooterButton
                    style = {[styles.footerBtnStyle,{marginBottom: 20}]}
                    text = {"Pay Now"}
                    onPress = {()=> { 
                        // this.setState({showPopup: true}) 
                        this.props.navigation.navigate('PaymentTypeSelection')
                    }}
                />
            </View>
            
        </ScrollView>

        )
    }

    _renderItem = ({ item, index }) => {
        return( 
            <InvoiceCell 
                onPress = {()=> {
                    let data = this.state.invoiceData
                    data[index].isSelected = !data[index].isSelected 
                    this.setState({invoiceData:data})
                }}
                // style = {{width: '90%', alignSelf: 'center', marginTop: 6, marginBottom: 6}}
                item = {item}
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
