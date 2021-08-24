import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';

class EscrowAccount extends Component {

    render() {
        const {title, subTitle, style} = this.props

        return (
            <View style = {[styles.container, style]}>
                <View style = {styles.textContainer}>
                    <Text style = {[styles.titleText,{...this.props.textStyle}]}>{title}</Text>
                </View>
                <View style = {styles.textContainer}>
                    <Text style = {styles.sutitleText}>{subTitle}</Text>
                </View>
            </View>
        )
    }


}

EscrowAccount.defaultProps = {
    style: {},
    title: null,
    subTitle: null,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth:StyleSheet.hairlineWidth,
        borderColor: colors.CARD_BORDER_COLOR
    },
    textContainer: {
        width:'50%'
    },
    titleText: {
        ...fonts.H3_Bold,
        width:'90%',
        padding: 15,
        paddingLeft: 20
    },
    sutitleText: {
        ...fonts.H3_Regular,
        width:'80%',
        padding: 15
    }

    
    

})

export default EscrowAccount;
