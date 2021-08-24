import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import { colors, fonts } from '../../theme/constant'

class BorderedButton extends Component {

    render() {
        const {text, height} = this.props
        return (
            <TouchableOpacity style = {[styles.container, this.props.style, {height: height}]} onPress = {this.props.onPress}>
                <Text style = {styles.rightText}>{text}</Text>
            </TouchableOpacity>
        )
    }


}

BorderedButton.defaultProps = {
    style: {},
    isSelected: false,
    selectedColor: colors.PRIMARY,
    deSelectedColor: colors.APP_LIGHT_GRAY,
    height: 50,
    isRounded: false,
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.PRIMARY,
        borderWidth: 0.75,
        borderRadius: 6,
    },
    rightText: {
        ...fonts.SUB_HEADING_BOLD,
        color: colors.PRIMARY,

    }

})

export default BorderedButton;
