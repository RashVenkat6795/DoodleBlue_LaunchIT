import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList,SectionList,Text, AsyncStorage, Alert
} from "react-native";
import styles from "./styles";
import PlumbingPermitDetailscell from '../../../component/cell/plumbingPermitDetailsCell'
import { colors, fonts } from "../../../theme/constant";
import * as PermitService from "../../../api/PermitsServices";
import Loader from '../../../component/Loader'
import { ScrollView } from "react-native-gesture-handler";

export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            loaded: true,
            data: [
                {"title": "2019 001531 000 00 ALIC","detailsData":[{"title": "Land Use Code Description*", "value": "ONE FAMILY"}]},
                {"title": "2019 001532 000 00 API","detailsData":[{"title": "Enterprise Zone", "value": ""}]},
                {"title": "2019 001531 000 00 ALIC","detailsData":[{"title": "Approval Required?", "value": ""}]}, 
                {"title": "2019 001531 000 00 ALIC","detailsData":[{"title": "Zoning District", "value": "R"},{"title": "Zoning District Modifier*", "value": "N/A"},{"title": "Zoning District Overlay*", "value": "N/A"}]} 
            ],
            sectionData : [
                // {
                //   title: "CO Questionaire",
                //   data: [ [
                //     {"title": "Adult Entertainment", "value": "No","isImp":true},
                //     {"title": "Alcoholic Beverages", "value": "No","isImp":true},
                //     {"title": "Are you ready for an Inpection ?", "value": "Yes, I am ready for an Inspection.","isImp":true},
                //     {"title": "Proposed Business Name", "value": "Crosslands International LLC","isImp":false},
                //     {"title": "Tax Exempt Number or Ltd Sales and Use Tax Certification Number", "value": "32025249940","isImp":false},    
                // ]]
                // },
                // {
                //   title: "General Requirements",
                //   data: [ [
                //     {"title": "Change of Use", "value": "No","isImp":true},
                //     {"title": "Enterprize Zone", "value": "No","isImp":false},
                //     {"title": "Occupancy Group", "value": "Business","isImp":true},
                // ]]
                // },
                // {
                //   title: "Fire Information",
                //   data: [ [
                //     {"title": "Land Use Code Description", "value": "Agriculture, Agriculture (65)","isImp":true},  
                // ]]
                // }
              ]
        };
    }

    groupBy(data, property) {
        return data.reduce((acc, obj) => {
          const key = obj[property];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {});
    }

    async onLoad(){
        const lid = this.props.route.params.lid;
        await PermitService.getApplicationDetails(lid, this.props.route.params.folderRSN).then(response => {
            console.log("application details.....", response.responseObject)
            if(response.successful){
                // let response = response.responseObject
                let groupedData = this.groupBy(response.responseObject, 'infoGroup')
                console.log("grouped data .......", groupedData);

                let sections = [];
                Object.keys(groupedData).map((key) => {
                    sections.push({
                        title: key,
                        data: groupedData[key]
                    })
                })

                this.setState({ sectionData: sections, loaded: false })
            }
        }).catch(error => {
            // handle error
            this.setState({ loaded: false });
            console.log(error);
            Alert.alert("Error", error, [{ text: "OK", onPress: () => {}}]);
        })
    }

    componentDidMount() {
        this.onLoad();
        this.props.navigation.setOptions({ title: "Application Details", headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'}})
    }

    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <Loader isVisible={this.state.loaded}/>
                <ScrollView>
                    <View style={{width: '90%',marginVertical: 15,alignSelf:'center'}}>
                        {this.state.sectionData.map((item,index) => {
                            return this.renderSectiontem(item,index)
                        })}
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        )
    }

    renderSectiontem(item,index) {
        return( 
            <FlatList
                style={styles.sectionFlatlistStyle}
                showsVerticalScrollIndicator={false}
                data={item.data}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent = {() => (
                    <View style={styles.sectionListHeader}>
                        <Text style={styles.sectionHeaderText}>{item.title}</Text>
                    </View>
                )}
                ItemSeparatorComponent = {() => (<View style={{height:1,backgroundColor:'#E3E3E3',width:'100%'}}/>)}
                renderItem={this._renderItem}
            />  
        )
    }

    _renderItem = ({ item, index }) => {
        return( 
            <PlumbingPermitDetailscell
                item = {item}
            /> 
        )
    }
}
