import React, { Component } from "react";
import {
    View,
    TextInput,
    Image,
    StyleSheet,Text
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialDropDown from '../../component/MaterialDropDown'

class InputAndButtonField extends Component {

    render() {
        const {isSelected, selectedColor, deSelectedColor, hint, leftImage, isBottomBorder, title, isDropdown, hint1, isSecure,half,semiHalf,isLeftDropDown,isTextInput,secondHint,customImage, dropdownData, keyboardType} = this.props
        const containerStyle = [styles.container]
        const borderStyle = { borderWidth: 1 }
        const bottomBorderStyle = { borderBottomWidth: 1 }

        // isBottomBorder ? containerStyle.push({...bottomBorderStyle}) : containerStyle.push({...borderStyle})

        return (
            <View style={{flexDirection:'row',justifyContent:'space-between',borderTopWidth: StyleSheet.hairlineWidth, borderColor: '#BFBFBF',width:'100%'}}>
            <View style = {[ containerStyle, this.props.style, {borderColor: isSelected ? selectedColor : deSelectedColor,width: half ? '50%' : semiHalf ? "70%" : "100%"}]}>
               {leftImage && <Image source = {images[leftImage]} style = {styles.leftImage}/>}
                <TextInput 
                    style = {[styles.textInput, {left: leftImage ? 35 : 10, width:"85%"}]} 
                    placeholder = {hint}
                    editable = {this.props.isEditable ? this.props.isEditable : true}
                    onChangeText={(text) => {
                        this.props.onTextChange(text)
                    }}
                    keyboardType={keyboardType && 'default'}
                />
                {isLeftDropDown && <View style={{width:'15%',alignItems:'center',justifyContent:'center',right:customImage ? 20 :10,marginTop:10}}><Image source={customImage ? customImage : images['chevrondown']} style={{width: 20, height: 20,tintColor:'#A2A2A2'}}/></View>}
            </View>
            {/* {title && <TouchableOpacity style={[styles.viewStyle,this.props.style,{width:half?'70%':'54%'}]}>
                    <Text numberOfLines = {1} style = {[styles.textInput, {width:"80%",color:'#A2A2A2',marginLeft:10}]} >{title}</Text>
                    {isDropdown && <View style={{width:'20%',alignItems:'center',justifyContent:'center',marginTop:15}}><Image source={customImage ? customImage : images['chevrondown']} style={{width: 20, height: 20,right:20,tintColor:'#A2A2A2'}}/></View>}
                </TouchableOpacity>} */}
            {isTextInput &&  
                <View style={[styles.viewStyle,this.props.style]}>
                   <TextInput 
                        style = {[styles.textInput,{width:'100%'}]} 
                        placeholder = {secondHint}
                        editable = {this.props.isEditable ? this.props.isEditable : true}
                        onChangeText={(text) => {
                            this.props.onTextChange(text)
                        }}
                        secureTextEntry={isSecure}
                        keyboardType={keyboardType && 'default'}
                    />
                </View>
            }
            {isDropdown && <View style={[{flex:1, width:half?'70%':'54%'}]}>
                    <MaterialDropDown data={this.props.dropdownData} placeholder={title} onChangeText={this.props.onTextChange}/>
                    {/* styles.viewStyle,this.props.style,, half?'70%':'54%' */}
                    {/* {isDropdown && <View style={{width:'20%',alignItems:'center',justifyContent:'center',marginTop:15}}><Image source={customImage ? customImage : images['chevrondown']} style={{width: 20, height: 20,right:20,tintColor:'#A2A2A2'}}/></View>} */}
                </View>}
            </View>
        )
    }


}

InputAndButtonField.defaultProps = {
    style: {},
    isSelected: false,
    selectedColor: colors.PRIMARY,
    deSelectedColor: colors.APP_LIGHT_GRAY,
    hint: null,
    isSecure: false,
    leftImage: null,
    isBottomBorder: true,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRightWidth: StyleSheet.hairlineWidth,
        borderColor: '#BFBFBF',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    leftImage: {
        height: 18,
        width: 18,
        marginLeft: 8,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    textInput: {
        ...fonts.SUB_HEADING,
        marginLeft: 10,
        // position: 'absolute',
        // left: 46,
        // top: 0,
        // bottom: 0,
        // right: 8,
    },
    rightImage: {
        height: 30,
        width: 30,
        marginRight: 8,
        backgroundColor: 'green',
        alignSelf: 'flex-end',
    },
    viewStyle:{
        flexDirection:'row',
        justifyContent:'space-between', 
        borderLeftColor: '#BFBFBF',
        backgroundColor : 'white',
        alignItems:'center'
    }

})

export default InputAndButtonField;