import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import {images} from '../../assets/constant'

class ApplyPermit extends Component {

    render() {
        const {header, subHeader, item} = this.props

        return (
            <TouchableOpacity onPress = {this.props.onPress} style = {[styles.container, this.props.style]}>
                <View style = {[styles.innerContainer]}>
                    <View style={styles.leftContainer}>
                        <Text style = {styles.headerText}>Property Address</Text>
                        <Text style={{color: colors.TEXT_DARK_GRAY}}>914 AUSTIN ST</Text>
                        <Text style = {styles.footerTitle}>APN No   <Text style={styles.footerContent}>0872345-000-000</Text></Text>
                        <Text style = {styles.footerTitle}>Unit</Text>
                    </View>
                    <View style={styles.centerContainer}>
                        <Text style={{color: colors.TEXT_DARK_GRAY, marginTop: -32,marginLeft:-40}}>76012</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Image 
                            style = {styles.image}
                            source = { item.isSelected ? images['selected_circle'] : images['deselected_circle']}
                        />
                    </View>
                </View>
                    

            </TouchableOpacity>
        )
    }


}

ApplyPermit.defaultProps = {
    style: {},
    header: null,
    subHeader: null,
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor:'white'
    },
    innerContainer: {
        flexDirection: 'row',
        width: '100%',
        borderColor: colors.CARD_BORDER_COLOR,
        borderWidth: StyleSheet.hairlineWidth,
    },
    leftContainer:{
        width: '65%',
        padding: 20,
        paddingLeft:25
    },
    centerContainer:{
        width:'25%',
        alignItems:'center',
        justifyContent:'center'
    },
    rightContainer:{
        width:'2%',
        alignItems:'center',
        justifyContent:'center',
    },
    headerText: {
        ...fonts.H4_Bold,
        marginBottom: 5,
    },
    image: {
        height: 25, 
        width: 25,
    },
    footerTitle: {
        ...fonts.H4_Bold,
        marginTop: 5
    },
    footerContent: {
        ...fonts.H4_Light,
        color : 'grey'
    }
    

})

export default ApplyPermit;
