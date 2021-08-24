import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    AsyncStorage,
    FlatList,SectionList,Text, StyleSheet, ScrollView, Alert
} from "react-native";
import styles from "./styles";
import AssociatedPeopleCell from '../../../component/cell/associatedPeopleCell'
import RegisterInputField from '../../../component/inputField/registerInputField'
import { colors, fonts } from "../../../theme/constant";
import * as PermitService from "../../../api/PermitsServices";
import Loader from '../../../component/Loader'
import MobileNumberFormatter from "../../../component/MobileNumberFormatter";

export default class AssociatedPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionData : [],
            loaded: true
        };
    }

    onLoad = async () => {
        const lid = this.props.route.params.lid;
        await PermitService.getFolderPeople(lid, this.props.route.params.folderRSN).then((response) => {
            if(response.successful){
                this.props.actions.associatedPeopleResult(response.responseObject);
                let sectionData = [];
                this.props.associatedPeople.map((item,index) =>{
                    let title = item.peopleDesc ? item.peopleDesc : '', 
                        firstname = item.nameFirst ? item.nameFirst : '',
                        lastname = item.nameLast ? item.nameLast : '', 
                        house = item.addrHouse ? item.addrHouse : '', 
                        street= item.addrStreet ? item.addrStreet : '', 
                        addressType = item.addrStreetType ? item.addrStreetType : '', 
                        direction = item.addrStreetDirection ? item.addrStreetDirection : '', 
                        city = item.addrCity ? item.addrCity : '', 
                        province = item.addrProvince ? item.addrProvince : '', 
                        postal = item.addrPostal ? item.addrPostal : '', 
                        email = item.emailAddress ? item.emailAddress : '', 
                        phone = item.phone1 ?  MobileNumberFormatter(item.phone1,"###-###-####") : ''

                    let dataObj = {
                        "title" : title,
                        "data": [
                            {"title": "Name", "value": `${firstname} ${lastname}`},
                            {"title": "Address", "value":  `${house} ${street} ${addressType} ${direction} ${city} ${province} ${postal}`},
                            {"title": "E-mail", "value":  email},
                            {"title": "Phone", "value":  phone},
                        ]
                    }
                    sectionData.push(dataObj)
                })
                this.setState({ sectionData, loaded: false })
            } else {
                this.setState({ loaded: false });
                Alert.alert("Error", response.message, [{ text: "OK", onPress: () => {}}]);
            }
        }).catch((error) => {
            //ERROR HANDLING
            this.setState({ loaded: false });
            console.log("axios error", error)
            Alert.alert("Error", error, [{ text: "OK", onPress: () => {}}]);
        })
    }

    componentDidMount() {
        this.onLoad();
        this.props.navigation.setOptions({ title: "Associated People", headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'}})
    }

    render() {
        return (
        <SafeAreaView style = {styles.container}>
             <Loader isVisible={this.state.loaded}/>
             <ScrollView>
                <View style={{width: '90%',marginTop: 10,alignSelf:'center'}}>
                    {this.state.sectionData?.map((item,index) =>{
                        return this._renderSectiontem(item, index)
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
        )
    }

    _renderSectiontem(item,index) {
        return(
            <View style={styles.sectionFlatlistStyle} key={index}>
                <View style={styles.sectionListHeader}>
                    <Text style={styles.sectionHeaderText}>{item.title}</Text>
                </View>
                <View style={{flex: 1}}>
                    {item.data.map((childitem, index) => {
                        return this.renderItem(childitem, index)
                    })}
                </View>       
            </View> 
        )
    }

    renderItem(item, index){
        return( 
            <View key={index}>
                <View style = {[styles.workflowContainer,{paddingVertical: 15}]}>
                    <View style={{width:'40%'}}>
                        <Text style={[styles.workflowTitleText,{...fonts.H5_Regular}]}>{item.title}</Text>
                    </View>
                    <View style={{width:'60%'}}>
                        <Text style={{...fonts.H4_Regular},styles.workflowText}>{item.value}</Text>
                    </View>
                </View>
                <View style={styles.lineSepStyle}/>
            </View>
            
        )
    }
}
