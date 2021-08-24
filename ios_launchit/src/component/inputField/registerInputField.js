import React, { Component } from "react";
import {
    View,
    TextInput,
    Image,
    StyleSheet,
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';

class RegisterInputField extends Component {

    render() {
        const {isSelected, selectedColor, deSelectedColor, hint, leftImage, isBottomBorder, title, isDropdown, hint1, isSecure,half} = this.props
        console.log("Register",this.props)
        const containerStyle = [styles.container]
        const borderStyle = { borderWidth: 1 }
        const bottomBorderStyle = { borderBottomWidth: 1 }

        // isBottomBorder ? containerStyle.push({...bottomBorderStyle}) : containerStyle.push({...borderStyle})

        return (
            <View style = {[ containerStyle, this.props.style, {borderColor: isSelected ? selectedColor : deSelectedColor }]}>
               {leftImage && <Image source = {images[leftImage]} style = {styles.leftImage}/>}
                <TextInput 
                    style = {[styles.textInput, {left: leftImage ? 35 : 20, width: title ? half ? '50%' : '60%' : '100%'}]} 
                    placeholder = {hint}
                    editable = {this.props.isEditable ? this.props.isEditable : true}
                    onChangeText={(text) => {
                        this.props.onTextChange(text)
                    }}
                    secureTextEntry={isSecure}
                    multiline = {this.props.multi}
                    textAlignVertical={this.props.textAlignVertical}

                />
                {title ? <View style={styles.viewStyle}>
                    <TextInput 
                        style = {[styles.textInput, {left: leftImage ? 35 : 0, width:'100%', paddingLeft: 10}]} 
                        placeholder = {title}
                        editable = {this.props.isEditable ? this.props.isEditable : true}
                        onChangeText={(text) => {
                            this.props.onTextChange(text)
                        }}
                        secureTextEntry={isSecure}
                        // keyboardType={keyboardType}
                    />
                </View> : null}
                {isDropdown ? <Image source={images['chevrondown']} style={{width: 20, height: 20, position:'absolute', right:15, top: 20}}/> : null}
            </View>
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
        //borderRadius: 5,
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
        marginLeft: 10,
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
        flexDirection:'row', 
        justifyContent:'space-between', 
        width:'40%', borderLeftWidth: 
        StyleSheet.hairlineWidth, 
        borderLeftColor: '#BFBFBF',
        alignItems:'center'
    }

})

export default RegisterInputField;
