
import React, { Component } from "react";
import { View, SafeAreaView, ScrollView, FlatList } from "react-native";
import SelectInputField from '../../../component/inputField/searchProperty';
import styles from "./styles";
import AccountCell from '../../../component/cell/escrowAccount'
import Footer from '../../../component/view/escrowFooter'
import PaymentTypeCell from '../../../component/cell/paymentTypeCell'

export default class EscrowPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            headerItem: {"index": 0, "title": "Escrow Payment", "isSelected": true},
            escrowData: [
                {"title": "Account Name", "description": "Ramasundhar"},
                {"title": "Account Address", "description": "10525 Marine drive, Unit 8, Austin 73301"},
                {"title": "Account Type", "description": "Current"},
                {"title": "Current Account Balance", "description": "$50.00"},
                {"title": "Post Payment Account Balance ", "description": "$30.00"},
            ] 
        };
    }

    componentDidMount(){
        this.props.navigation.setOptions({ title: 'Choose your payment method', headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'} })
    }

    renderHeader(){
        return(
            <PaymentTypeCell
                item={this.state.headerItem}
                onPress={null}
            />
        )
    }

    render() {
        const {escrowData} = this.state
        return (
        <View style = {{flex: 1, backgroundColor:'white'}}>
            <ScrollView>
                <View style={{paddingTop: 15}}>
                    {this.renderHeader()}
                </View>
                
                <SelectInputField
                    hint = "Select Escrow Account"
                    style = {[styles.paymentSelectField,{paddingLeft: 15}]}
                    rightImage = "drop_down"
                />
                <FlatList
                    style={styles.paymentDetailsListStyle}
                    showsHorizontalScrollIndicator={false}
                    data={escrowData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                />
            </ScrollView>

            <Footer
                // style={{width: '80%', alignSelf:'center'}}
                onPress = {()=>{
                    this.props.navigation.navigate('AccountConfirmation')
                }}
                buttonText = "Pay Now"
                hint = "Enter Pin"
                amount = "$50.00"
            />
        </View>
        )
    }

    _renderItem = ({ item, index }) => {
        return( 
            <AccountCell 
                style = {{width: "100%"}}
                title = {item.title}
                subTitle = {item.description}
            />
        )
    }

}
