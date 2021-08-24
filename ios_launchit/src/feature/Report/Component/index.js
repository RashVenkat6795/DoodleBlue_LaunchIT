import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList,Text,TouchableOpacity,UIManager,LayoutAnimation,StyleSheet,Image
} from "react-native";
import styles from "./styles";
import InputField from '../../../component/inputField/searchProperty';
import PrimaryButton from '../../../component/Button/primaryButton'

export default class Report extends Component {
    constructor() {
        super();
        this.state = {
           data : [
             {"title":"Name","isMulti":false},
             {"title":"Phone Number","isMulti":false},
             {"title":"Email","isMulti":false},
             {"title":"Issue","isMulti": true}
           ]
        };
    }

    render() {
        return (
        <SafeAreaView style = {styles.container}>
          <FlatList
                style={{width: '100%',alignSelf:'center',marginTop:20}}
                showsVerticalScrollIndicator={false}
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
            />  
        <PrimaryButton
                        isRounded = {true}
                        text = "Send"
                        height = {50}
                        style = {{width: '70%', marginVertical: 25, alignSelf: 'center'}}
                        onPress = {() => this.props.navigation.navigate('Services')}
                    />
        </SafeAreaView>
        )
    }
    _renderItem = ({item,index}) => {
        return( 
            <InputField 
            onTextChange={(text) => {
            }}
            style = {[{
            width: '100%', 
            height: item.isMulti ? 110 : 55, 
            alignSelf: 'center'}]}
            hint = {item.title}
            multi = {item.isMulti}
            isBottomBorder = {false}
        />
        )
    }
}
