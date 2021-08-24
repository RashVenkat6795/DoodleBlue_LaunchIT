
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


class LicenseCell extends Component {
    
    render() {
        const {style, item} = this.props
        return (
            <TouchableOpacity style = {[styles.container, style]} onPress = {(item) => this.props.onPress(item)}>
                <View style = {[styles.tag, {backgroundColor: this._updateBackgroundColor()}]}>
                   <Text style = {[styles.tagText,{color:this._getTextColor()}]}>{this._getStatus()}</Text>
                </View>
                <Text style = {[styles.text, {...fonts.H2_Regular, color: colors.PRIMARY, marginRight: 30,width:'60%'}]}>{item.title}</Text>
                 <Text style = {[styles.text,{...fonts.H3_Bold}]}>{item.description}</Text>
                <View style={styles.locationStyle}>
                <Image 
                    resizeMode = 'contain'
                    source={images.location}
                    style = {styles.imageStyle}/>
                <Text style = {[styles.text, {color: colors.TEXT_BROWN_COLOR,marginTop:0,marginLeft:8,width:'80%'}]}>{item.address}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _getStatus() {
        switch(this.props.item.status) {
            case "Active" : return "Active"
            case "Pending" : return "Pending"
            case "Issued" : return "Issued"
            default : return this.props.item.status
        }
    }

    _updateBackgroundColor() {
        switch(this.props.item.status) {
            case "Active" : return "#17B857"
            case "Pending" : return "#F2994A"
            case  "Issued" : return "#E2A812"
            default : return "lightgrey"
        }  
    }

    _getTextColor() {
        switch(this.props.item.status) {
            case "Active" : case  "Issued" : return "white"
            case "Pending" : return "white"
            default : return "black" 
        }  
    }
 }



LicenseCell.defaultProps = {
    style: {},
    showButton: true
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.CARD_BORDER_COLOR,
        // elevation: 3,
    },
    text:{
        ...fonts.H3_Regular,
        marginTop: 10,
        marginLeft: 20 ,
        color: colors.TEXT_BROWN_COLOR
    },
    locationStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    imageStyle:{
        width: 18,
        height:18,
        marginLeft: 16
    },
    tag:{
        position: 'absolute',
        right:15, 
        top: 10,
       // height : 25,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:35/2,
        maxWidth : 140,
        paddingHorizontal:15
    },
    tagText:{
        ...fonts.H5_Bold,
        padding : 5,
        textAlign : 'center'
    }
})

export default LicenseCell;
