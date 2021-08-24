
import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,ScrollView,FlatList,Image, AsyncStorage
} from "react-native";
import InputField from '../../../component/inputField/searchProperty';
import PrimaryButton from '../../../component/Button/primaryButton'
import { images } from '../../../assets/constant';
import styles from "./styles";
import { fonts, colors } from "../../../theme/constant";
import AttachmentsListCell from '../../../component/cell/attachementsListCell'; 
import HeaderRight from '../../../component/Header/MainRight'
import Loader from '../../../component/Loader'
import * as PermitsServices from '../../../api/PermitsServices'
import { NavigationEvents } from 'react-navigation';
import BottomAlert from "../../../component/BottomAlert";

export default class AddAttachementsList extends Component {
    
    constructor() {
        super();
        this.state = {
            loaded: true,
            showOptions: false,
            data: [] 
        };
    }

    async onLoad(){
        let lid = this.props.route.params.lid;
        await PermitsServices.getAttachmentList(lid, this.props.route.params.folderRSN).then((response) => {
            console.log("attachment list response", response)
            this.setState({ loaded: false });
            if(response.successful){
                this.setState({ data : response.responseObject, loaded: false})
            }else{
                BottomAlert(response.message)
            }
        }).catch((error) => {
            //ERROR HANDLING
            this.setState({ loaded: false });
            console.log("axios error", error)
            Alert.alert("Error", error, [{ text: "OK", onPress: () => {}}]);
        })

    }

    showOpt(){
        if(this.state.showOptions)
            this.setState({showOptions: false})
        else
            this.setState({showOptions: true})
    }

    componentDidMount() {
        this.onLoad();
        this.props.navigation.setOptions({ title:"Attachment List", headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'}, headerRight: props => <TouchableOpacity style={{padding: 15}} onPress={() => this.showOpt()}>
            <Text style={{...fonts.H2_Regular,color:colors.PRIMARY,marginRight:15}}>Select</Text>
        </TouchableOpacity>})
        
    }

    _renderItem = (rowData) => {
        const {item,index} = rowData
        
        return(
            <AttachmentsListCell
                showOptions={this.state.showOptions}
                item={rowData.item}
            />
        )
    }

    render() {
        return (
        <SafeAreaView style = {{flex: 1}}>
             {/* <NavigationEvents onWillFocus={payload => {this.onLoad()}}/> */}
            <Loader isVisible={this.state.loaded}/>
           <FlatList
                style={{width: '100%',alignSelf:'center'}}
                showsHorizontalScrollIndicator={false}
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
            />
            <View style={{backgroundColor:'white',borderWidth:1,borderColor:'#E3E3E3'}}>
                <PrimaryButton
                    isRounded = {true}
                    isRightImage = {true}
                    rightImage = {images.addIcon}
                    text = "Add New Attachment"
                    height = {50}
                    style = {{width: '90%', marginVertical: 10, alignSelf: 'center'}}
                    onPress = {() => this.props.navigation.navigate('UploadAttachment', {folderRSN: this.props.route.params.folderRSN})}
                />
            </View>
        </SafeAreaView>
        )
    }

}
