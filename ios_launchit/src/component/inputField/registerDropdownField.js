import React, { Component } from "react";
import { View, TextInput, Image, StyleSheet,TouchableOpacity, Text} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';

class RegisterDropdownField extends Component {

    render() {
        const {isSelected, selectedColor, deSelectedColor, hint, leftImage, isBottomBorder, title, isDropdown, half} = this.props
        const containerStyle = [styles.container]
        const borderStyle = { borderWidth: 1 }
        const bottomBorderStyle = { borderBottomWidth: 1 }

        // isBottomBorder ? containerStyle.push({...bottomBorderStyle}) : containerStyle.push({...borderStyle})

        return (
            <TouchableOpacity style = {[ containerStyle, this.props.style, {borderColor: isSelected ? selectedColor : deSelectedColor }]}>
                <Text style={[styles.textInput,{color: colors.TEXT_CUSTOM_GRAY}]}>{title}</Text>
                <Image source={images['chevrondown']} style={{width: 20, height: 20}}/>
            </TouchableOpacity>
        )
    }


}

RegisterInputField.defaultProps = {
    style: {},
    isSelected: false,
    selectedColor: colors.PRIMARY,
    deSelectedColor: colors.APP_LIGHT_GRAY,
    hint: null,
    isSecure: false,
    leftImage: null,
    isBottomBorder: true,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-between',
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#BFBFBF'
    },
    leftImage: {
        height: 18,
        width: 18,
        marginLeft: 8,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    textInput: {
        ...fonts.SUB_HEADING,
        // position: 'absolute',
        // left: 46,
        // top: 0,
        // bottom: 0,
        // right: 8,
    },
    rightImage: {
        height: 30,
        width: 30,
        marginRight: 8,
        backgroundColor: 'green',
        alignSelf: 'flex-end',
    },
    viewStyle:{
        flexDirection:'row', justifyContent:'space-between', width:'40%', borderLeftWidth: StyleSheet.hairlineWidth, borderLeftColor: '#BFBFBF'
    }

})

export default RegisterDropdownField;