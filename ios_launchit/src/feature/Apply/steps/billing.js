import React, { Component } from "react";
import { SafeAreaView, View, ScrollView, Text, FlatList } from "react-native";
import FooterButton from '../../../component/view/footerButton';
import RegisterInputField from '../../../component/inputField/registerInputField'
import TwoColumnInputField from '../../../component/view/TwoColumnInputField'
import Radio from '../../../component/RadioButton/radioButtonView'
import styles from "./styles";
import {fonts,colors} from '../../../theme/constant'

export default class Billing extends Component {

    state = {
        billingData: [
            {"text": "Billing Address",},
            {"text": "Billing Attention Name",},
            {"text": "Billing City"},
            {"text": "Billing State"},
            {"text": "Billing ZipCode"},
            {"text": "Correspondence E-mail *"},
            {"text": "Date of First False Alarm "},
            {"text": "Number of False Alarms"}
          
        ]
    };

    nextclick() {
        var data={title:"Applicant Information",cid:1}
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
                <ScrollView>
                    <View style = {{ width: '100%', padding: 15 }}>
                        <Radio
                            style = {[styles.container]}
                            onSelect = {(isYes)=> {
                                // alert(isYes)
                            }}
                            text="Applicant a 100% Disabled Veteran?"
                        />
                        <Radio
                            style = {[styles.container]}
                            onSelect = {(isYes)=> {
                                // alert(isYes)
                            }}
                            text="Applicant over 65?"
                        />
                    </View>
                    <FlatList
                        style={[styles.listStyle]}
                        data={this.state.billingData}
                        keyExtractor={(item, index) => index.toString()}
                        ListFooterComponent = {() => (
                            <View style={{margin:20}}>
                            <Text style={{...fonts.H4_Regular, color: colors.TEXT_DARKGREY_COLOR}}>Preferred Correspondence option *</Text>
                        </View>
                        )}
                        renderItem={this.renderItem}
                    />
                    <View style={styles.footerBtnViewStyle}>
                        <FooterButton
                            style = {styles.buttonStyle}
                            text = 'Next'
                            onPress = {()=> {
                                this.nextclick()
                            }}
                        />
                    </View>
            
                </ScrollView>
            </View>
        )
    }   

}
