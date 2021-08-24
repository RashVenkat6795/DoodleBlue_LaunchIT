import React, { Component } from "react";
import { SafeAreaView, View, ScrollView, FlatList} from "react-native";
import FooterButton from '../../../component/view/footerButton';
import RegisterInputField from '../../../component/inputField/registerInputField';
import TwoColumnInputField from '../../../component/view/TwoColumnInputField'
import styles from "./styles";

export default class CAD extends Component {

    state = { 
        cadData: [
            {"text": "CAD Street Name",},
            {"text": "CAD - Last Modification Date",},
            {"text": "CAD House Number"},
            {"text": "CAD - Last Modification Type (A,C,D)"},
            {"text": "CAD Street Direction (before Street name)"},
            {"text": "CAD Street Direction (after Street Name,\nnot normal)",multi:true},
            {"text": "CAD Street Type"},
            {"text": "CAD Suite/Unit Number"}
          
        ]
    };

    nextclick() {
        var data={title:"Upload New Attachment",cid:2}
        this.props.changehaeder( data);
        this.props.next()
    }

    renderItem = ({ item, index }) => {
        return(
            <RegisterInputField
                onTextChange={(text) => {
                    this.setState({
                        // data: 
                    })
                }}
                style = {{ width:'100%', height: !!item.multi ? 60 : 55, alignSelf: 'center', backgroundColor: 'white' }}
                hint = {item.text}
                multi = {!!item.multi ? true : false}
            />
        )
    }

    render() {
        return (
            <View style = {styles.container}>
                    <FlatList
                        style={[styles.listStyle]}
                        data={this.state.cadData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderItem}
                    />
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

}
