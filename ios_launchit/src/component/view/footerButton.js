import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import Button from '../Button/primaryButton'

class FooterButton extends Component {

    render() {
        const {text, buttonHeight, height} = this.props
        return (
            <View style = {[styles.container, {height: height}, this.props.style]}>
                <Button
                    isRounded
                    style = {[{width: '80%', alignSelf: 'center', borderRadius: 35},this.props.buttonStyle]}
                    text = {text}
                    textStyle={[{fontSize: 16},this.props.textStyle]}
                    onPress = {this.props.onPress}
                    height = {buttonHeight}
                />
            </View>
        )
    }


}

FooterButton.defaultProps = {
    style: {},
    text: null,
    buttonHeight: 50,
    height: 70
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'transparent',
    },
})

export default FooterButton;
