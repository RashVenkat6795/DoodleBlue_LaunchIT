
import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    ScrollView,
    FlatList
} from "react-native";
import SelectInputField from '../../../component/inputField/searchProperty';
import styles from "./styles";
import AccountCell from '../../../component/cell/escrowAccount'
import FooterButton from '../../../component/view/footerButton'

export default class CardPayment extends Component {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
        <SafeAreaView style = {styles.container}>
            <SelectInputField
                style = {{marginTop: 18, width: '90%', alignSelf: 'center'}}
                hint = {'CARD NUBMER'}
            />
            <SelectInputField
                style = {{marginTop: 18, width: '90%', alignSelf: 'center'}}
                hint = {'CARD NUBMER'}
            />
            <View style = {{width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: 'stretch', alignContent: 'space-between', justifyContent: 'space-around'}}>
                <SelectInputField
                    style = {{marginTop: 18, width: '31%', alignSelf: 'center'}}
                    hint = {'Jan'}
                    rightImage = {'down-arrow'}
                />
                <SelectInputField
                    style = {{marginTop: 18, width: '31%', alignSelf: 'center'}}
                    hint = {'2020'}
                    rightImage = {'down-arrow'}
                />
                <SelectInputField
                    style = {{marginTop: 18, width: '31%', alignSelf: 'center'}}
                    hint = {'CVV'}
                    rightImage = {'down-arrow'}
                />
            </View>
            <FooterButton
             style = {{width: '100%'}}
             text = 'Pay Now'
             onPress = {()=> {

             }}
            />

        </SafeAreaView>
        )
    }



}
