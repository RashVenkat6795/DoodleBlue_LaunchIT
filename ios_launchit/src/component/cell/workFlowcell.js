
import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,ImageBackground
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';
import ScreenLayout from '../../constants/layout'


class WorkFlowCell extends Component {
    
    render() {
        const {style, item} = this.props
        return (
            <View style = {[styles.container, style]}>
               {this._renderText("Process","Status",fonts.H3_Regular)}
               {this._renderText("Staff","Scheduled",fonts.H5_Regular)}
               {this._renderText("Started","Ended",fonts.H5_Regular)}
            </View>
        )
    }

    _renderText(first,second,fontStyles) {
        return(
            <View style={styles.imageTextStyle}>
              <Text style = {[styles.text,{...fontStyles}]}>{first}</Text>
              <Text style = {[styles.text,{...fontStyles}]}>{second}</Text>
            </View>
        )
    }
 }


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal : 20,
        borderWidth:1,
        borderRadius:10,
        marginVertical:5,
        borderColor:'lightgrey'
    },
    horizontalStack : {marginVertical:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
    text: {color:'#333333'},
    imageTextStyle : {flexDirection:'row',alignItems:'center',marginVertical:10,justifyContent:'space-between'},
})

export default WorkFlowCell;
