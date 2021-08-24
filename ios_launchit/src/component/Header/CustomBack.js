import React, { Component } from "react";
import {
    TouchableOpacity,
    Image
} from "react-native";
import { images } from '../../assets/constant';
import { DrawerActions } from '@react-navigation/native';

class CustomBack extends Component {

    render() {

        return (
           <TouchableOpacity onPress={this.props.onPress}>
                <Image 
                 source = {images.backarrow}
                 style = {{width:20,height:14,marginLeft:15}}
                 />
              </TouchableOpacity>
            
        )
    }


}
export default CustomBack;
