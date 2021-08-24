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
import { images } from '../../assets/constant';

class InspectionDetailCell extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const {style, item} = this.props
        return (
            <View style = {styles.container}>
                <View style = {styles.leftContainer}>
                    <Text style = {styles.leftLabel}>Pluming Misc</Text>
                    <Text style = {[styles.leftLabel,{...fonts.H5_Regular}]}>AMANDA</Text>
                    {this._renderItem("02/01/2021","new_calendar")}
                </View>
                <View style={styles.rightContainer}>
                    <Text style = {styles.open}>Open</Text>
                </View>
            </View>
        )
    }

    _renderItem = (text, image) => {
        return (
            <View style = {{flexDirection: 'row', marginTop: 15}}>
                <Image resizeMode = 'contain' source={images[image]} style = {{width: 15, height:15, alignSelf: 'center'}}/>
                <Text style = {{marginLeft: 8, alignSelf: 'center', ...fonts.H5_Regular}}>{text}</Text>
            </View>
        )
    }


}

InspectionDetailCell.defaultProps = {
    style: {},

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: 'white',
        width:'100%', 
        marginVertical: 10,
        shadowOffset: { width: 0, height: 1.5 },
        shadowColor: 'rgb(152, 152, 152)',
		shadowOpacity: 0.25,
        elevation: 1,
        padding: 15
    },
    leftContainer: {
        width: '75%',
        marginLeft: 20,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderColor: "'rgba(0, 0, 0, 0.09)"
    },
    rightContainer:{
        width:'25%',
        alignItems:'center',
        justifyContent:'center'
    },
    leftLabel: {
        fontSize: 16,
        ...fonts.H3_Bold
    },
    open: {
        fontSize: 14,
        ...fonts.H4_Bold,
        color: '#F2994A',
    }
    
    

})

export default InspectionDetailCell;
