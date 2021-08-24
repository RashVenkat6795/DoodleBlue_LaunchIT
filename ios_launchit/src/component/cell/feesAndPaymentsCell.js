
import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';
import ScreenLayout from '../../constants/layout'
import CurrencyFormatter from "../CurrencyFormatter";


class PlumbingPermitcell extends Component {
    
    render() {
        const {style, item} = this.props
        return (
            <View style = {[styles.container, style]}>
                <View style={styles.subViewStyle}>
                    <Text style = {[styles.text]}>{item.title}</Text>
                    <Text style={{color:'grey',marginVertical:5}}>{`Fee Amount $ ${CurrencyFormatter(parseInt(item.feeAmount))}`}</Text>
                </View>
                {this._renderAmountView(item.balance)}
            </View>
        )
    }

    _renderAmountView(balance) {
        return(
            <View style={{flexDirection:'column'}}>
               <Text style={{...fonts.H3_Regular,color:'red'}}>Balance</Text> 
               <Text style={{...fonts.H3_Bold,marginVertical:5,color:'grey'}}>{`$ ${CurrencyFormatter(parseInt(balance))}`}</Text> 
            </View>
        )
    }
 }


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding : 15,
        borderColor: colors.APP_LIGHT_GRAY,
        borderWidth: 0.75,
        //borderRadius:10,
        marginVertical:5
    },
    text: {...fonts.H4_Bold},
    subViewStyle : {flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between',width:'60%'}
})

export default PlumbingPermitcell;
