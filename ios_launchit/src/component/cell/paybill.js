import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';

class PayBillCell extends Component {

    render() {
        const {selectedImage, deselectedImage, innerStyle, item} = this.props

        return (
            <TouchableOpacity onPress = {this.props.onPress} style = {[styles.container, innerStyle]}>
                <View style={styles.innerContainer}>
                    <View style={styles.leftView}>
                        <Text style = {styles.headerText} ellipsizeMode={'tail'} numberOfLines={1}>{item.title}</Text>
                        <Text style = {styles.headerValue}>Fee amount {item.amount}</Text>
                    </View>
                    <View style={styles.rightView}>
                        <Text style = {styles.footerTitle}>Balance </Text> 
                        <Text style = {styles.priceText}>{item.amount}</Text>
                    </View>
                </View>
                <View style = {styles.imageView}>
                    <Image style = {styles.image} source = {images[item.isSelected ? selectedImage : deselectedImage]}/>
                </View>
            </TouchableOpacity>
        )
    }


}

PayBillCell.defaultProps = {
    innerStyle: {},
    selectedImage: "checkbox",
    deselectedImage: "unselected_checkbox",
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor:'white',
        paddingRight : 20,
        paddingVertical:20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.CARD_BORDER_COLOR,
        borderRadius: 5
    },
    innerContainer:{
        width:'95%',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    leftView:{
        width: '80%'
    },
    rightView:{
        width: '20%'
    },
    imageView: {
        justifyContent: 'center',
        width: '5%',
        alignItems: 'center',
    },
    image: {
        height: 23,
        width: 24,
    },
    headerText: {
        ...fonts.H3_Bold,
        width:'85%'
    },
    priceText:{
        ...fonts.H4_Bold,
        color: colors.TEXT_DARK_GRAY,
        marginTop: 5
    },
    footerTitle: {
        ...fonts.H3_Regular,
        color: colors.TEXT_BROWNRED_COLOR
    },
    headerValue: {
        ...fonts.H4_Regular,
        color: colors.TEXT_DARK_GRAY,
        marginTop: 5
    }
})

export default PayBillCell;
