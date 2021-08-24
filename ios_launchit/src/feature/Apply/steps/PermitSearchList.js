import React, { Component } from "react";
import { View, SafeAreaView, FlatList, ScrollView } from "react-native";
import InputField from '../../../component/inputField/inputField';
import PrimaryButton from '../../../component/Button/primaryButton';
import Header from '../../../component/Header/AuthenticationHeader'
import styles from "./styles";
import ApplyPermit from '../../../component/cell/ApplyPermit'
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
                {"title": " Converted Permit Fee", "description": "2018-002699 MP", "fee": "$50.00", "amount": "$50.00", "isSelected": false},
                {"title": "Application Extension Fee", "description": "2018-002699 MP", "fee": "$50.00", "amount": "$50.00", "isSelected": false},

            ], 
        };
    }
    nextclick()
    {
        var data={title:"Permit Summary",cid:0}
        this.props.changehaeder(data);
        this.props.next()
    }

    render() {

        const {showPopup, invoiceData} = this.state
        return (
        <View style = {styles.container}>
            <ScrollView>
                <FlatList
                    style={styles.listStyle}
                    showsHorizontalScrollIndicator={false}
                    data={invoiceData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                />
                <PaymentPopup
                    isVisible={showPopup}
                    onDismiss={() => {this._dismissPopUp()}}
                    onPressEscrow = {()=> {
                        this._dismissPopUp("EscrowPayment")
                        
                    }}
                    onPressCredit = {() => {
                        // this._dismissPopUp('CardPayment')
                    }}
                />
            </ScrollView>
            <View style={[styles.footerBtnViewStyle,{alignItems:'center'}]}>
                        <FooterButton
                            style = {[styles.buttonStyle,{position:'relative'}]}
                            text = 'Next'
                            onPress = {()=> { this.nextclick() }}
                        />
                    </View>
        </View>

        )
    }

    _renderItem = ({ item, index }) => {
        return( 
            <ApplyPermit 
                onPress = {()=> {
                    let data = this.state.invoiceData
                    data[index].isSelected = !data[index].isSelected 
                    this.setState({invoiceData:data})
                }}
                style = {{width: '100%',marginVertical: 10}}
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
