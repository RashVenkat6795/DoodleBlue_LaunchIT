import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import PrimaryButton from '../Button/primaryButton'
import BorderButton from '../Button/borderedButton'

class UploadAttachmentFooter extends Component {
//
    render() {
        const {primaryText, secondaryText} = this.props
        return (
            <View 
                style = {[styles.container, this.props.style]}>
                    <BorderButton
                        style = {{marginBottom: 8, alignSelf: 'center', width: '90%'}}
                        text = {secondaryText}
                        onPress = {this.props.onPressSecondary}
                    />
                    <PrimaryButton
                        style = {{marginBottom: 8, alignSelf: 'center', width: '90%'}}
                        text = {primaryText}
                        onPress = {this.props.onPressPrimary}
                    />
            </View>
        )
    }


}

UploadAttachmentFooter.defaultProps = {
    style: {},
    header: null,
    subHeader: null,
    hint: null,
    primaryText: "Upload",
    secondaryText: 'Add attachment'

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 125,
        justifyContent: 'center',
    },
    headerText: {
        ...fonts.SUB_HEADING,
        marginLeft: 0,
        marginRight: 0,
        alignSelf: 'flex-start',
        color: colors.TEXT_SECONDARY
    },
    subHeaderText: {
        ...fonts.SMALL,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 15,
        alignSelf: 'flex-start',
        color: colors.TEXT_LIGHT_GRAY
    },
    textInputView: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 15,
        height: 50,
        width: '100%',
        borderColor: colors.APP_LIGHT_GRAY,
        borderWidth: 0.5,
    },
    textInput: {
        position: 'absolute',
        left: 10,
        top: 0,
        bottom: 0,
        right: 0
    }
    

})

export default UploadAttachmentFooter;
