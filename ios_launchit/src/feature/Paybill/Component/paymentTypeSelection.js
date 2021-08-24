import React, { Component } from "react";
import { View, SafeAreaView, FlatList,Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { colors, fonts } from '../../../theme/constant'
import { images } from '../../../assets/constant';
import PaymentTypeCell from '../../../component/cell/paymentTypeCell'
import styles from './styles'

export default class PaymentTypeSelection extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false,
            paymentTypes: [
                {"index": 0, "title": "Escrow Payment", "isSelected": false},
                {"index": 1, "title": "Credit card or Cheque Payment", "description": `No more than 25 invoices are allowd per payment transtion. Total amount must be between $10 and $99,999.00. Clicking the 'Pay Now' Button will redirect you to JP Morgan Chase Bank's Secure website to complete the payment process.  Payments made on Chase may take a few minutes to reflect on the Austin Build + Connect website. ACH payments take 24 hours to be processed. Once on the Chase site ONLY use the "Exit" link located towards the top right of the page to return to Austion Build + Connect. If you exit before the payment is confirmed your payment will be cancelled.`, "isSelected": false, "showDescription": true},
            ], 
        };
    }

    componentDidMount(){
        this.props.navigation.setOptions({ title: 'Choose your payment method',headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'} })
    }

    render() {

        const {paymentTypes} = this.state
        return (
        <View style = {[styles.container,{backgroundColor:'white'}]}>
            <FlatList
                style={{paddingVertical: 20}}
                showsHorizontalScrollIndicator={false}
                data={paymentTypes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
            />
        </View>

        )
    }

    onPress = (navigateIndex) => {
        this.setState({ isSelected: true },this.props.navigation.navigate('EscrowPayment'))
        // if(navigateIndex == 0 )
        //     this.props.navigation.navigate('EscrowPayment')
    }

    _renderItem = ({ item, index }) => {
        return( 
            <PaymentTypeCell
                item={item}
                onPress={() => this.onPress()}
            />
        )
    }
}
