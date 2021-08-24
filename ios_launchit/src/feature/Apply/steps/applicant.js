import React, { Component } from "react";
import { SafeAreaView,View, ScrollView, FlatList } from "react-native";
import FooterButton from '../../../component/view/footerButton'
import RegisterInputField from '../../../component/inputField/registerInputField'
import TwoColumnInputField from '../../../component/view/TwoColumnInputField'
import styles from './styles'

export default class Applicant extends Component {

    state = {
        alarmData: [
            {"text": "Business Phone",},
            {"text": "Date Moved To Permit Address",},
            {"text": "Driver's License ID*"},
            {"text": "Date of Birth (YYYY-MM-DD)*"},
            {"text": "Driver's License State*"},
            {"text": "Number of False Alarms"},
            {"text": "Phone Number Permit Address*"},
        ]
    };

    nextclick() {
        var data={title:"CAD Information",cid:1}
        this.props.changehaeder( data);
        this.props.next()
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
            <View style = {styles.container}>
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
                {/* <TwoColumnInputField
                data = {this.state.alarmData}
                /> */}
                
            </View>
        )
    }   

}
