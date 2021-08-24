import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,KeyboardAvoidingView
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import TextField from '../inputField/searchProperty'
import FooterButton from '../view/footerButton'
import { images } from "../../assets/constant";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as InspectionService from '../../api/InspectionsServices';
import Loader from '../../component/Loader'
import BottomAlert from "../BottomAlert";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

class ScheduleBottomSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            showDatePicker: false,
            selectedDate: new Date(),
            displayDate: new Date(),
            comments :'',
            rsnValue : '',
            showDatePicker:false,
            inputDate : 'MM/DD/YYYY'
        }
    }

    onDatePicked(selectedDate) {
        selectedDate = new Date(selectedDate);
        let displayDate = selectedDate.getMonth() + "/" + selectedDate.getDate() + "/" + selectedDate.getFullYear();
        this.setState({ selectedDate, displayDate, showDatePicker: false })
    }

    onPressSchedule() {
        this.setState({ loaded: true })
        let formData = [
            {"fieldName":"argFolderRSN","fieldValue":"1813676"},
            {"fieldName":"argProcessRSN","fieldValue":"8266300"},
            {"fieldName":"argScheduledDate","fieldValue":"2020-07-23"},
            {"fieldName":"argComments","fieldValue":"test"}
        ]
        InspectionService.postScheduleInspection(this.props.lid,50,formData)
        .then(response => {
            this.setState({ loaded: false })
            console.log("dfdfg",JSON.stringify(response))
        }).catch((error) => {
            //ERROR HANDLING
            this.setState({ loaded: false });
            BottomAlert("Unable to schedule inspection")
            console.log("axios error1", error)
        })
    }

    componentDidMount() {
        const {style, subHeader, hint, item} = this.props
        this.setState({rsnValue:item.processRSN})
    }

    hideDatePicker = () => {
        this.setState({showDatePicker: false});
      };
    
      handleConfirm = date => {
        // selectedDate = new Date(selectedDate);
        // let displayDate = selectedDate.getMonth() + "-" + selectedDate.getDate() + "-" + selectedDate.getFullYear();
        let displayDate = moment(date).format('YYYY-MM-DD');
        this.setState({showDatePicker: false,inputDate:displayDate});
      };

    render() {
        const {style, subHeader, hint, item} = this.props
        console.log(item.processRSN,item.FolderRSN)
        return (
            <KeyboardAvoidingView style={{flex:1}}>
                <Loader isVisible={this.state.loaded}/>
                <ScrollView style={{flex:1}}>
                {this._renderItem("Inpection Name", item.processDesc)}
                {this._renderItem("Permit Name", item.PermitNumber)}
                <Text style = {{marginLeft: '5%', marginTop: 10, ...fonts.H4_Bold,color:'black'}}>Schedule Date*</Text>
                <TouchableOpacity style={styles.dateButtonStyle} onPress={() => this.setState({showDatePicker: !this.state.showDatePicker})}>
                <Text style={[styles.textFontStyles, {width: '70%', color: '#999999'}]}>{this.state.inputDate}</Text>
                <Image source={images.calendar} style={{height: 20, width: 20, right: 20, tintColor: '#2F80ED'}}/>
                </TouchableOpacity>
                <Text style = {{marginLeft: '5%', marginTop: 16, ...fonts.H4_Bold,color:'black'}}>Comments</Text>
                <TextField
                    disableShadow = {true}
                    changeText = {(text) => this.setState({comments:text})}
                    maxLength={256}
                    multi = {true}
                    textInputStyle = {{left:10}}
                    style = {{width: '90%', alignSelf: 'center', marginTop: 10, height: 90, marginBottom: 30}}
                />
                </ScrollView>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.onPressSchedule()}>
                    <Text style={{color:'white', fontSize: 18, padding: 12}}>Schedule</Text>
                </TouchableOpacity>
                <DateTimePickerModal
            isVisible={this.state.showDatePicker}
            mode="date"
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
            minimumDate={new Date()}
          />
            </KeyboardAvoidingView>
        )
    }

    _renderClose = () => {
        return (
            <TouchableOpacity 
            onPress = {this.props.onPressClose}
            style = {{position: 'absolute', right: 10, top: 0, height: 26, width: 26, justifyContent: 'center'}}>
                <Image
                    style = {{width: 25, height: 25, alignSelf: 'center'}}
                    source = {images['close']}
                />

            </TouchableOpacity>
        )
    }

    _renderItem = (title, subTitle) => {
        return(
        <View style = {{marginVertical: 10, marginLeft: '5%'}}>
            <Text style = {{...fonts.H4_Bold,color:'black'}}>{title}</Text>
            <Text style = {{marginTop: 10, ...fonts.H4_Regular, color:'#999999'}}>{subTitle}</Text>
        </View>
        )

    }


}

ScheduleBottomSheet.defaultProps = {
    style: {},


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderTopLeftRadius: 20, borderTopRightRadius: 20,flex:1
    },
    headerText: {marginTop: 24, marginLeft: '5%', ...fonts.SUB_HEADING_BOLD, color: colors.PRIMARY},
    subHeaderText: {
        ...fonts.H3_Bold,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 16,
        alignSelf: 'flex-start',
        color: colors.TEXT_LIGHT_GRAY
    },
    textInputView: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 16,
        height: 50,
        width: '100%',
        borderColor: colors.APP_LIGHT_GRAY,
        borderWidth: 0.5,
    },
    textInput: {
        position: 'absolute',
        left: 10,
        top: 0,
        bottom: 0,
        right: 0
    },
    buttonStyle: {
        backgroundColor: colors.PRIMARY, 
        borderRadius: 30, 
        bottom : 20,
        width: '70%', 
        alignItems:'center', 
        justifyContent:'center', 
        alignSelf:'center'
    },
    dateButtonStyle: {
        width: '90%',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf : 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        marginTop:15,
        borderRadius:4,
        backgroundColor : 'white',
        borderColor: '#ADA8A2',
      },
      textFontStyles: {
        paddingLeft: 20,
        ...fonts.H3_Regular,
        color: 'black',
        backgroundColor: 'white',
      },
})

export default ScheduleBottomSheet;
