import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,Image
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from "../../assets/constant";

class PrimaryButton extends Component {

    render() {
        const {text, height, isRounded,isRightImage,rightImage, textStyle} = this.props
        return (
            <TouchableOpacity style = {[styles.container, this.props.style, {height: height, borderRadius: isRounded ? (height/2) : (height/2)}]} onPress = {this.props.onPress}>
                {isRightImage && <Image source={rightImage} style={{height:25,width:25,marginHorizontal:10,position:'absolute',justifyContent:'flex-start',left:5}}/>}
                <Text style = {[styles.rightText,{color:!!this.props.color ? this.props.color : 'white'},this.props.textStyle]}>{text}</Text>
            </TouchableOpacity>
        )
    }


}

PrimaryButton.defaultProps = {
    style: {},
    isSelected: false,
    selectedColor: colors.PRIMARY,
    deSelectedColor: colors.APP_LIGHT_GRAY,
    height: 50,
    isRounded: false,
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PRIMARY,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightText: {
        ...fonts.H3_Bold
    }

})

export default PrimaryButton;
