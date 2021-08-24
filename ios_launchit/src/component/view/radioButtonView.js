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
                <Text style = {{alignSelf: 'center', width: '95%', textAlign: 'center', marginTop: 8, ...fonts.BODY}}>Application</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', alignSelf: 'center', width: '98%', marginTop: 18, marginBottom: 10}}>
                {this._renderView(isYes ? 'yes_radio' : 'no_radio', 'Yes')}
                {this._renderView(isYes ? 'no_radio' :'yes_radio', 'No')}
                </View>
            </View>
        )
    }

    _renderView = (icon, text) => {
        return (
            <TouchableOpacity style = {{flexDirection: 'row', justifyContent: 'center'}} 
            onPress = {()=> {
                this.setState({isYes:!this.state.isYes}, ()=> {
                    this.props.onSelect(this.state.isYes)
                })
            }}>
                <Image
                    style = {{width: 15, height: 15, alignSelf: 'center'}}
                    source = {images[icon]}
                />
                <Text style = {{marginLeft: 8, alignSelf: 'center'}}>{text}</Text>

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

    

})

export default RadioButtonView;
