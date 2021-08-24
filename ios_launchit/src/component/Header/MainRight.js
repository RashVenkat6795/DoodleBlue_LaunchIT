import React, { Component } from "react";
import {
    TouchableOpacity,View,
    Image
} from "react-native";
import { images } from '../../assets/constant';
import { DrawerActions } from '@react-navigation/native';
class MainRight extends Component {

    render() {
      const {navigation,back,backhandler} = this.props

      return (
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('PublicSearch',{Login:false})}>
            <Image source = {images.searchBlue} style = {{width:20,height:20,marginLeft:15}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Image source = {images.notifications} style = {{width:20,height:20,marginLeft:15,marginRight:15}}/>
          </TouchableOpacity>
              {/* <TouchableOpacity>
                <Image 
                  source = {images.profileView}
                  style = {{width:25,height:25,marginLeft:15,marginRight:15}}
                  />
              </TouchableOpacity> */}
        </View>
      )
    }


}
export default MainRight;
