import React, { Component } from "react";
import { SafeAreaView, View, ScrollView, FlatList} from "react-native";
import FooterButton from '../../../component/view/footerButton'
import RegisterInputField from '../../../component/inputField/registerInputField'
import TwoColumnInputField from '../../../component/view/TwoColumnInputField'
import styles from './styles'

export default class Alarm extends Component {

    state = {
        alarmData: [
            {"text": "Alarm Company Address",},
            {"text": "Alarm Company City",},
            {"text": "Alarm Company Name"},
            {"text": "Alarm Company Phone Number"},
            {"text": "Alarm Company State"},
            {"text": "Alarm Company ZipCode"},
            {"text": "Beat"},
            {"text": "Council District"},
            {"text": "Mapsco Page"},
            {"text": "PRA"},
        ]

    };
    nextclick() {
        var data={title:"Billing Information",cid:1}
        this.props.changehaeder( data);
        this.props.next()
    }

    onTextChange(text){
        console.log("onTextChange")
    }

    renderItem = ({ item, index }) => {
        return(
            <RegisterInputField
                onTextChange={(text) => {
                    this.setState({
                        // data: 
                    })
                }}
                style = {{ width:'100%', height: 50, alignSelf: 'center', backgroundColor: 'white' }}
                hint = {item.text}
            />
        )
    }

    render() {
        return (
        <SafeAreaView style = {styles.container}>
                <FlatList
                    style={[styles.listStyle]}
                    data={this.state.alarmData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                />
               <View style={[styles.footerBtnViewStyle,{alignItems:'center'}]}>
                        <FooterButton
                            style = {[styles.buttonStyle,{position:'relative'}]}
                            text = 'Next'
                            onPress = {()=> { this.nextclick() }}
                        />
                    </View>
        </SafeAreaView>
        )
    }

}
