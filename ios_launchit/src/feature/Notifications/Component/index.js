import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    FlatList,Text,SectionList
} from "react-native";
import styles from "./styles";
import NotificationsCell from '../../../component/cell/NotificationCell'

export default class Notifications extends Component {
    constructor() {
        super();
        this.state = {
            sectionData : [
                {
                    title:"Today",
                    data: [
                        {"title": "Accepted for Construction", "description": "2018-002699 MP", "time": "Just now"},
                        {"title": "Accepted for Construction", "description": "2018-002699 MP", "time": "1hr ago"},
                    ]
                   },
                {
                    title:"Yesterday",
                    data: [
                        {"title": "Withdrawn", "description": "2018-002699 MP", "time": "1hr ago"},
                        {"title": "Accepted for Construction", "description": "2018-002699 MP", "time": "1hr ago"},
                        {"title": "Withdrawn", "description": "2018-002699 MP", "time": "1hr ago"},
                    ]
                   },
            ]
        };
    }

    componentDidMount() {
        this.props.navigation.setOptions({ title: "Notifications"})
    }

    render() {
        return (
        <SafeAreaView style = {styles.container}>
          <SectionList
            showsVerticalScrollIndicator = {false}
            style={{width: '100%',alignSelf:'center',marginTop:10}}
            sections={this.state.sectionData}
            extraData={this.state.sectionData}
            renderSectionHeader = {({section}) => <Text style={styles.headerText}>{section.title}</Text>}
            stickySectionHeadersEnabled = {false}
            renderItem={({section,item,index}) => this._renderItem(item)}
          />
        </SafeAreaView>
        )
    }

    _renderItem(item) {
        return( 
            <NotificationsCell
                style = {{width: '100%', marginTop: 8, marginBottom: 8, alignSelf: 'center'}}
                item = {item}
            /> 
        )
    }
}
