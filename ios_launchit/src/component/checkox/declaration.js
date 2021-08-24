import React, { Component } from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';

class Declaration extends Component {

    render() {
        const {header, subHeader, selectedImage, deSelectedImage, isSelected, text} = this.props
        return (
            <View style = {[styles.container, this.props.style]}>
                <Image 
                style = {styles.imageStyle}
                source = {isSelected ? images[selectedImage] : images[deSelectedImage]}
                />
                <Text style = {styles.textStyle}>By using up you accept our <Text style={styles.boldTextStyle}>Terms of Services</Text> and <Text style={styles.boldTextStyle}>Privacy Policy</Text></Text>
            </View>
        )
    }


}

Declaration.defaultProps = {
    style: {},
    borderColor: colors.PRIMARY,
    selectedImage: 'bluecheckbox',
    deSelectedImage: 'bluecheckbox',
    isSelected: false,
    text: ""
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems:'flex-start'
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
    imageStyle: {
        height: 13,
        width: 13,
        marginLeft: 0,
        marginTop: 8,
        // backgroundColor: 'red',
    },
    textStyle: {
        ...fonts.SMALL,
        lineHeight : 25,
        fontSize: 14,
        marginLeft: 10,
        marginTop: 0,
    },
    boldTextStyle: {
        fontWeight:'600',
        fontSize: 14,
        color: colors.PRIMARY
    }
})

export default Declaration;
