import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    FlatList
} from "react-native";
import styles from './styles';
import EnscrowCell from '../../component/cell/enscrowCell'


export default class Escrow extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {"title": "2019 001532 000 00", "description": "Annual Property Inspection", "address": "Unknown Address", "isFinal": 1},
                {"title": "2019 001532 000 00", "description": "Annual Property Inspection", "address": "Unknown Address", "isFinal": 1},
                {"title": "2019 001532 000 00", "description": "Annual Property Inspection", "address": "Unknown Address", "isFinal": 1},  
            ],
        };
    }
    render() {
        return (
        <SafeAreaView style={styles.container}>
          <FlatList
                style={{width: '100%',marginTop:20}}
                showsHorizontalScrollIndicator={false}
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
            />
        </SafeAreaView>
        )
    }

    _renderItem = ({ item, index }) => {
        return( 
            <EnscrowCell
                onPress = {()=> {
                    this.props.navigation.navigate('AccountSummary')
                }}
                style = {{width: '100%', marginTop: 8, marginBottom: 8, alignSelf: 'center'}}
                item = {item}
            /> 
        )
    }

}