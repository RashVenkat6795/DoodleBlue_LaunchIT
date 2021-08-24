import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    FlatList,Dimensions, AsyncStorage
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import ScreenLayout from '../../constants/layout'
import PortalCell from '../../component/cell/portal'
import Loader from '../../component/Loader'
import async from 'async'
import * as PermitService from '../../api/PermitsServices'
import { call } from "react-native-reanimated";

const width = ((Dimensions.get('window').width*95)/100)/2
class ServicesView extends Component {

    constructor(props){
        super(props);
        this.state = {
            loaded: true,
            data:[
                {"text": "Permits", "image": "permitsServices","count":"0"},
                {"text": "Inspections", "image": "inspectionsService","count":"0"},
                {"text": "Licenses", "image": "licenseService","count":"0"},
                {"text": "Scheduled Inspections", "image": "scheduleService","count":"0"},
                {"text": "Fees Due", "image": "feeDueService","count":"00.00"},
            ],
            inspectionCount: 0,
            scheduledinspectionCount: 0
        };

        this.onLoad();
    }
    
    async onLoad(){
        await AsyncStorage.multiGet(["lid","peopleRSN"]).then(async (response) => {
            let lid = response[0][1], peopleRSN = response[1][1], inspectionId = 73, scheduledinspectionId = 74 
            await PermitService.getDashboard(lid,99999913,peopleRSN).then((response) =>{
                if(response.successful){
                    let data = response.responseObject;
                    this.setState({ loaded: false })
                    let permitValue, licenseValue, inspectionValue, scheduledInspecValue, feesVal;
                    data.map((item) => {
                        if(item.columnName == "Permit")
                            permitValue = item.columnValues[0]
                        else if(item.columnName == "Professional License")
                            licenseValue = item.columnValues[0]
                        else if(item.columnName == "Inspections")
                            inspectionValue = item.columnValues[0]
                        else if(item.columnName == "ScheduledInspection")
                            scheduledInspecValue = item.columnValues[0]
                        else if(item.columnName == "Fees")
                            feesVal = item.columnValues[0]
                    })
                    let dashboardData = [
                        {"text": "Permits", "image": "permitsServices","count": permitValue},
                        {"text": "Inspections", "image": "inspectionsService","count": inspectionValue},
                        {"text": "Licenses", "image": "licenseService","count": licenseValue},
                        {"text": "Scheduled Inspections", "image": "scheduleService","count": scheduledInspecValue},
                        {"text": "Fees Due", "image": "feeDueService","count": feesVal},
                    ]
                    this.setState({ data: dashboardData })
                }
            }).catch((error) => {
                //ERROR HANDLING
                this.setState({ loaded: false });
                Snackbar.show({
                    text: "data not found",
                    duration: Snackbar.LENGTH_LONG,
                  })
                console.log("axios error", error)
            })
        })
        
       
    }

    render() {
        return (
            <View style={styles.container}>
                <Loader isVisible={this.state.loaded}/>
                <FlatList
                    style = {styles.listStyle}
                    data={this.state.data}
                    numColumns = {2}
                    columnWrapperStyle = {{justifyContent:'space-evenly'}}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }


    _renderItem = ({ item, index }) => {
        var navigate = null
        var params ={}
        return (
            <PortalCell
                key={index}
                item = {item}
                fullView = {index == 4 ? true : false}
                style = {{width:index == 4 ? '95%' : '45%'}}
                onPress = {()=> {
                    switch (index) {
                        case 0:
                            navigate = 'Permits'
                            //  this.props.navigation.navigate('Permits')
                            break
                        case 2:
                            navigate = 'License'
                            // this.props.navigation.navigate('PayBill')
                            break
                        case 1:
                            navigate = 'Inspection'
                            params = {tabID:0}
                            // this.props.navigation.navigate('Inspection')
                            break
                        case 3:
                            navigate = 'Inspection'
                            params = {tabID:1}
                            // this.props.navigation.navigate('PayBill')
                            break
                        case 4:
                            navigate = 'PayBill'
                            // this.props.navigation.navigate('PayBill')
                            break
                    }
                    this.props.onPress(navigate,params)
                }}
            />
        )
    }


}

ServicesView.defaultProps = {
    style: {},
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        backgroundColor: colors.VIEW_BACKGROUND,
    },
    listStyle: {
        flex: 1,
        width : '100%',
       alignSelf:'center'
    },
    portalCell: {
        // alignSelf: 'center', 
        // marginTop: 22,
    },
})

export default ServicesView;
// async.parallel([
            //     (callback) => {
            //         PermitService.getDashboard(lid,99999913,peopleRSN).then((response) => {
            //             if(response.message == "Success"){
            //                 let value = response.responseObject[0].columnValues[0]
            //                 callback('inspection', value)
            //             }
            //         }).catch((error) => {
            //             //ERROR HANDLING
            //             console.log("axios error", error)
            //         })
            //     },
            //     (callback) => {
            //         PermitService.getDashboard(lid,scheduledinspectionId,peopleRSN).then((response) => {
            //             if(response.message == "Success"){
            //                 let value = response.responseObject[0].columnValues[0]
            //                 callback('inspection', value)
            //             }
            //         }).catch((error) => {
            //             //ERROR HANDLING
            //             console.log("axios error", error)
            //         })
            //     }
            // ],(err,results) => {
            //     setTimeout(() => {
            //      let dashboardData = [
            //          {"text": "Permits", "image": "permitsServices","count":"3"},
            //          {"text": "Inspections", "image": "inspectionsService","count":results[0]},
            //          {"text": "Licenses", "image": "licenseService","count":"5"},
            //          {"text": "Scheduled Inspections", "image": "scheduleService","count":results[1]},
            //          {"text": "Fees Due", "image": "feeDueService","count":"12,250.00"},
            //      ]
            //      this.setState({ data: dashboardData, loaded: false})
            //     }, 2000)
            // }) 