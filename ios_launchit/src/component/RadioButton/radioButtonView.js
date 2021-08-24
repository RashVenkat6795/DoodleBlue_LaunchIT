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
import Button from '../Button/primaryButton'
import { images } from "../../assets/constant";

class RadioButtonView extends Component {

    state = {
        isYes: false
    }

    render() {
        const {text} = this.props
        const {isYes} = this.state
        return (
            <View style = {[styles.container, this.props.style]}>
                <Text style = {{ width: '95%', marginTop: 8,...fonts.H3_Regular}}>{this.props.text}</Text>
                <View style = {{flexDirection: 'row', width: '100%', marginVertical: 15}}>
                    {this._renderView(isYes ? 'yes_radio' : 'no_radio', 'Yes')}
                    {this._renderView(isYes ? 'no_radio' :'yes_radio', 'No')}
                </View>
            </View>
        )
    }

    _renderView = (icon, text) => {
        return (
            <TouchableOpacity style = {styles.touchableStyle} 
                onPress = {()=> {
                    this.setState({isYes:!this.state.isYes}, ()=> {
                        this.props.onSelect(this.state.isYes)
                    })
                }}
            >
                <Image style = {styles.imageStyle} resizeMode = 'contain' source = {images[icon]} />
                <Text style = {styles.textStyle}>{text}</Text>

            </TouchableOpacity>
        )
    }


}

RadioButtonView.defaultProps = {
    style: {},
    title: null,
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    headerText: {
        ...fonts.SUB_HEADING,
        marginLeft: 0,
        marginRight: 0,
        alignSelf: 'flex-start',
        color: colors.TEXT_SECONDARY
    },
    imageStyle:{
        width: 18, height: 18, alignSelf: 'center'
    },
    textStyle:{
        marginLeft: 8, alignSelf: 'center',...fonts.H4_Regular,top:3
    },
    touchableStyle:{
        flexDirection: 'row', justifyContent: 'center',width:'20%', paddingRight: 15
    }
    

})

export default RadioButtonView;
