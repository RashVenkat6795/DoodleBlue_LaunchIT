import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

class RadioButtons extends React.Component {
  render() {
  let btnStyleNo = [styles.btn];
  let btnStyleYes = [styles.btn];
  btnStyleYes.push(styles.btnActive,{borderRadius:this.props.br});
  return (
    <View style={[styles.btnContainer,{ borderRadius: this.props.br}]}>
    {this.props.list.map((item,index)=>
            <TouchableOpacity style={item.isSelected ? btnStyleYes  : btnStyleNo} onPress={()=>this.props.onButtonclick(index)}>
               <Text style={[styles.label,{color:item.isSelected?'#ffffff' :'#000000'}]}>{item.title}</Text>
             </TouchableOpacity>
           )
           }
        </View>
  )
    }
  }

  const styles = StyleSheet.create({
  
    selectedButton:{
    width:20,
    height:20,
    marginRight:7,
    tintColor:'#5cb2e3'
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        color: '#888',
      },
      btnActive: {
        borderWidth: 1,
        borderColor: '#212125',
        backgroundColor: '#212125',
      },
      label: {
        fontFamily:'CircularStd-Medium',
        fontSize:14
      },
      btnContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#bbb',
        marginLeft:10,
        marginRight:10
      },
    })
    

export default RadioButtons