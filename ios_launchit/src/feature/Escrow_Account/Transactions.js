import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    FlatList,Image,TouchableOpacity
} from "react-native";
import styles from './styles';
import EnscrowCell from '../../component/cell/enscrowCell'
import PrimaryButton from '../../component/Button/primaryButton';
import { images } from "../../assets/constant";


export default class Transactions extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {"title": "Start date"},
                {"title": "End Date"},  
            ],
        };
    }
    componentDidMount() {
        this.props.navigation.setOptions({ title: "Transactions"})
    }
    render() {
        return (
        <SafeAreaView style={styles.container}>
          <FlatList
                style={{width: '100%'}}
                showsHorizontalScrollIndicator={false}
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent = {() => <Text style={styles.headerText}>Select date range</Text>}
                ItemSeparatorComponent = {() => (<View style={{height:1,backgroundColor:'#E3E3E3',width:'100%'}}/>)}
                renderItem={this._renderItem}
            />
        <PrimaryButton
            style = {[styles.submitButton]}
            text = {"View Transactions"}
            height = {50}
            onPress = {()=> {
                this.props.navigation.navigate('TransactionDetails')
            }}
        /> 
        </SafeAreaView>
        )
    }

    _renderItem = ({ item, index }) => {
        return( 
           <TouchableOpacity style={{height:40,backgroundColor:'white',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
            <Text style={{marginLeft:30}}>{item.title}</Text>
            <Image source = {images.calendar} style={{height:15,width:15,marginRight:20,tintColor:'#1E5297'}} />
           </TouchableOpacity>
        )
    }

}