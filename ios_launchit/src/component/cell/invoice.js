import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, fonts } from '../../theme/constant'

class InvoiceCell extends Component {

    render() {
        const {header, subHeader, item} = this.props

        return (
            <TouchableOpacity onPress = {this.props.onPress} style = {[styles.container, this.props.style]}>
                <View style = {[styles.innerContainer]}>
                    <View style={styles.leftContainer}>
                        <Text style = {styles.headerText}>{item.title}</Text>
                        <Text style = {styles.subHeaderText}>{item.description}</Text>
                        <Text style = {styles.footerTitle}>Fee Description <Text style = {styles.footerValue}>$50.00</Text></Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style = {styles.footerTitle}>Bill Amount </Text>
                        <Text style = {styles.footerContent}>{item.amount}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


}

InvoiceCell.defaultProps = {
    style: {},
    header: null,
    subHeader: null,
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor:'white',
        marginVertical: 10,
        borderWidth : 0.5,
        borderColor : '#C7C7C7',
        // borderRadius: 5,
        // shadowOffset: { width: 0, height: 2 },
        // shadowColor: 'rgba(140, 140, 140, 0.15)',
        // shadowOpacity: 1,
        // elevation: 1
    },
    innerContainer: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.APP_LIGHT_GRAY,
        // padding: 10,
    },
    leftContainer:{
        width:'70%',
        padding: 10,
        paddingHorizontal: 30
    },
    rightContainer:{
        width:'30%',
        alignItems:'center',
        justifyContent:'center',
        margin: 10,
        borderLeftWidth: 1,
        borderLeftColor: 'rgba(0, 0, 0, 0.09)'
    },
    headerText: {
        ...fonts.H3_Regular,
    },
    subHeaderText: {
        ...fonts.H4_Regular,
        color: colors.TEXT_DARK_GRAY,
        marginTop: 5
    },
    footerTitle: {
        ...fonts.H4_Regular,
        color: colors.PRIMARY,
        marginTop: 15
    },
    footerValue:{
        ...fonts.H4_Regular,
        color: colors.TEXT_PRIMARY,
        marginLeft: 10
    },
    footerContent: {
        ...fonts.H3_Regular,
        color: colors.TEXT_PRIMARY
    }
    

})

export default InvoiceCell;
