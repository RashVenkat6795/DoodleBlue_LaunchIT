
import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    FlatList,
    ImageBackground,
    Animated,
    Image,
    TouchableOpacity,
    Button,
    ScrollView
} from "react-native";
import { colors } from "../../../theme/constant";

export default class Settings extends Component {

    state = {
        data: [
            {"text": "Permits", "image": "oil_drill"},
            {"text": "Licenses", "image": "permit"},
            {"text": "Inspections", "image": "inspection"},
            {"text": "Fee Due", "image": "fee_active"},
        ]
    };

    render() {
        return (
        <SafeAreaView style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <TouchableOpacity style={{backgroundColor:colors.PRIMARY,height:45,width:'70%',borderRadius:10,justifyContent:'center',alignItems:'center'}}
            onPress = {() => this.props.navigation.navigate('Login')}
          >
              <Text style={{color:'white'}}>Logout</Text>
          </TouchableOpacity>
        </SafeAreaView>
        )
    }
}
