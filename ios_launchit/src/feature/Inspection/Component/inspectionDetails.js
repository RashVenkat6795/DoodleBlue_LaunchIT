
import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList,
} from "react-native";
import InputField from '../../../component/inputField/inputField';
import PrimaryButton from '../../../component/Button/primaryButton';
import Header from '../../../component/Header/AuthenticationHeader'
import styles from "./styles";
import InspectionDetailCell from '../../../component/cell/inspectiondetail'


export default class InspectionDetails extends Component {
    
    constructor() {
        super();
        this.state = {
            inspectionDetails: [
                {"title": "2006 107253 000 00 PP", "description": "Plumbing Backflow Device", "location": "Plumbing Permit", "extra": "Issued", "isSelected": true},
                {"title": " 2006 107253 000 00 PP", "description": "Plumbing Backflow Device", "location": "Plumbing Permit", "extra": "Issued", "isSelected": false},
                {"title": "2006 107253 000 00 PP", "description": "Plumbing Backflow Device", "location": "Plumbing Permit", "extra": "Issued", "isSelected": false},
            ], 
        };
    }
    componentDidMount() {
        this.props.navigation.setOptions({ title: "Inspection Details", headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'}})
    }


    render() {
        return (
        <SafeAreaView style = {styles.container}>

            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                style = {{width: '100%'}}
                showsHorizontalScrollIndicator={false}
                data = {this.state.inspectionDetails}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
            />

            
        </SafeAreaView>
        )
    }

    _renderItem = ({ item, index }) => {
        return( 
            <InspectionDetailCell style = {{width: '90%', alignSelf: 'center', marginTop: 12, marginBottom: 2}}/>
  
        )
    }

}
