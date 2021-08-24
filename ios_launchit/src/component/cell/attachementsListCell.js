import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';
import BottomAlert from '../../component/BottomAlert';
class AttachmentsListCell extends Component {
    render() {
        const {item, showOptions} = this.props
        return (
            <View style = {styles.container}>
                <View style = {styles.buttonsContainer}>
                 <TouchableOpacity>
                        <Image
                            style = {{width: 22, height: 22, marginRight:8,tintColor:colors.PRIMARY}}
                            source = {showOptions ? images['deselected_circle'] : images['download']}
                        />
                    </TouchableOpacity>
                </View>
                <Text style = {styles.textContainer}>
                    <Text style = {styles.titleText}>{!!item ? item.attachmentTypeDesc : ""}</Text>
                </Text>
                {this._renderLine()}
                <Text style = {styles.sutitleText}>{!!item ? item.attachmentDesc : ""}</Text>
                {this._renderLine()}
                <Text style = {[styles.sutitleText]}>{!!item ? item.attachmentDetail : ""}</Text>
                {this._renderLine()}
                <TouchableOpacity>
                <Text style = {styles.sutitleText,{margin:10,color:colors.PRIMARY}}>{`${!!item ? item.attachmentFileAlias : ""}.${!!item ? item.attachmentFileSuffix : ""}`}</Text>
                </TouchableOpacity>
                </View>
        )
    }
    _renderLine() {
        return(
            <View style={{height:1,backgroundColor:'#E3E3E3',width:'100%',marginVertical:5}}/>
        )
    }
}

AttachmentsListCell.defaultProps = {
    style: {},
    title: null,
    subTitle: null,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 17,
        margin : 10,
        marginHorizontal: 18,
        borderColor: colors.APP_LIGHT_GRAY,
        borderWidth: 0.75
    },
    textContainer: {
        marginLeft: 12,
        marginTop: 10,
        // marginBottom: 5,
        marginRight: 4,
    },
    titleText: {
        ...fonts.H3_Bold,
        color : '#333333'
    },
    sutitleText: {
        ...fonts.H4_Regular,
        marginLeft: 12,
        marginTop: 10,
        marginRight: 12,
        color : 'black'
    },
    buttonsContainer: {
        position: 'absolute',
        right: 12,
        top: 12,
        flexDirection: 'row',
    }
})

export default AttachmentsListCell;
