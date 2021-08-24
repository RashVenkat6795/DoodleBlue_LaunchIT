
import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView, AsyncStorage, Alert
} from "react-native";
import InputField from '../../../component/inputField/searchProperty';
import PrimaryButton from '../../../component/Button/primaryButton'
import styles from "./styles";
import DocumentPicker from 'react-native-document-picker';
import Loader from '../../../component/Loader'
import * as PermitsServices from '../../../api/PermitsServices'
// import InputField from '../../../component/inputField/inputField';
// import PrimaryButton from '../../../component/Button/primaryButton';
// import Header from '../../../component/Header/AuthenticationHeader'
// import styles from "./styles";



export default class UploadAttachment extends Component {

    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            attachmentDesc: '',
            attachmentDetail: ''
        }
    }

    componentDidMount() {
        this.props.navigation.setOptions({ title:"Add New Attachment", headerStyle: styles.headerStyle, headerBackTitle:'Cancel'  ,headerTitleStyle : {fontWeight:'bold'}})
    }

    chooseFile = async () => {
        DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles]
        }).then(async (pickedresponse) => {
            console.log("picked file response", this.props.route)
            if(pickedresponse){
                this.setState({loaded: true})
                let lid = await AsyncStorage.getItem("lid");
                await PermitsServices.uploadFile(lid, this.props.route.params.folderRSN, pickedresponse.file).then((response) => {
                    console.log("file upload response", response)
                    if(response.successful){
                        let responseObj = response.responseObject
                        this.setState({ loaded: false, fileName, fileExt })
                    }
                }).catch((error) =>{
                    //ERROR HANDLING
                    this.setState({ loaded: false });
                    console.log("axios error", error)
                    Alert.alert("Error", error, [{ text: "OK", onPress: () => {}}]);
                })
            }
        }).catch((pickererror) => {
            if (pickererror == "Error: User canceled document picker"){
                console.log("user cancelled")
            } else {
                console.log("error", pickererror)
            }
        })
    }

    async uploadFile(){ 
        this.setState({loaded: true})
        let lid = await AsyncStorage.getItem("lid");
        await PermitsServices.addFolderAttachment(lid, this.props.route.params.folderRSN, this.state.fileName, this.state.fileExt, this.state.attachmentDesc, this.state.attachmentDetail).then((response) =>{
            console.log("addfolder response", response)
            if(response.successful){
                this.props.navigation.navigate('AddAttachementsList')
            }
            this.setState({loaded: false})
        })
    }

    render() {
        return (
        <SafeAreaView style = {{flex: 1}}>
            <KeyboardAvoidingView style = {{flex: 1,marginTop:10}}>
            <Loader isVisible={this.state.loaded}/>
            <InputField 
                onTextChange={(text) => { this.setState({ attachmentDesc: text}) }}
                style = {styles.uploadInputStyle}
                changeText = {(text) => this.setState({attachmentDesc:text})}
                hint = {"Attachment description"}
                multi = {true}
                isBottomBorder = {false}
            />
            <InputField 
                onTextChange={(text) => { this.setState({ attachmentDetail: text}) }}
                style = {styles.uploadInputStyle}
                hint = {"Attachment File Details"}
                changeText = {(text) => this.setState({attachmentDetail:text})}
                multi = {true}
                isBottomBorder = {false}

            />
            <InputField 
                onTextChange={(text) => {
                }}
                style = {[styles.uploadInputStyle,{ height: 50 }]}
                hint = {"Attachment Type"}
                isBottomBorder = {false}
                rightImage = {'chevrondown'}

            />
            </KeyboardAvoidingView>
            <PrimaryButton
                isRounded = {true}
                text = "Choose file"
                height = {50}
                style = {{width: '70%', marginVertical: 25, alignSelf: 'center'}}
                onPress = {() => this.chooseFile()}
            />
            <PrimaryButton
                isRounded = {true}
                text = "Upload"
                height = {50}
                style = {{width: '70%', marginVertical: 25, alignSelf: 'center'}}
                onPress = {() => this.uploadFile()}
            />
        </SafeAreaView>
        )
    }

}
