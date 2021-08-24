import React, { Component } from "react";
import { TouchableOpacity,View,Image,Text,Platform } from "react-native";
import { images } from '../../assets/constant';
import ScreenLayout from '../../constants/layout'
import { DrawerActions } from '@react-navigation/native';
import { fonts, colors } from "../../theme/constant";
class MainLeft extends Component {

    render() {
        const {navigation,back,backhandler,title, backImage} = this.props

        return (
           back? <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>{backhandler?backhandler():navigation.goBack()
            }}>
                {title == 'register' ? <View style={styles.viewStyle}>
                        <Image source={ images.chevronleft_darkblue} style = {{width:30,height:30}}/>
                    </View> 
                :
                    <Image source = { images.backArrow} style = {{width:30,height:30,marginLeft:5}}/> 
                }
                 {Platform.OS == 'iOS' && <Text style={{...fonts.H2_Regular,color:colors.PRIMARY}}>{title}</Text>}
              </TouchableOpacity>:<TouchableOpacity>
                  <Image 
                   source = {require('../../assets/images/logo.png')}
                   resizeMode = 'contain'
                   style = {{width:(ScreenLayout.window.width /3),height:"100%",marginLeft:15}}
                   />
                </TouchableOpacity>
            
        )
    }


}
export default MainLeft;

const styles = {
    viewStyle:{
        backgroundColor:'#F9F7F7', width: 40, height: 40, alignItems:'center', justifyContent: 'center', borderRadius: 20, marginLeft: 15
    }
}