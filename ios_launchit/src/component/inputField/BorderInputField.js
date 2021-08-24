import React, { Component } from "react";
import {
    View,
    TextInput,
    Image,
    StyleSheet,
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';
import { TouchableOpacity } from "react-native-gesture-handler";

class BorderInputField extends Component {

    render() {
        const {isSelected, selectedColor, deSelectedColor, hint, isBottomBorder,rightImage, leftImage} = this.props
        const containerStyle = [styles.container]

        return (
            <View style = {[containerStyle, this.props.style, ]}>
                {leftImage && <TouchableOpacity onPress = {() => this.props.leftImageAction()}><Image 
                    source = {images[leftImage]}
                    style = {styles.leftImage}
                /></TouchableOpacity>}
                <TextInput 
                    style = {[styles.textInput,{width : rightImage || leftImage ? '75%' : rightImage && leftImage ? '50%' : '95%'}]} 
                    placeholder = {hint}
                    placeholderTextColor = '#A2A2A2'
                    keyboardType = {this.props.keyboardType ? this.props.keyboardType : 'default'}
                    secureTextEntry = {this.props.isSecure}
                    onChangeText={(text) => {
                        this.props.onTextChange(text)
                    }}
                    // onBlur = {()=> this.props.onBlur()}
                />
                 {rightImage && <TouchableOpacity onPress = {() => this.props.righImageAction()}><Image 
                    source = {images[rightImage]}
                    style = {styles.rightImage}
                /></TouchableOpacity>}
            </View>
        )
    }


}

BorderInputField.defaultProps = {
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
        alignItems : 'center',
        // borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#BFBFBF',
        borderRadius:4,
        // shadowColor: 'lightgray',
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.7,
        // elevation : 2,
        // shadowRadius: 3,  
    },
    textInput: {
        ...fonts.SUB_HEADING,
        //position: 'absolute',
        marginLeft:5,
    },
    rightImage: {
        alignContent: 'center',
        marginRight: 15,
        // marginLeft : 20,
        height: 15,
        width: 15,
    },
    leftImage:{
        alignContent: 'center',
        marginRight: 5,
        marginLeft : 5,
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems : 'center'
    }

})

export default BorderInputField;
