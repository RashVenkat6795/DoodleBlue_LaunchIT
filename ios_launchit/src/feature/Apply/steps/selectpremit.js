
import React, { Component } from "react";
import { View, SafeAreaView, ScrollView, FlatList,Text, StyleSheet } from "react-native";
import SelectInputField from '../../../component/inputField/searchProperty';
import styles from "./styles";
import AccountCell from '../../../component/cell/permitDetails'
import FooterButton from '../../../component/view/footerButton'
import { fonts, colors } from "../../../theme/constant";

export default class SelectPermit extends Component {

    constructor() {
        super();
        this.state = {
            escrowData: [
                {"title": "Folder Type", "description": "Alarm Permit"},
                {"title": "Folder Sub Type", "description": "Commerical"},
                {"title": "Folder Work Type", "description": "Corporation"},
                
            ] 
        };
    }
    nextclick()
    {
        var data={title:"Permit Search List",cid:0}
        this.props.changehaeder(data);
        this.props.next()
    }

    render() {
        const {escrowData} = this.state
        return (
            <View style={styles.container}>
                <ScrollView>
                    <FlatList
                        style={[styles.listStyle, {paddingBottom: 0}]}
                        showsHorizontalScrollIndicator={false}
                        data={escrowData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                    />
                    <View  style = {styles.searchViewStyle,{paddingBottom: 100, marginTop: 30}}>
                        <Text style = {{...fonts.H3_Bold, padding: 10, backgroundColor:'white',paddingLeft:40}}>Search Property</Text>
                        <SelectInputField
                            textInputStyle = {{paddingLeft:20}}
                            style = {{ width: '100%', alignSelf: 'center',height:71}}
                            hint = {'Address'}
                            multiline={true}
                        />
                    </View>
                </ScrollView> 
                <View style={[styles.footerBtnViewStyle,{alignItems:'center'}]}>
                        <FooterButton
                            style = {[styles.buttonStyle,{position:'relative'}]}
                            text = 'Search'
                            onPress = {()=> { this.nextclick() }}
                        />
                    </View>
            </View>
        )
    }

    _renderItem = ({ item, index }) => {
        return( 
            <AccountCell 
                tetxStyle  = {{marginLeft :30,color:'black'}}
                subTextStyle = {{color:'grey'}}
                style = {{width: "100%", backgroundColor:'white'}}
                title = {item.title}
                subTitle = {item.description}
            />
        )
    }

}
