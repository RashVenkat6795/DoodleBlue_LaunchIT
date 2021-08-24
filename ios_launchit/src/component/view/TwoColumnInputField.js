import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    FlatList,
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import PrimaryButton from '../Button/primaryButton'
import BorderButton from '../Button/borderedButton'
import ScreenLayout from '../../constants/layout'
import HintTextInput from '../inputField/TopHintInputField'

class TwoColumnInputField extends Component {

    render() {
        const {primaryText, secondaryText} = this.props
        return (
            <View 
                style = {[styles.container, this.props.style]}>
                <FlatList
                    vertical
                    numColumns={2}
                    style = {{marginBottom: 0, marginTop: 12, width: '100%'}}
                    data={this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style = {{width: (ScreenLayout.window.width/2)}}>
                <HintTextInput
                hint = {item.text}
                style = {{width: '90%'}}/>
            </View>

            
        )
    }


}

TwoColumnInputField.defaultProps = {
    style: {},


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',

    },
    

})

export default TwoColumnInputField;
