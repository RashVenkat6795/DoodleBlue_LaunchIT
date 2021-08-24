import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Image
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';

class SearchProperty extends Component {
    render() {

        const {hint, style, rightImage, type, height, disableShadow,multi, imageStyle, maxLength, value, onFocus} = this.props

        return (
            <View style = {[styles.container, {height: height}, style]}>
                <TextInput 
                    style = {[styles.textInput,{width:rightImage ? "70%" : "90%"},{...this.props.textInputStyle}]} 
                    placeholder = {hint} 
                    placeholderTextColor = "#AC9F9F" 
                    multiline={multi} 
                    textAlignVertical={multi ? 'top' : 'center'} 
                    onChangeText = {(text) => this.props.changeText(text)}
                    onFocus={() => onFocus ? onFocus() : {}}
                    value={value} />
                {rightImage && <Image 
                    source = {images[rightImage]}
                    style = {[styles.image,imageStyle]}
                /> }
            </View>
        )
    }


}

SearchProperty.defaultProps = {
    style: {},
    hint: null,
    rightImage: null,
    type: null,
    height: 50,
    disableShadow: false


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'white',
        borderColor: "#BFBFBF",
        justifyContent: 'center'
    },
    textInput: {
        position: 'absolute',
        left: 20,
        top: 0,
        bottom: 0,
        right: 0,
        ...fonts.H4_Regular
    },
    image: {
        alignSelf: 'flex-end',
        alignContent: 'center',
        marginRight: 20,
        height: 15,
        width: 15,
        justifyContent: 'center',
    }
    
    

})

export default SearchProperty;
