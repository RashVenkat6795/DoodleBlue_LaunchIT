
import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, FlatList, ScrollView } from "react-native";
import Footer from '../../../component/view/uploadFooter'
import AttachmentCell from '../../../component/cell/attachmentCell'
import FooterButton from '../../../component/view/footerButton';
// import InputField from '../../../component/inputField/inputField';
// import PrimaryButton from '../../../component/Button/primaryButton';
// import Header from '../../../component/Header/AuthenticationHeader'
import styles from "./styles";
import {colors, fonts} from '../../../theme/constant'



export default class TNC extends Component {
    constructor(props){
        super(props);
    }
    nextclick()
    {
        var data={title:"Invoice",cid:4}
        this.props.changehaeder(data);
        this.props.next()
    }

    render() {
        const data = ["1", "2", "3"]
        return (
        <View style = {styles.container}>
            <ScrollView>
                <View style={styles.termsTextViewStyle}>
                    <Text style = {styles.termsHeaderTextStyle}>PLEASE CONFIRM THE FOLLOWING DETAILS</Text>
                    <Text style = {styles.termsDescStyle}>I hereby certify that I have read and examined this application and know the same to be true and correct. All provisions of laws and ordinances governing this type of work will be complied with whether specified herein or not. The granting of a permit does not presume to give authority to violate or cancel the provisions of any other state or local ordinances regulating construction, the performance of construction or the use of any land or buildings.</Text>
                </View>
            </ScrollView>
            <View style={[styles.footerBtnViewStyle,{alignItems:'center'}]}>
                    <FooterButton
                        style = {[styles.buttonStyle,{position:'relative',width:'95%'}]}
                        buttonStyle={{backgroundColor: 'transparent', borderWidth: 2, borderColor: colors.PRIMARY }}
                        text = 'Disagree'
                        textStyle={{color: colors.PRIMARY}}
                        onPress = {()=> {
                            // this.nextclick()
                        }}
                    />
                    <FooterButton
                        style = {[styles.buttonStyle,{position:'relative',width:'95%'}]}
                        text = 'Agree'
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
            <AttachmentCell
                style = {{width: '90%', alignSelf: 'center', marginTop: 15}}
            /> 
    )

    }

}
