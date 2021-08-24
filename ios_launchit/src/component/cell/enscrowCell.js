
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


class enscrowCell extends Component {
    
    render() {
        const {style, item} = this.props
        return (
            <TouchableOpacity style = {[styles.container, style]} onPress = {() => this.props.onPress()}>
                <View style = {[styles.tag, {backgroundColor: this._updateBackgroundColor()}]}>
                   <Text style = {[styles.tagText,{color:this._getTextColor()}]}>{this._getStatus()}</Text>
                </View>
                <Text style = {[styles.text, {...fonts.H3_Bold, color: colors.PRIMARY, marginRight: 30,width:'60%'}]}>{item.title}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:30,paddingVertical:20}}>
                <View style={styles.locationStyle}>
                <Image 
                    resizeMode = 'contain'
                    source={images.user}
                    style = {styles.imageStyle}/>
                <Text style = {[styles.text, {color:'black',marginTop:0,marginLeft:8,fontSize:16}]}>Arun</Text>
                </View>
              <Text style={{color:'black',right:20}}>Balance $50.00</Text>
              </View>
            </TouchableOpacity>
        )
    }

    _getStatus() {
        switch(this.props.item.isFinal) {
            case 1 : return "Active"
            case 2 : return "Pending"
            case 3 : return "Issued"
            default : return "" 
        }
    }

    _updateBackgroundColor() {
        switch(this.props.item.isFinal) {
            case 1 : return "#17B857"
            case 2 : return "#F2994A"
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



 enscrowCell.defaultProps = {
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
    text: {marginTop: 10, marginLeft: 30, ...fonts.H4_Regular},
    locationStyle : {flexDirection:'row',alignItems:'center'},
    imageStyle : {width: 18, height:18,tintColor:'black'},
    tag: {position: 'absolute', right:30, top: 10,justifyContent:'center',alignItems:'center',height:28,borderRadius:28/2,paddingHorizontal:20},
    tagText: {...fonts.H5_Bold},
})

export default enscrowCell;
