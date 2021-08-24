
import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList,Text
} from "react-native";
import ScheduleBottomSheet from '../../../component/view/scheduleBottomSheet'
import styles from "./styles";



export default class ScheduleInspections extends Component {
    
    constructor() {
        super();
        this.state = {

        };
    }
    componentDidMount() {
        this.props.navigation.setOptions({ title: "Schedule Inspection", headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'}})
    }


    render() {
      //  alert(JSON.stringify(this.props.route.params.lid))
        return (
        <ScheduleBottomSheet style = {{width: '100%',flex:1}} 
                        item={this.props.route.params.info}
                        // onPressSchedule = {()=> { this.BottomSheet.close() }}
                        // onPressClose = {()=> { this.BottomSheet.close()}}
                        lid={this.props.route.params.lid}
            />
        )
    }

}
