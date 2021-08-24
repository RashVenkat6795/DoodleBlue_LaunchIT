
import React, { Component } from "react";
import {
    SafeAreaView,
    FlatList,
    Image,
    Text,View
} from "react-native";
import FooterButton from '../../component/view/footerButton'
import HeaderLeft from '../../component/Header/MainHeaderLeft'
import styles from './steps/styles'
import {colors,fonts} from '../../theme/constant'
import { ScrollView } from "react-native-gesture-handler";


export default class ApplySuccess extends Component {
    constructor(props){
        super(props)
        var navioption = props.navigation;
        props.navigation.setOptions({ title: "Application Confirmation", headerStyle: styles.headerStyle })
    }
    render() {
        return (
        <View style = {styles.container}>
            <View style = {{justifyContent:'center',alignItems:'center',flex:1}}>
               <View>
                    <Image
                        style = {{width: 80, height: 80}}
                        source = {require('../../assets/images/success.png')}
                    />
                </View>
                <View style={{justifyContent:'center',alignItems:'center',width:"80%"}}>
                    <Text style={{...fonts.H3_Bold, marginTop: 30,}}>Submitted Successfully.</Text>
                    <Text style = {{...fonts.H4_Regular, color: colors.TEXT_DARK_GRAY, textAlign:'center', width:'90%', marginTop: 15}}>You application has been successfully submitted. An email confirmation is sent to your registered email.</Text>
                </View>
            </View>
            <FooterButton
                style = {{width: '100%',position:'relative',width:'95%',alignSelf:'center',marginBottom:45}}
                text = 'Apply for Another Permit'
                onPress = {()=> {
                    this.props.navigation.navigate("Apply")
                }}
            />


        </View>
        )
    }


}
