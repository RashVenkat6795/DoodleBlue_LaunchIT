import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { colors, fonts } from '../../theme/constant'

class PermitDetails extends Component {

    render() {
        const {title, subTitle, style} = this.props

        return (
            <View style = {[styles.container, style]}>
                <Text style = {[styles.titleText,{...this.props.tetxStyle}]}>{title}</Text>
                <Text style = {[styles.sutitleText,{...this.props.subTextStyle}]}>{subTitle}</Text>
            </View>
        )
    }


}

PermitDetails.defaultProps = {
    style: {},
    title: null,
    subTitle: null,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: colors.CARD_BORDER_COLOR,
        borderWidth: StyleSheet.hairlineWidth
    },
    titleText: {
        ...fonts.H4_Bold,
        color: colors.TEXT_DARKGREY_COLOR,
        width:'50%',
        padding: 10
    },
    sutitleText: {
        ...fonts.H4_Regular,
        width:'50%',
        padding: 10
    }

    
    

})

export default PermitDetails;
