import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,ScrollView,
    FlatList
} from "react-native";
import styles from './styles';
import PlumbingPermitcell from '../../component/cell/plumbingPermitcell';
import PrimaryButton from '../../component/Button/primaryButton';


export default class AccountSummary extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {"title": "Escrow Number", "value": "2006 107253 000 00 PP"},
                {"title": "Status", "value": "Active"},
                {"title": "Name", "value": "Arun"},
                {"title": "Balance", "value": "09/03/2019"},
                {"title": "Balance Date", "value": "05/12/2015"},
                {"title": "Address", "value": "12 Boulevard, 12 Arlington, Texas, USA"},  
                {"title": "Application Date", "value": "05/12/2015"},  
                {"title": "Description", "value": "General Escrow"},  
            ],
        };
    }
    componentDidMount() {
        this.props.navigation.setOptions({ title: "Account Summary"})
    }
    render() {
        return (
        <ScrollView style={styles.container}>
          <FlatList
                style={{width: '100%',marginTop:30,marginBottom:10}}
                showsHorizontalScrollIndicator={false}
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent = {() => (<View style={{height:1,backgroundColor:'#E3E3E3',width:'100%'}}/>)}
                renderItem={this._renderItem}
            />
             <PrimaryButton
            style = {[styles.submitButton]}
            height = {50}
            text = {"View Transactions"}
            onPress = {()=> {
                this.props.navigation.navigate('Transactions')
            }}
        /> 
        </ScrollView>
        )
    }

    _renderItem = ({ item, index }) => {
        return( 
            <PlumbingPermitcell item = {item}/>
        )
    }

}