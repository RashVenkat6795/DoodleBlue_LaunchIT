import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import Button from '../Button/primaryButton'
import InputField from '../inputField/searchProperty'

class FooterButton extends Component {

    render() {
        const {hint, buttonText, amount} = this.props
        return (
            <View style = {[styles.container, this.props.style]}>
                <View style={styles.textViewStyle}>
                    <Text style = {{...fonts.H3_Bold}}>Total Amount Payable</Text>
                    <Text style = {{...fonts.H3_Bold,color:colors.PRIMARY}}>{amount}</Text>
                </View>
                <InputField
                    style = {styles.textContainer}
                    textInputStyle = {{fontSize:18,color:'black'}}
                    hint = {hint}
                    isSecure={true}
                    multi = {false}
                    imageStyle={{width: 16, height: 16}}
                    rightImage={'eyyOff'}
                />
                <Button
                    style = {[styles.textContainer,{marginTop: 10}]}
                    text = {buttonText}
                    onPress = {this.props.onPress}
                />
            </View>
        )
    }


}

FooterButton.defaultProps = {
    style: {},
    hint: null,
    buttonText:null,
    amount: null,
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'white',
        paddingTop: 30
    },
    textViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'85%',
        marginBottom: 10,
        alignSelf:'center'
    },
    textContainer: {
        width: '85%',
        alignSelf:'center',
        marginBottom: 15,
        borderRadius: 5
    },

    

})

export default FooterButton;
