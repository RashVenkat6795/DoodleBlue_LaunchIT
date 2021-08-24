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


class NotificationCell extends Component {
    
    render() {
        const {style, item} = this.props
        return (
          <View style={[styles.item,{backgroundColor : 'white'}]}>
          <View style={styles.notificationView}>
          <Image style={styles.notifyImage} source={images.calendar_darkblue}/>
          </View>
          <View style={{marginHorizontal:20}}>
          <Text style={styles.title}>{item.title}</Text>
         <Text style={styles.subTitle}>{item.description}</Text>
         </View>
        <Text style={styles.notifyTime}>{item.time}</Text>
       </View>
        )
    }
 }



NotificationCell.defaultProps = {
    style: {},
    showButton: true
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    paddingVertical : 15,
    paddingHorizontal:10,
  //  margin:15,
    borderRadius : 5,
    marginVertical: 8,
    flexDirection:'row',
    borderWidth : StyleSheet.hairlineWidth,
    borderColor : '#BFBFBF'
    // shadowColor: "#979797",
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.30,
    // shadowRadius: 4.65,
    
    // elevation: 5,
  },
  header: {
    fontSize: 16,
    margin:15,
  },
  title: {
    ...fonts.H3_Regular
  },
  subTitle: {
      ...fonts.H5_Regular,
      color : 'grey',
      paddingRight:10,
      marginRight : 15,
      marginTop : 4
    },
    notificationView : {
      height:55,width:55,backgroundColor:'rgba(125, 125, 125, 0.05)',borderRadius:55/2,alignItems:'center',justifyContent:"center"
    },
    notifyImage : {
      height:20,width:20
    },
    notifyTime : {
      position:'absolute',flex:1,width:'100%',textAlign:'right',...fonts.H5_Regular,color:'grey',marginTop:10
    }
})

export default NotificationCell;
