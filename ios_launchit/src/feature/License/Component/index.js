import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList
} from "react-native";
import styles from "./styles";
import LicenseCell from '../../../component/cell/LicenseCell'

export default class License extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {"title": "2019 001532 000 00 API", "description": "Annual Property Inspection", "address": "12 Boulevard, 12 Arlington, Texas, USA", "isFinal": 1, "item":"Active"},
                {"title": "2019 001532 000 00 API", "description": "Annual Property Inspection", "address": "12 Boulevard, 12 Arlington, Texas, USA", "isFinal": 2, "item":"Pending"},
                {"title": "2019 001532 000 00 API", "description": "Annual Property Inspection", "address": "12 Boulevard, 12 Arlington, Texas, USA", "isFinal": 1, "item":"Active"},  
            ],
        };
    }

    componentDidMount() {
        this.props.navigation.setOptions({ title: "My License and Registration", headerStyle: styles.headerStyle})
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.listStyle}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }

    _renderItem = ({ item, index }) => {
        let data = { 
            "FolderDesc": "Commercial Building Permit",
            "FolderName": "Building Construction",
            "FolderRSN": "3274429",
            "PermitNumber": "20 000970  000 00 CP",
            "PropertyRSN": "227185",
            "StatusDesc": "Issued",
            "folderRSN": "3274429",
            "processDesc": "Landscape Final",
            "processRSN": "8336796"
        }
        return( 
            <LicenseCell
                onPress = {()=> {
                    this.props.navigation.navigate('PlumbingPermit',{data: data, type:'license'})
                }}
                style = {{width: '100%', marginTop: 8, marginBottom: 8, alignSelf: 'center'}}
                item = {item}
            /> 
        )
    }
}
