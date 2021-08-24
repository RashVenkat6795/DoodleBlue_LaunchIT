
import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList,TouchableOpacity,Image,AsyncStorage
} from "react-native";
import styles from "./styles";
import SearchResultCell from '../../../component/cell/searchResultCell'
import { images } from "../../../assets/constant";
import * as PublicSearchService from "../../../api/PublicSearchServices";
import Loader from '../../../component/Loader'

export default class RelatedFolder extends Component {

    constructor(props) {
        super(props);

        props.navigation.setOptions({ title: "Related Folder"})
        this.state = {
            loaded: true,
            data: [
                {"title": "2004 - 000051 CP : 51", "description": "CP-2004-10401166", "fee": "Converted Permit", "amount": "2201 E LAMAR BOULEVARD SUITE 200", "isFinal": true},
                {"title": "2004 - 000051 CP : 51", "description": "CP-2004-10401166", "fee": "Converted Permit", "amount": "2201 E LAMAR BOULEVARD SUITE 200", "isFinal": false},
                {"title": "2004 - 000051 CP : 51", "description": "CP-2004-10401166", "fee": "Converted Permit", "amount": "2201 E LAMAR BOULEVARD SUITE 200", "isFinal": true},
            ], 
        };

        this.onLoad()
    }

    async onLoad(){
        let folderRSN = this.props.route.params.id
        let lid = await AsyncStorage.getItem("lid");
        PublicSearchService.getFolderByRSN(lid,id).then((response) => {
            if(response.successful){
                this.setState({ loaded: false })
                console.log("get folder by rsn", response)
            }
            
        }).catch(error => {
            console.log("error",error);
        })

    }

    componentDidMount() {
            this.props.navigation.setOptions({ title:"Related Folder", headerStyle: styles.headerStyle, headerRight: props => <TouchableOpacity style={{padding: 15}} onPress={() => this.setState({isEditable:!this.state.isEditable})}>
            <Image style={{height:20,width:20,tintColor:'#428AE9'}} source = {images.searchBlue} />
        </TouchableOpacity>})
    }

    render() {
        return (
        <SafeAreaView style = {styles.container}>
            <FlatList
                style={{width: '100%', marginBottom: 10, marginTop: 10}}
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
            <SearchResultCell
                onPress = {()=> {
                    AsyncStorage.getItem('storeKey').then((value) => {
                        value ? this.props.navigation.navigate('PlumbingPermit',{title:'Plumbing Permit',status:true,showPropertyHeader:false}) : this.props.navigation.navigate('Login')
                     });
                }}
                showButton = {false}
                style = {{width: '100%', marginTop: 8, marginBottom: 8, alignSelf: 'center'}}
                item = {item}
            /> 
        )
    }

}
