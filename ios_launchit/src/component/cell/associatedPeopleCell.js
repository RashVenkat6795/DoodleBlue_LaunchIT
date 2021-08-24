
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


class AssociatedPeopleCell extends Component {
    
    render() {
        const {style, item} = this.props
        return (
            <View style = {[styles.container, style]}>
               <View style={styles.horizontalStack}>
               {this._renderImageText(item.name,images.users,fonts.H3_Regular)}
               {this._renderImageText(item.location,images.location,fonts.H5_Regular)}
               </View>
              <Text style = {{...fonts.H5_Regular,color:'#403939'}}>{item.Designation}</Text>
               <View style={styles.horizontalStack}>
               {this._renderImageText(item.email,images.mail,fonts.H5_Regular,"#333333")}
               {this._renderImageText(item.phoneNumber,images.smartphone,fonts.H5_Regular,"#333333")}
               </View>
            </View>
        )
    }

    _renderImageText(item,imageName,fontStyles,color) {
        return(
            <View style={styles.imageTextStyle}>
               <Image 
                    resizeMode = 'contain'
                    source={imageName}
                    style = {styles.imageStyle}/>
                <Text style = {{marginLeft:10,...fontStyles,color:color}}>{item}</Text>
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
    imageStyle : {width: 15, height:15},
    imageTextStyle : {flexDirection:'row',alignItems:'center',marginVertical:10},
})

export default AssociatedPeopleCell;
