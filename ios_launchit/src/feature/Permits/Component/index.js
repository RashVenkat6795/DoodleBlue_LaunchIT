import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList, AsyncStorage, Alert
} from "react-native";
import styles from "./styles";
import Loader from '../../../component/Loader'
import MyPermitsCell from '../../../component/cell/MyPermitsCell'
import * as PermitsServices from '../../../api/PermitsServices'
import BottomAlert from "../../../component/BottomAlert";


export default class Permits extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loaded : true
        };

        this.onLoad();
    }

    async onLoad(){
        await AsyncStorage.multiGet(["lid","peopleRSN"]).then(async (response) => {
            let lid = response[0][1], peopleRSN = response[1][1]
            await PermitsServices.getMyPermits(lid,peopleRSN).then((resp) =>{
                console.log("response", resp)
                this.setState({loaded:false})
                if(resp.responseObject) {
                    this.setState({ data: resp.responseObject })
                }
            }).catch((error) => {
                //ERROR HANDLING
                this.setState({ loaded: false });
                BottomAlert("data not found")
                console.log("axios error", error)
            })
        })
    }

    componentDidMount() {
        this.props.navigation.setOptions({ title: "My Permits", headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'}}) 
    }

    render() {
        return (
        <SafeAreaView style = {styles.container}>
            <Loader isVisible={this.state.loaded}/>
            <FlatList
                style={{width: '100%',marginTop:10}}
                showsHorizontalScrollIndicator={false}
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
            />
        </SafeAreaView>
        )
    }

    renderItem = ({ item, index }) => {
        return( 
            <MyPermitsCell
                onPress = {()=> {
                    this.props.navigation.navigate('PlumbingPermit',{item})
                }}
                style = {{width: '100%', marginTop: 8, marginBottom: 8, alignSelf: 'center'}}
                item = {item}
            /> 
        )
    }
}
