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

class AttachmentCell extends Component {

    constructor(props){
        super(props);
        this.state = {
            attachment: [
                {"title":"Attachment File", "type":"Attachment Type", "description":"Attachment Description", "detail":"Attachment File Detail" },
                {"title":"Attachment File", "type":"Attachment Type", "description":"Attachment Description", "detail":"Attachment File Detail" },
                {"title":"Attachment File", "type":"Attachment Type", "description":"Attachment Description", "detail":"Attachment File Detail" }
            ]
        }
    }

    render() {
        const {title, subTitle, style} = this.props

        return (
            <View style = {[styles.container, style]}>
                <View style ={{width: 25}}>
                    <Image style={{ width: 15, height: 15, marginTop: 5}} source={images['attachment']}/>
                </View>
                <View style={{width:'95%'}}>
                    <Text style = {styles.titleText}>Attachment File</Text>
                    <Text style = {styles.sutitleText}>Attachment Type</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style = {[styles.sutitleText,{width:'50%'}]}>Attachment Description</Text>
                        <Text style = {[styles.sutitleText,{width:'45%',textAlign:'right',marginRight:'5%'}]}>Attachment File Detail</Text>
                    </View>
                </View>
                {/* <View style={{width:'25%', flexDirection:'column'}}> */}
                    <View style = {styles.buttonsContainer}>
                        <TouchableOpacity style={[styles.buttonCircleStyle,{marginRight: 15}]}>
                            <Image
                                style = {{width: 20, height: 20}}
                                source = {images['download']}
                            />
                        </TouchableOpacity>

                        {!this.props.isDelete && <TouchableOpacity style={styles.buttonCircleStyle}>
                            <Image
                                style = {{width: 20, height: 20}}
                                source = {images['bin']}
                            />
                        </TouchableOpacity>}
                    </View>
                {/* </View> */}
            </View>
        )
    }


}

AttachmentCell.defaultProps = {
    style: {},
    title: null,
    subTitle: null,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 6,
        borderColor: colors.CARD_BORDER_COLOR,
        borderWidth:StyleSheet.hairlineWidth,
        shadowOffset: { width: 0, height: 1.5 },
        shadowColor: 'rgb(152, 152, 152)',
		shadowOpacity: 0.3,
        elevation: 1,
        padding: 12
    },
    textContainer: {
        marginLeft: 12,
        marginTop: 10,
        // marginBottom: 5,
        marginRight: 4,
        
    },
    titleText: {
        ...fonts.H2_Regular,
        color : colors.TEXT_BROWN_COLOR
    },
    sutitleText: {
        ...fonts.H5_Regular,
        marginTop: 10,
        color : colors.TEXT_BROWN_COLOR

    },
    buttonsContainer: {
        position: 'absolute',
        right: 15,
        top: 12,
        flexDirection: 'row',
    },
    buttonCircleStyle:{
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.VIEW_BACKGROUND
    }
    
    

})

export default AttachmentCell;
