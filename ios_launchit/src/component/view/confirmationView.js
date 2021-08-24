import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Image
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import {images} from '../../assets/constant'

class ConfirmationView extends Component {
    render() {
        const {title, subTitle, image, imageSize} = this.props
        return (
            <View style = {[styles.container, this.props.style]}>
                <Image
                    source = {images[image]} 
                    style = {{width: imageSize, height: imageSize, alignSelf: 'center'}}/>
                <Text style = {{marginLeft: 8, marginRight: 8, marginTop: 22, textAlign: 'center', ...fonts.H2_Regular}}>
                    {title}
                </Text>
                <Text style = {{marginTop: 22,width:'100%',...fonts.H5_Regular,color:'#666666',textAlign:'justify'}}>
                    {subTitle}
                </Text>
            </View>
        )
    }


}

ConfirmationView.defaultProps = {
    style: {},
    title: null,
    subTitle: null,
    image:null,
    imageSize: 100,

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    textContainer: {
        marginTop: 8,
        marginBottom: 8,
        width: '90%',
        alignSelf: 'center',
    },

    

})

export default ConfirmationView;
