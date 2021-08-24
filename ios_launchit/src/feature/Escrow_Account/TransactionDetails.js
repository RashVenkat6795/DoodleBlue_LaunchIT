import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    FlatList,TouchableOpacity,SectionList
} from "react-native";
import styles from './styles';
import TransactionsCell from '../../component/cell/TransactionsCell'
import { images } from "../../assets/constant";

export default class TransactionDetails extends Component {
    constructor() {
        super();
        this.state = {
            sectionData : [
                {
                    index:0,
                    data: [
                        {"title": "Start date","date":"05/14/2020"},
                        {"title": "End date", "date": "06/28/2020"},
                    ]
                   },
                {
                    index:1,
                    data: [
                        [
                            {"title": "General Escrow", "description": "0 Road Damage only", "date": "05/14/2021", "isFinal": 1},
                            {"title": "General Escrow", "description": "0 Road Damage only", "date": "05/14/2021", "isFinal": 2},
                            {"title": "General Escrow", "description": "0 Road Damage only", "date": "05/14/2021", "isFinal": 2},
                        ]
                    ]
                   },
            ],
        };
    }
    componentDidMount() {
        this.props.navigation.setOptions({ title: "Transactions"})
    }
    render() {
        return (
        <SafeAreaView style={styles.container}>
          <SectionList
            showsVerticalScrollIndicator = {false}
            style={{width: '100%',marginTop:20}}
            sections={this.state.sectionData}
            extraData={this.state.sectionData}
            stickySectionHeadersEnabled = {false}
            renderItem={({section,item,index}) => this._renderItem(section,item)}
          />
        </SafeAreaView>
        )
    }

    _renderResultsView(data) {
        return(
             <FlatList
                style={{width: '100%',marginVertical:18,flexGrow:1}}
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent = {() => (<View style={{height:1,backgroundColor:'#E3E3E3',width:'100%'}}/>)}
                renderItem={this._renderResultsItem}
            />
        )
    }

    _renderResultsItem = ({ item, index }) => {
        return( 
            <TransactionsCell
                onPress = {()=> {
                   // this.props.navigation.navigate('AccountSummary')
                }}
                style = {{width: '100%', marginTop: 5, marginBottom: 5, alignSelf: 'center'}}
                item = {item}
            /> 
        )
    }

    _renderItem(section,item) {
        switch(section.index) {
            case 0 : return this._renderDateItem(item)
            case 1 : return this._renderResultsView(item)
        }
    }


    _renderDateItem(item) {
        return( 
            <View>
           <TouchableOpacity style={{height:40,backgroundColor:'white',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
            <Text style={{marginLeft:30}}>{item.title}</Text>
            <Text style={{marginHorizontal:20}}>{item.date}</Text>
           </TouchableOpacity>
           <View style={{height:1,backgroundColor:'#E3E3E3',width:'100%'}}/>
           </View>
        )
    }

}