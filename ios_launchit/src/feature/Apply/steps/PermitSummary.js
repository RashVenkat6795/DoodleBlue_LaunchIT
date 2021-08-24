
import React, { Component } from "react";
import { View, SafeAreaView, ScrollView, FlatList,Text } from "react-native";
import SelectInputField from '../../../component/inputField/searchProperty';
import styles from "./styles";
import AccountCell from '../../../component/cell/escrowAccount'
import FooterButton from '../../../component/view/footerButton'
import {fonts} from '../../../theme/constant'

export default class SelectPermit extends Component {

    constructor() {
        super();
        this.state = {
            escrowData: [
                {"title": "Folder Type", "description": "Alarm Permit"},
                {"title": "Folder Sub Type", "description": "Commerical"},
                {"title": "Folder Work Type", "description": "Corporation"},
                {"title": "Address", "description": "Chennai"},
            ] 
        };
    }
    //this.props.changehaeder( "Emergency Contact Information");
        nextclick()
        {
            var data={title:"Emergency Contact Information",cid:1}
            this.props.changehaeder(data);
            this.props.next()
        }
    

    render() {
        const {escrowData} = this.state
        return (
        <View style = {styles.container}>
            <ScrollView>
                {/* <View style={styles.permitsummary}> */}
                    <FlatList
                        style={[styles.listStyle, {paddingBottom: 0}]}
                        showsHorizontalScrollIndicator={false}
                        data={escrowData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                    />
                {/* </View> */}
                <View  style = {[styles.searchViewStyle,{marginBottom: 100, marginTop: 30}]}>
                    <Text style = {{...fonts.H3_Bold, padding: 10,marginLeft:30}}>Project Name & details ( Optional)</Text>
                    <SelectInputField
                        textInputStyle = {{paddingLeft:20}}
                        style = {Styles.selectField}
                        hint = {'Message'}
                        multi={true}
                    />
                </View>
            </ScrollView>
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

    _renderItem = ({ item, index }) => {
        return( 
        <AccountCell 
            textStyle = {{marginLeft:25}}
            style = {{width: "100%"}}
            title = {item.title}
            subTitle = {item.description}
        />
        )
    }

}

const Styles = {
    selectField:{
        width: '100%', alignSelf: 'center', height: 140
    }
}