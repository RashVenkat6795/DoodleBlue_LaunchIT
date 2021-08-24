
import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, FlatList, ScrollView } from "react-native";
import Footer from '../../../component/view/footerButton'
import SummaryCell from '../../../component/cell/summaryCell'
import FooterButton from '../../../component/view/footerButton';
import {color, fonts} from '../../../theme/constant'
import styles from './styles'


export default class jlk extends Component {

    state = {
        data : [
            {"main": "APPLICATION DETAILS", "data":[
                {"title": "Number", "des": '2019 049779 000 00 BR'},
                {"title": "Type", "des": 'Business Registration(Concrete Contractor)'},
                {"title": "Description", "des": 'ak(Arun Kumar)'},
                {"title": "Status", "des": 'Pre Application'},
            ]},

            {"main": "PAYMENT DETAILS", "data":[
                {"title": "Registered User", "des": 'Arun'},
                {"title": "Email Address", "des": 'v.arunpvi@gmail.com'},
                {"title": "Current Date", "des": '2019-05-08'},
                {"title": "Amount Due", "des": '$100.00'},
                {"title": "Interim Receipt Date", "des": '2019-05-08'},
            ]}
        ]
    }
    nextclick()
    {
        var data={title:"Application Confirmation",cid:5}
        this.props.changehaeder(data);
        this.props.next()
    }

    render() {
        const {data} = this.state
        return (
        <View style = {styles.container}>
                <FlatList
                    style={styles.listStyle}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                />
                <View style={[styles.footerBtnViewStyle,{alignItems:'center'}]}>
                        <FooterButton
                            style = {[styles.buttonStyle,{position:'relative'}]}
                            text = 'Apply'
                            onPress = {()=> { this.nextclick() }}
                        />
                    </View>
        </View>
        )
    }

    _renderItem = ({ item, index }) => {
        return( 
            <SummaryCell
                style = {{width: '100%', marginVertical: 10}}
                item = {item}
            /> 
    )

    }

}
