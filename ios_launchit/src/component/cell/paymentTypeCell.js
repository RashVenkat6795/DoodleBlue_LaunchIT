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

class PaymentTypeCell extends Component {

    onButtonPress(){
        const { item } = this.props
        // item.isSelected = true
        this.props.onPress(item.index)
    }

    render() {
        const {item, selectedImage, deselectedImage} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity onPress={() => this.onButtonPress()}>
                        <Image style = {styles.image} source = {images[item.isSelected ? selectedImage : deselectedImage]}/>
                    </TouchableOpacity>
                </View>
                {item.description && item.showDescription ? <Text style={styles.descriptionText}>Attention: <Text style={styles.description}>{item.description}</Text></Text> : null}
            </View>
        )
    }
}

PaymentTypeCell.defaultProps = {
    style: {},
    selectedImage: "checkbox",
    deselectedImage: "unselected_checkbox",
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding: 15, 
        borderWidth: StyleSheet.hairlineWidth, 
        borderColor: colors.CARD_BORDER_COLOR, 
        marginVertical: 7
    },
    innerContainer:{
        flexDirection:'row', 
        justifyContent:'space-between', 
    },
    title:{
        ...fonts.H3_Bold
    },
    descriptionText:{
        ...fonts.H4_Bold,
        marginVertical: 25,
        color: colors.TEXT_GREY
    },
    description:{
        ...fonts.H4_Regular,
        color: colors.TEXT_GREY
    },
    image: {
        height: 20,
        width: 21,
    },
})

export default PaymentTypeCell;


