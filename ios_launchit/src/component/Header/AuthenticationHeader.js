import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text
} from "react-native";
import { colors, fonts } from '../../theme/constant'

class AuthenticationHeader extends Component {

    render() {
        const {header, subHeader} = this.props

        return (
            <View style = {[styles.container, this.props.style]}>
                <Text style = {styles.headerText}>{header}</Text>
                <Text style = {styles.subHeaderText}>{subHeader}</Text>
            </View>
        )
    }


}

AuthenticationHeader.defaultProps = {
    style: {},
    header: null,
    subHeader: null,

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    headerText: {
        ...fonts.HEADING_BOLD,
        marginLeft: 0,
        marginRight: 0,
        alignSelf: 'flex-start',
    },
    subHeaderText: {
        ...fonts.BODY,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 15,
        alignSelf: 'flex-start',
    },
})

export default AuthenticationHeader;
