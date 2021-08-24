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


class PortalCell extends Component {

    render() {
        const {fullView} = this.props
        return (
               fullView ? this._renderFullView() : this._renderhalfView()
        )
    }

    _renderhalfView() {
        const {style,item} = this.props
        return(
             <TouchableOpacity style = {[styles.container,style]} onPress = {this.props.onPress}>
                    <Image
                        resizeMode = 'contain'
                        style = {{width: 31, height: 31,padding:10,marginTop:15}} 
                        resizeMode = 'contain'
                        source = {images[item.image]}
                    />
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:15}}>
                <Text style = {{...fonts.H4_Bold,textAlign:'left',width:'80%'}}>{item.text}</Text>
                <Image source={images.arrowLeft} style={{height:25,width:25}}/>
                </View>
                <View style={{height:1,backgroundColor:'#ABABAB',width:'100%'}}/>
                <Text style = {{...fonts.H2_Bold, marginTop: 5,paddingVertical:10}}>{item.count}</Text>
            </TouchableOpacity>
        )
    }

    _renderFullView() {
        const {style, item} = this.props
        return(
        <TouchableOpacity style = {[styles.container,style]} onPress = {this.props.onPress}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:15}}>
        <Image
            resizeMode = 'contain'
            style = {{width: 31, height: 31}} 
            resizeMode = 'contain'
            source = {images[item.image]}
        />
        <Image source={images.arrowLeft} style={{height:25,width:25}}/>
        </View>
        <View style={{height:1,backgroundColor:'#ABABAB',width:'100%',marginVertical:10}}/>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
        <Text style = {{...fonts.H3_Bold,textAlign:'left',width:'50%'}}>{item.text}</Text>
        <Text style = {{...fonts.H2_Bold,marginRight:10,textAlign:'right'}}>$ {item.count}</Text>
        </View>  
        </TouchableOpacity>
        )
    }
}

PortalCell.defaultProps = {
    style: {},
    size: 150
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection:'column',
        backgroundColor : 'white',
        paddingHorizontal : 15,
        margin: 10,
        borderRadius:17,
        borderWidth : StyleSheet.hairlineWidth,
        borderColor : colors.CARD_BORDER_COLOR
    },
    halfViewInnerViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 15,
        paddingBottom: 10,
        minHeight: 60,
        borderBottomWidth: 1,
        borderBottomColor: colors.CARD_BORDER_COLOR
    },
    fullViewInnerViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.CARD_BORDER_COLOR
    },
    fullViewBottomStyle:{
        flexDirection:'row', justifyContent:'space-between', marginTop: 10
    }
})

export default PortalCell;
