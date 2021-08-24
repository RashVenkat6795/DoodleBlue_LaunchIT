
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


class SearchResultCell extends Component {

    render() {
        const {style, item, showButton} = this.props
        return (
            <TouchableOpacity style = {[styles.container, style]} onPress={this.props.onPress}>
                <View style = {[styles.tag, {backgroundColor: item.StatusDesc == 'Open' ? '#17B857' : '#EB5757'}]}>
                    <Text style = {styles.tagText}>{item.StatusDesc == 'Open' ? 'Open' : 'Closed'}</Text>
                </View>
                <TouchableOpacity onPress = {() => this.props.onPress()}>
                <Text style = {[styles.text, {...fonts.H3_Bold, color: colors.PRIMARY, marginRight: 30}]}>{item.PermitORCase}</Text>
                </TouchableOpacity>
                <Text style = {styles.text}>

                    <Text style = {{...fonts.H4_Bold}}>{item.ReferenceFileName}</Text>
                    <Text>   </Text>           
                    <Text style = {{...fonts.H4_Regular,color: colors.TEXT_DARK_GRAY}}>{item.FolderDescription}</Text>
                   
                   
                    {/* <Text style = {{...fonts.H4_Bold}}>{item.FolderDescription}</Text>
                    <Text>   </Text>
                    <Text style = {{...fonts.H4_Regular,color: colors.TEXT_DARK_GRAY}}>{item.ReferenceFileName}</Text> */}
                </Text>
                <Text style = {[styles.text, {color: colors.TEXT_DARK_GRAY}]}>{item.ProjectName}</Text>
                <Text style = {[styles.text, {marginBottom: 13, color: colors.TEXT_DARK_GRAY}]}>{item.SubTypeNWorkType}</Text>
                {showButton && this._renderButton()}
            </TouchableOpacity>
        )
    }

    _renderButton = () => {
        return (
            <TouchableOpacity style = {[styles.button]} onPress={this.props.onPress}>
                <Text style = {{...fonts.H4_Bold,color:colors.PRIMARY,marginLeft:20}}>View Related Folder</Text>
            </TouchableOpacity>
        )
    }

}



SearchResultCell.defaultProps = {
    style: {},
    showButton: true
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#E3E3E3",
        //borderRadius: 7,
      //  elevation: 3,
    },
    text: {marginTop: 10,marginLeft:20, ...fonts.H4_Regular},
    button: {width: '100%',height: 45,backgroundColor:'transparent',borderWidth:1,borderColor:'lightgrey',borderRadius:0,justifyContent:'center'},
    tag: {position: 'absolute', right: 10, top:10, justifyContent: 'center',height:30, borderRadius: 15,alignItems:'center'},
    tagText: {alignSelf: 'center', marginLeft: 13, marginRight: 10,...fonts.H5_Bold,color: 'white',},
})

export default SearchResultCell;
