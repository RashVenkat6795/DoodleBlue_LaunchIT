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
import moment from 'moment'

class InspectionCell extends Component {

    render() {
        const {style, item} = this.props

        return (
            <View style = {styles.container}>
                {this._renderItem(item.FolderNumber, "file_darkblue",fonts.H4_Bold)}
                {this._renderItem(item.FOLDERDESC, null ,fonts.H3_Bold)}
                <View style={{ flexDirection:'row'}}>
                    <View style={styles.leftPane}>
                        {this._renderItem(item.PROCESSDESC, "edit_darkblue",fonts.H4_Regular)}
                    </View>
                    <View style={styles.rightPane}>
                        {this._renderItem(moment(item.SCHEDULEDDATE).format("MM/DD/YYYY"), "calendar_darkblue",fonts.H5_Regular)}
                    </View>
                </View>
            </View>
        )
    }

    _renderItem = (text, image,fontStyle) => {
        return (
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                {image ? <Image resizeMode = 'contain' source={images[image]} style = {styles.imageStyle}/> : null}
                <Text style = {{marginLeft: 10, alignSelf: 'center', ...fontStyle, color:'#333333'}}>{text}</Text>
            </View>
        )
    }


}

InspectionCell.defaultProps = {
    style: {},

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        paddingLeft: 20,
        marginVertical: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor:colors.CARD_BORDER_COLOR
    },
    leftPane:{
        width: '60%',
    },
    rightPane:{
        width:'40%', alignItems:'flex-end'
    },
    imageStyle:{
        width: 20, height:20, marginLeft: 8, alignSelf: 'center'
    }
})

export default InspectionCell;
