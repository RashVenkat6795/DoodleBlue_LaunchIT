
import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, FlatList, ScrollView } from "react-native";
import Footer from '../../../component/view/uploadFooter'
import FooterButton from '../../../component/view/footerButton';
import AttachmentCell from '../../../component/cell/attachmentCell'
import styles from "./styles";
import { colors } from "../../../theme/constant";
// import InputField from '../../../component/inputField/inputField';
// import PrimaryButton from '../../../component/Button/primaryButton';
// import Header from '../../../component/Header/AuthenticationHeader'
// import styles from "./styles";



export default class AttachmentList extends Component {
    nextclick()
    {
        var data={title:"Terms & Conditions",cid:3}
        this.props.changehaeder(data);
        this.props.next()
    }
    render() {
        const data = ["1", "2", "3"]
        return (
            <View style = {styles.container}>
                    <FlatList
                        style={styles.listStyle}
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                    />
                    <View style={[styles.footerBtnViewStyle,{alignItems:'center'}]}>
                        <FooterButton
                            style = {[styles.buttonStyle,{position:'relative',width:'95%'}]}
                            buttonStyle={{backgroundColor: 'transparent', borderWidth: 2, borderColor: colors.PRIMARY }}
                            text = 'Add New Attachment'
                            textStyle={{color: colors.PRIMARY}}
                            onPress = {()=> {
                                
                            }}
                        />
                        <FooterButton
                            style = {[styles.buttonStyle,{position:'relative',width:'95%'}]}
                            text = 'Next'
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
                style = {{width: '100%', alignSelf: 'center', marginTop: 15}}
            /> 
        )
    }

}
