import React, { Component } from "react";
import {
    View,
    TextInput,
    Image,
    StyleSheet,
    KeyboardAvoidingView,
    Text,
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';
import GmailInput from './gmailInput'

class TopHintInputField extends Component {

    render() {
        return (
             <KeyboardAvoidingView
                 style={[styles.container, this.props.style]}
                 behavior="padding"
             >
                 <View style={{width:"100%"}}>
                     <GmailInput 
                        label={this.props.hint}
                        onChangeText={(text) => {
                            this.props.onTextChange(text)
                        }}                        
                     />
                 </View>
             </KeyboardAvoidingView>
        )
    }


}

TopHintInputField.defaultProps = {
    style: {},
    hint: null

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default TopHintInputField;
