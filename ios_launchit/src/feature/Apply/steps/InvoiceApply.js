import React, { Component } from "react";
import { View, SafeAreaView, FlatList, ScrollView} from "react-native";

// import styles from "./styles";
import InvoiceCell from '../../../component/cell/invoice'
import PaymentPopup from '../../../component/view/paymentPopup'
import FooterButton from '../../../component/view/footerButton';
import Footer from '../../../component/view/uploadFooter'
import {colors} from '../../../theme/constant'
import styles from './styles'

export default class ApplyInvoice extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false,
            invoiceData: [
                {"title": "Application Extension Fee", "description": "2018-002699 MP", "fee": "$50.00", "amount": "$20.00", "isSelected": true},
                {"title": " Converted Permit Fee", "description": "2018-002699 MP", "fee": "$50.00", "amount": "$20.00", "isSelected": false},
                {"title": "Application Extension Fee", "description": "2018-002699 MP", "fee": "$50.00", "amount": "$20.00", "isSelected": false},
            ], 
        };
    }
    nextclick()
    {
        var data={title:"Summary",cid:5}
        this.props.changehaeder(data);
        this.props.next()
    }
    render() {

        const {showPopup, invoiceData} = this.state
        return (
        <View style = {styles.container}>
                <FlatList
                    style={styles.listStyle}
                    showsHorizontalScrollIndicator={false}
                    data={invoiceData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                />
                <View style={[styles.footerBtnViewStyle,{alignItems:'center'}]}>
                    <FooterButton
                        style = {[styles.buttonStyle,{position:'relative',width:'95%'}]}
                        buttonStyle={{backgroundColor: 'transparent', borderWidth: 2, borderColor: colors.PRIMARY }}
                        text = 'Pay Later'
                        textStyle={{color: colors.PRIMARY}}
                        onPress = {()=> {
                            // this.nextclick()
                        }}
                    />
                    <FooterButton
                        style = {[styles.buttonStyle,{position:'relative',width:'95%'}]}
                        text = 'Pay Now'
                        onPress = {()=> {
                            this.nextclick()
                        }}
                    />
                </View>
        </View>

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
                style = {{width: '100%', marginVertical: 10}}
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
