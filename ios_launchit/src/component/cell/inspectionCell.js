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

class InspectionCell extends Component {

    render() {
        const {style, item} = this.props

        return (
            <TouchableOpacity style = {styles.container} onPress = {this.props.onPress}>
                <View style={styles.cellContentStyle}>
                    <View style={styles.cellInnerContainerStyle}>
                        <Text style={{...fonts.H3_Regular, color:colors.PRIMARY}} ellipsizeMode={'tail'} numberOfLines={1}>{item.PermitNumber}</Text>
                        <View style={styles.badgestyle}>
                            <Text style={{...fonts.H5_Bold,color:'white'}}>{item.StatusDesc}</Text>
                        </View>
                    </View>
                    <Text style={{...fonts.H4_Bold, marginTop: 10 }}>{item.FolderDesc}</Text>
                    {/* <Text style={{...fonts.H4_Regular, marginTop: 5 }}>{item.subtitle}</Text> */}
                    <View style = {{marginVertical: 10}}>
                        {this._renderItem(item.processDesc, "location",fonts.H4_Regular)}
                    </View>
                </View>
                
                <TouchableOpacity onPress={this.props.onPressSchedule} style={styles.buttonStyle}>
                    <Text style = {styles.buttonTextStyle}>Schedule Inspection</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    _renderItem = (text, image,fontStyle) => {
        return (
            <View style = {{flexDirection: 'row'}}>
                <Image 
                    resizeMode = 'contain'
                    source={images[image]}
                    style = {{width: 15, height:15, alignSelf: 'center'}}/>
                <Text style = {{marginLeft: 12, alignSelf: 'center', ...fontStyle}}>{text}</Text>
            </View>
        )
    }


}

InspectionCell.defaultProps = {
    style: {},

}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor:'white',
        marginBottom: 20,
        paddingLeft: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor:colors.CARD_BORDER_COLOR
    },
    innerContainer: {
        width: '100%',
        backgroundColor:'white',
    },
    badgestyle:{
        backgroundColor: '#56B562',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20
    },
    buttonStyle: {
        backgroundColor:'white', 
        width: '100%', 
        height: 40, 
        justifyContent: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor:colors.CARD_BORDER_COLOR,
    },
    buttonTextStyle:{
        ...fonts.H4_Bold,
        color: 'white',
        marginLeft :20,
       // alignSelf: 'center',
        color: colors.PRIMARY
    },
    cellContentStyle:{
        paddingVertical: 10, paddingHorizontal: 20
    },
    cellInnerContainerStyle:{
        flexDirection:'row', justifyContent: 'space-between'
    },
    textStyle:{
        width:'80%'
    }
})

export default InspectionCell;
