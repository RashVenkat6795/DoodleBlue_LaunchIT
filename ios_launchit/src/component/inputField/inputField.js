import React, { Component } from "react";
import {
    View,
    TextInput,
    Image,
    StyleSheet,
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';

class InputField extends Component {

    render() {
        const {isSelected, selectedColor, deSelectedColor, hint, leftImage, isBottomBorder} = this.props
        const containerStyle = [styles.container]
        const borderStyle = { borderWidth: 1 }
        const bottomBorderStyle = { borderBottomWidth: 1 }

        isBottomBorder ? containerStyle.push({...bottomBorderStyle}) : containerStyle.push({...borderStyle})

        let rightborderStyle = leftImage ? { borderRightColor: 'rgba(148, 148, 148, 0.31)', paddingHorizontal: 25, borderRightWidth: 1} : {}
        return (
            <View 
                style = {[
                    containerStyle, 
                    this.props.style, 
                    {borderColor: isSelected ? selectedColor : deSelectedColor,
                    }]}>
                <Image 
                    source = {images[leftImage]}
                    style = {[styles.leftImage,rightborderStyle]}
                />
                <TextInput 
                    style = {[styles.textInput, {left: leftImage ? 20 : 10}]} 
                    placeholder = {hint}
                    onChangeText={(text) => {
                        this.props.onTextChange(text)
                    }}
                />
            </View>
        )
    }


}

InputField.defaultProps = {
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
        borderRadius: 8,
    },
    leftImage: {
        height: 25,
        width: 25,
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
    }

})

export default InputField;
