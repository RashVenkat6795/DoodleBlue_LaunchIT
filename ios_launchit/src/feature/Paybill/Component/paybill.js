
import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList,
} from "react-native";
import styles from "./styles";
import PayBillCell from '../../../component/cell/paybill'
import AllFeeView from '../../../component/view/allFees'

export default class PayBill extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false,
            billData: [
                {"title": "Application Extension Fee", "description": "2018-002699 MP", "fee": "$50.00", "amount": "$50.00", "isSelected": false},
                {"title": "Converted Permit Fee", "description": "2018-002699 MP", "fee": "$50.00", "amount": "$50.00", "isSelected": false},
                {"title": "Application Extension Fee", "description": "2018-002699 MP", "fee": "$50.00", "amount": "$50.00", "isSelected": false},
            ], 
            showPayButton: true
        };
    }

    componentDidMount() {
        this.props.navigation.setOptions({ title: "Fees Due", headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'} })
    }


    render() {
        let data = this.state.billData
        return (
        <View style = {styles.container}>
            <AllFeeView 
                // style = {{width: '100%', height: 70}}
                onPaySelect = {()=> {
                    this.props.navigation.navigate('Invoice')
                }}
                onSelectAll = {(isSelect)=> {
                    data.map((value, index) => {
                        value.isSelected = isSelect
                    })
                    this.setState({billData: data, showPayButton: true})
                }}
                showPayButton={this.state.showPayButton}
            />

            <FlatList
                style={{width: '100%', marginBottom: 10, marginTop: 10}}
                showsHorizontalScrollIndicator={false}
                data={this.state.billData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
            />
        </View>
        )
    }

    _renderItem = ({ item, index }) => {
        return( 
            <PayBillCell
                onPress = {()=> {
                    let data = this.state.billData
                    data[index].isSelected = !data[index].isSelected 
                    this.setState({billData:data})
                }}
                innerStyle = {{width: '100%', marginTop: 6, marginBottom: 6}}
                item = {item}
            /> 
        )
    }

    questionMultiSelection(index,item) {
        let data = this.state.questions
        data[index].isSelected = !data[index].isSelected 
        this.setState({questions:data})
     }

}
