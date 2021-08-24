
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


class TransactionsCell extends Component {
    
    render() {
        const {style, item} = this.props
        return (
            <View style = {[styles.container, style]} onPress = {() => this.props.onPress()}>
                <View style = {[styles.tag, {backgroundColor: this._updateBackgroundColor()}]}>
                   <Text style = {[styles.tagText,{color:this._getTextColor()}]}>{this._getStatus()}</Text>
                </View>
                <Text style = {[styles.text, {...fonts.H3_Bold, marginRight: 30,width:'60%'}]}>{item.title}</Text>
                <Text style = {[styles.text, {...fonts.H4_Regular,marginRight: 30,width:'60%',color:'#666666'}]}>{item.description}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:30,paddingVertical:20}}>
                <View style={styles.locationStyle}>
                <Image 
                    resizeMode = 'contain'
                    source={images.calendar}
                    style = {styles.imageStyle}/>
                <Text style = {[styles.text, {color:'black',marginTop:0,marginLeft:12,fontSize:14}]}>{item.date}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{color:'black',marginRight:5,color:colors.PRIMARY}}>Amount</Text>
              <Text style={{color:'black',marginRight:5}}>$50.00</Text>
              </View>
              </View>
            </View>
        )
    }

    _getStatus() {
        switch(this.props.item.isFinal) {
            case 1 : return "Deposit"
            case 2 : return "Withdrawn"
            case 3 : return "Issued"
            default : return "" 
        }
    }

    _updateBackgroundColor() {
        switch(this.props.item.isFinal) {
            case 1 : return "#27AE60"
            case 2 : return "#FC4A4A"
            case 3 : return "#E2A812"
            default : return "" 
        }  
    }

    _getTextColor() {
        switch(this.props.item.isFinal) {
            case 1 : case 3 : return "white"
            case 2 : return "white"
            default : return "" 
        }  
    }
 }



 TransactionsCell.defaultProps = {
    style: {},
    showButton: true
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#BFBFBF",
        // borderRadius: 7,
        elevation: 3,
    },
    text: {marginTop: 10, marginLeft: 30},
    locationStyle : {flexDirection:'row',alignItems:'center'},
    imageStyle : {width: 15, height:15,tintColor:colors.PRIMARY},
    tag: {position: 'absolute', right:30, top: 10,justifyContent:'center',alignItems:'center',height:25,borderRadius:25/2,paddingHorizontal:20},
    tagText: {...fonts.H5_Bold},
})

export default TransactionsCell;
