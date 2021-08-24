
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


class PlumbingPermitcell extends Component {
    
    render() {
        const {style, item,status} = this.props
        return (
            <View style = {[styles.container, style]}>
                <View style={{width:'40%'}}>
                    <Text style = {[styles.titleText]}>{item.title}</Text>
                </View>
                <View style={{width:'60%'}}>
                    <Text style = {[item.value == "Active" ? {...fonts.H4_Bold} : {...fonts.H4_Regular},styles.text, {color: item.value == 'Active' ? colors.TEXT_GREEN : item.value == 'Pending' ? colors.TEXT_YELLOW : "#333333"}]}>{item.value}</Text>
                </View>
            </View>
        )
    }
 }


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems : 'center',
        paddingHorizontal : 15,
        paddingVertical:10
       // borderRadius:5
    },
    titleText : {...fonts.H5_Bold,color:'black', width:'90%'},
    text: {width:'90%',color:colors.TEXT_BROWN_COLOR},
})

export default PlumbingPermitcell;
