
import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,

    Image,
    TouchableOpacity,
} from "react-native";

import styles from "./styles";
import ServiceView from '../../../component/view/servicesView'
import { colors, fonts } from "../../../theme/constant";
import { images } from "../../../assets/constant";


export default class InitialScreen extends Component {


    render() {
        return (
        <SafeAreaView style = {styles.container}>
                {this._renderSearchView()}
                <ServiceView
                    style = {{marginBottom: 0, marginTop: 12, width: '100%'}}
                    onPress = {(nav)=> {
                        this.props.navigation.navigate('Login')
                    }}
                />
        </SafeAreaView>
        )
    }

    _renderSearchView() {
        return(
            <TouchableOpacity style={{width:'90%',height:50,borderRadius:5,backgroundColor:colors.PRIMARY,alignSelf:'center',marginVertical:20,alignItems:'center',justifyContent:'center'}} onPress = {() => this.props.navigation.navigate('PublicSearch')}>
                <Image style={{height:20,width:20,tintColor:'white',position:'absolute',alignSelf:'flex-start',marginLeft:20}} source={images.searchNew} />
            <Text style={{...fonts.H2_Regular,color:'white'}}>Search Portal</Text>
            </TouchableOpacity>
        )
    }

}
