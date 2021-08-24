import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    AsyncStorage,
    FlatList,Text,ScrollView, Alert
} from "react-native";
import styles from "./styles";
import PlumbingPermitcell from '../../../component/cell/plumbingPermitcell';
import { fonts, colors } from "../../../theme/constant";
import * as PermitService from "../../../api/PermitsServices";
import Loader from '../../../component/Loader'

export default class PropertyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyDetails : [
                {"title": "Address", "value": "316 A Block PIONEER PWY ARLINGTON TX 76010"},
                {"title": "Legal Description", "value": "This is test legal desc"},
                {"title": "Property Roll Number", "value": "3601360-005-002"},
                {"title": "Lot", "value": "12342"},
                {"title": "Property Type", "value": "Intersection"},
                {"title": "Name", "value": "WEST GENE VILLAGE LLC"},    
            ],
            secondaryDetails : [
                {"title": "X-Cordinate", "value": "2395496.85"},
                {"title": "Y-Cordinate", "value": "6943056.45"},
                {"title": "Depth", "value": ""},
                {"title": "Area", "value": ""},
                {"title": "Frontage", "value": ""},
                {"title": "Zoning", "value": ""}
            ],
            loaded: true
        };
    }

    onLoad = async () => {
        const lid = this.props.route.params.lid;
        await PermitService.getProperty(lid, this.props.route.params.propertyRSN)
        .then(response => {
            if(response.successful) {
                this.props.actions.propertyDetailsResult(response.responseObject);
                let { propHouse, propDepth, propArea, propFrontage, zoneType1, propStreetUpper, propertyStreetType, propCity, propProvince, propPostal, propDesc, propX, propY, legalDesc, propertyRoll, propLot, propertyName } = this.props.propertyDetails;
                let propertyDetails = [...this.state.propertyDetails],
                    house = propHouse ? propHouse : '', street = propStreetUpper ? propStreetUpper : '', streetType = propertyStreetType ? propertyStreetType : '', city = propCity ? propCity : '', province = propProvince ? propProvince : '', postal = propPostal ? propPostal : ''

                propertyDetails[0].value = `${house} ${street} ${streetType} ${city} ${province} ${postal}`;
                propertyDetails[1].value = legalDesc ? legalDesc : '';
                propertyDetails[2].value = propertyRoll ? propertyRoll : '';
                propertyDetails[3].value = propLot ? propLot : '';
                propertyDetails[4].value = propDesc ? propDesc : '';
                propertyDetails[5].value = propertyName ? propertyName : '';

                let secondaryDetails = [...this.state.secondaryDetails];
                secondaryDetails[0].value = propX ? propX : '';
                secondaryDetails[1].value = propY ? propY : '';
                secondaryDetails[2].value = propDepth ? propDepth : '';
                secondaryDetails[3].value = propArea ? propArea : '';
                secondaryDetails[4].value = propFrontage ? propFrontage : '';
                secondaryDetails[5].value = zoneType1 ? zoneType1 : '';

                this.setState({ propertyDetails, secondaryDetails, loaded: false });
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
        this.props.navigation.setOptions({ title: "Property Details", headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'}});
    }

    render() {
        const showHeader = this.props.route.params.showHeader
        return (
        <ScrollView style = {styles.container}>
            <Loader isVisible={this.state.loaded}/>
            {/* {showHeader && <View style={{width:'100%',alignSelf:'center'}}>{this._renderHeaderView()}</View>} */}
            <FlatList
                    style={{width: '100%', marginBottom: 10, marginTop: 20,alignSelf:'center',borderWidth:1,borderColor:'#DFDFDF'}}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.propertyDetails}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent = {() => (<View style={{height:1,backgroundColor:'#E3E3E3',width:'100%'}}/>)}
                    renderItem={this._renderItem}
                />
            <FlatList
                    style={{width: '100%', marginBottom: 10, marginTop: 10,alignSelf:'center',borderWidth:1,borderColor:'#DFDFDF'}}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.secondaryDetails}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent = {() => (<View style={{height:1,backgroundColor:'#E3E3E3',width:'100%'}}/>)}
                    renderItem={this._renderItem}
                />
        </ScrollView>
        )
    }
    _renderHeaderView() {
        return(
            <View style={styles.listHeaderStyle}>
                <Text style={styles.feeDueTextStyle}>Fee Due:$125.00</Text>
                <View style={styles.statusViewStyle}>
                <Text style={{...fonts.H3_Regular,color:'#333333'}}>Status</Text>
                <Text style={[styles.activeTextStyle,{color:"#E2A812"}]}>Pending</Text>
                </View>
            </View>
        )
    }
    _renderItem = (rowData) => {
        const {item,index} = rowData
        return (
            <PlumbingPermitcell item = {item}/>
        )
    }
}
