import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList,Text,TouchableOpacity,UIManager,LayoutAnimation,StyleSheet,Image
} from "react-native";
import styles from "./styles";
import { fonts } from "../../../theme/constant";
import { images } from "../../../assets/constant";
import AboutUsCell from "../../../component/cell/AboutusCell"

export default class Help extends Component {
    constructor() {
        super();
        this.state = {
           data : [
             {"title":"How-To Guide","Description":"December 14, 2018: Application Policy – ten (10) business days Building permit applications started on-line through arlingtonpermits.com will remain in our system for ten (10) business days until payment and/or plans are received. If no payment and/or plans are received within ten (10) business days, then the application will be voided, and a new application must be submitted.","isOpen":false},
             {"title":"General Information","Description":"December 14, 2018: Application Policy – ten (10) business days Building permit applications started on-line through arlingtonpermits.com will remain in our system for ten (10) business days until payment and/or plans are received. If no payment and/or plans are received within ten (10) business days, then the application will be voided, and a new application must be submitted.","isOpen":false},
             {"title":"Links and Resources","Description":"December 14, 2018: Application Policy – ten (10) business days Building permit applications started on-line through arlingtonpermits.com will remain in our system for ten (10) business days until payment and/or plans are received. If no payment and/or plans are received within ten (10) business days, then the application will be voided, and a new application must be submitted.","isOpen":false}
           ]
        };
    }

    render() {
        return (
        <SafeAreaView style = {styles.container}>
          <FlatList
                style={{width: '100%',alignSelf:'center',marginTop:15}}
                showsVerticalScrollIndicator={false}
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent = {() => (<View style={{height:1,backgroundColor:'#E3E3E3',width:'100%'}}/>)}
                renderItem={this._renderItem}
            />  
        </SafeAreaView>
        )
    }

    _openCurrentIndex(index) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
      let vaules = this.state.data.map((v,i) => {
        v.isOpen = i === index
        return v
     })
      this.setState({data:vaules})
    }

    _renderItem = ({item,index}) => {
        return( 
           <AboutUsCell item = {item} onPress = {() => this._openCurrentIndex(index)}/>
        )
    }
}
