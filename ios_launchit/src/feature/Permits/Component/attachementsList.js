import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList, Alert
} from "react-native";
import styles from "./styles";
import FooterButton from '../../../component/view/footerButton'
import AttachmentCell from '../../../component/cell/attachmentCell'

export default class AttachementsList extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {"title": "2019 001531 000 00 ALIC", "description": "Animal License", "address": "12 Boulevard, 12 Arlington, Texas, USA", "isDelete":true },
                {"title": "2019 001532 000 00 API", "description": "Annual Property Inspection", "address": "Unknown Address", "isDelete": true},
                {"title": "2019 001531 000 00 ALIC", "description": "Animal License", "address": "12 Boulevard, 12 Arlington, Texas, USA", "isDelete": true},  
            ],
        };
    }

    componentDidMount() {
        this.props.navigation.setOptions({ title: "Attachements List", headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'}})
    }

    render() {
        return (
        <SafeAreaView style = {styles.container}>
            <Loader isVisible={this.state.loaded}/>
             <FlatList
                style={{width: '100%', marginVertical: 10}}
                showsHorizontalScrollIndicator={false}
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
            />
            <FooterButton
                style = {{width: '100%'}}
                text = 'Add New Attachment'
                onPress = {()=> {
                    this.props.navigation.navigate('UploadNewAttachment',{folderRSN: this.props.route.params.folderRSN})
                }}
            />
        </SafeAreaView>
        )
    }

    _renderItem = ({ item, index }) => {
        return( 
            <AttachmentCell
                style = {{width: '90%', alignSelf: 'center', marginTop: 15}}
                isDelete = {true}
            /> 
        )
    }
}
