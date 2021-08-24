import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import DropDown from '../../../component/DropDown'
import FooterButton from '../../../component/view/footerButton'
import styles from './styles'
import { fonts } from "../../../theme/constant";

export default class Apply  extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:[
                { "Name":"Choose Folder Type", "Placholder":"Alarm Permit", "position":5002 },
                { "Name":"Choose Folder Sub Type", "Placholder":"Commercial", "position":5001 },
                { "Name": "Choose Folder Work Type", "Placholder":"Corporation", "position":5000 }    
            ]
        }
    }

    backclick() {
        var data={title:"Select Permit Details",cid:0}
        this.props.changehaeder( data);
        this.props.back();
    }

    nextclick() {
        var data={title:"Select Permit Details",cid:0}
        this.props.changehaeder( data);
        this.props.next()
    }

    renderItem = ({item,index}) =>{
        return (
            <View key={index} style={styles.DropDownView}>
                <View style={styles.DropDownLabel}>
                    <Text style={{...fonts.H4_Bold,marginLeft:15}}>{item.Name}</Text>
                </View> 
                <DropDown 
                    placeholderVal={item.Placholder}
                    labelStyle = {{marginLeft:15}}
                    position={item.position}
                    options={[ {label: item.Placholder, value: 'fr'} ]} 
                    handleChange={(item)=>{}} 
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                    <FlatList
                        style={[styles.listStyle]}
                        data={this.state.arr}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderItem}
                    />
                    <View style={[styles.footerBtnViewStyle,{alignItems:'center'}]}>
                        <FooterButton
                            style = {[styles.buttonStyle,{position:'relative'}]}
                            text = 'Next'
                            onPress = {()=> { this.nextclick() }}
                        />
                    </View>
           </View>
       
        )
    }
}

