
import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,FlatList
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';
import ScreenLayout from '../../constants/layout'
import PlumbingPermitcell from './plumbingPermitcell'

class PlumbingPermitDetailscell extends Component {
    
    render() {
        const {style, item} = this.props
        return (
            <View style = {[styles.container, style]}>
                <View style = {{flexDirection:'row',justifyContent:'flex-start'}}>
                    <Text style = {styles.text}>{item.infoDesc}</Text>
                    {item.mandatory && <Text style = {[styles.text,{color:'red'}]}> *</Text>}
                </View>
        <Text style = {styles.answerText}>{item.infoValue}</Text>
             {/* {this._titleView()}
             {this._descriptionView(item.detailsData)} */}
            </View>
        )
    }
    _titleView() {
        return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{backgroundColor:colors.PRIMARY,width:5,height:30}}/>
            <Text style = {styles.text}>FIRE INFORMATION</Text>
            </View>
        )
    }

    _descriptionView(data) {
        return(
            <View style={styles.descriptionViewStyle}>
            <FlatList
            style={[styles.descriptionListStyle,{borderWidth:data ? 1 : 0}]}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItem}
        />
         </View>
        )
    }

    _renderItem = (rowData) => {
        const {item,index} = rowData
        return (
            <PlumbingPermitcell item = {item}/>
        )
    }
  }


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding:10,
    },
    text: {...fonts.H4_Bold},
    answerText : {...fonts.H4_Regular,marginTop:5},
    descriptionViewStyle : {backgroundColor:'#F9F9FB',width: '90%',alignSelf:'center',marginVertical:20},
    descriptionListStyle : {width: '100%',alignSelf:'center',borderColor:'lightgrey',backgroundColor:'#F9F9FB',borderRadius:5}
})

export default PlumbingPermitDetailscell;
