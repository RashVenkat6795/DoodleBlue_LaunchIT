
import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, FlatList, ScrollView} from "react-native";
import InputField from '../../../component/inputField/searchProperty';
import FooterButton from '../../../component/view/footerButton';
import RegisterInputField from '../../../component/inputField/registerInputField';
import Footer from '../../../component/view/uploadFooter'
import styles from "./styles";
import {colors} from '../../../theme/constant';

// import InputField from '../../../component/inputField/inputField';
// import PrimaryButton from '../../../component/Button/primaryButton';
// import Header from '../../../component/Header/AuthenticationHeader'
// import styles from "./styles";



export default class NewAttachment extends Component {

    constructor(props){
        super(props)
        this.state = {
            attachmentData: [
                {"text": "Attachment description",multi:true},
                {"text": "Attachment type","isDropdown": true},
                {"text": "More Information",},
            ]
        }
    }

    nextclick(){
        var data={title:"Attachment List",cid:2}
        this.props.changehaeder(data);
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
                textAlignVertical={'top'}
                style = {{ width:'100%', height: !!item.multi ? 100 : 50, alignSelf:'center', backgroundColor: 'white',top:10}}
                hint = {item.text}
                isDropdown={item.isDropdown}
                multi = {!!item.multi ? true : false}
            />
        )
    }

    render() {
        return (
        <View style = {styles.container}>
                <FlatList
                    style={styles.listStyle}
                    data={this.state.attachmentData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                />
                {this._renderFooter()}
         </View>
        )
    }

    _renderFooter() {
        return(
            <View style={{marginVertical:10,justifyContent:'space-between',alignItems:'center'}}>
              <FooterButton
                        style = {[styles.buttonStyle,{marginVertical:10,position:'relative',width:'95%'}]}
                        buttonStyle={{backgroundColor: 'transparent', borderWidth: 2, borderColor: colors.PRIMARY }}
                        text = 'Add Attachment'
                        textStyle={{color: colors.PRIMARY}}
                        onPress = {()=> {
                            
                        }}
                    />
                <FooterButton
                    style = {[styles.buttonStyle,{position:'relative',width:'95%'}]}
                    text = 'Upload'
                    onPress = {()=> {
                        this.nextclick()
                    }}
                />
           
            </View>
        )
    }

}
