
import React, { Component } from "react";
import DropDownPicker from './DropDownCore';
import { View, TextInput, Image, StyleSheet, Dimensions} from "react-native";
import { images } from '../../assets/constant';
import { colors } from "../../theme/constant";

const windowHeight = Dimensions.get('window').height;

class DropDown extends Component {

    render() {
       let {handleChange, options, position} = this.props;
       var zIndex = position;
        return (
            <DropDownPicker
                items={options}   
                containerStyle={Styles.containerStyle}
                itemStyle={Styles.itemStyle}
                labelStyle={[Styles.labelStyle,{...this.props.labelStyle}]}
                activeItemStyle={Styles.activeStyle}
                activeLabelStyle={Styles.activeStyle}
                activeLabelStyle={{color: colors.TEXT_BROWNRED_COLOR}}
                arrowStyle={Styles.arrowStyle}
                onChangeItem={item => handleChange(item)}
                zIndex={zIndex}
                customArrowUp={ <Image source = {images.arrow} style = {Styles.imageStyle} /> }
                customArrowDown={ <Image source = {images.arrow} style = {Styles.imageStyle} /> }
            />
        )
    }
}

const Styles = {
    containerStyle:{
        width: "100%",
        height:windowHeight/12,
        borderWidth:0.1,
        borderColor:'rgba(0, 0, 0, 0.25)',
    },
    itemStyle:{
        alignItems: 'flex-start'
    },
    labelStyle:{
        fontSize: 18, color: '#999999',alignItems:'flex-start'
    },
    activeStyle:{
        alignItems: 'flex-start'
    },
    arrowStyle:{
        marginRight: 10, color:'yellow'
    },
    imageStyle:{
        width:20, height:20
    }
}

export default DropDown;
