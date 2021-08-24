import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  FlatList, Text, SectionList, TouchableOpacity, TextInput, KeyboardAvoidingView, AsyncStorage
} from "react-native";
import styles from "./styles";
import InputAndButtonField from '../../../component/inputField/InputAndButtonField';
import { fonts, colors, themes } from "../../../theme/constant";
import MaterialDropDown from "../../../component/MaterialDropDown";
import * as MyProfileServices from '../../../api/MyProfileServices';
import { Colors } from "react-native/Libraries/NewAppScreen";
import BottomAlert from '../../../component/BottomAlert'
import Loader from '../../../component/Loader';
import { AsYouType } from 'libphonenumber-js';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Edit",
      isEditable: false,
      loaded: true,
      lid: '',
      peopleRSN: '',
      profileData: {},
      sectionData: [
        {
          title: 0,
          data: [[
            { "hint": "E-mail", "key": "emailAddress", "value": "", type: 'textinput' },
            { "hint": "First Name", "key": "nameFirst", "secondHint": 'Title', "secondKey": 'nameTitle', "value": "", "dropDownData": [], type: 'textWithDropDown' },
            { "hint": "Last Name", "key": "nameLast", "value": "", type: 'textinput' },
            { "hint": "Organization", "key": "organizationName", "value": "", type: 'textinput' }
          ]]
        },
        {
          title: 1,
          data: [[
            { "hint": "House Number", "key": "addrHouse", "value": "", type: 'textinput' },
            { "hint": "Street Name", "key": "addrStreet", "value": "", type: 'textinput' },
            { "hint": "Street Type", "key": "addrStreetType", "secondHint": 'Street Direction', "secondKey": "addrStreetDirection", "value": "", "dropDownData": [], "secondDropDownData": [], type: 'dualDropDown' },
            { "hint": "Unit Type", "key": "addrUnitType", "secondHint": 'Unit Number', "secondKey": "addrUnit", "value": "", "dropDownData": [], type: 'dropdownWithTextInput' },
            { "hint": "City", "key": "addrCity", "value": "", "dropDownData": [], type: 'dropDown' },
            { "hint": "State", "key": "addrProvince", "value": "", "dropDownData": [], type: 'dropDown' },
            { "hint": "Zip Code", "key": "addrPostal", "value": "", type: 'textinput' },
            { "hint": "Country", "key": "addrCountry", "value": "", "dropDownData": [{ value: "USA" }, { value: "CAN" }], type: 'dropDown' }
          ]]
        },
        {
          title: 2,
          data: [[
            { "hint": "Phone1", "key": "phone1", "secondHint": 'Type', "secondKey": "phone1Desc", "value": "", "dropDownData": [], type: 'textWithDropDown' },
            { "hint": "Phone2", "key": "phone2", "secondHint": 'Type', "secondKey": "phone2Desc", "value": "", "dropDownData": [], type: 'textWithDropDown' },
            { "hint": "Phone3", "key": "phone3", "secondHint": 'Type', "secondKey": "phone3Desc", "value": "", "dropDownData": [], type: 'textWithDropDown' }
          ]]
        },
        {
          title: 3,
          data: [[
            { "hint": "Security Question", "key": "internetQuestion", "value": "", "dropDownData": [], type: 'dropDown' },
            { "hint": "Answer", "key": "internetAnswer", "value": "", type: 'textinput' }
          ]]
        },
        {
          title: 4,
          data: [[
            { "hint": "Change Password", color: colors.PRIMARY, type: 'button' },
            { "hint": "Logout", color: '#F45735', type: 'button' }
          ]]
        }
      ]
    };

  }


  async onLoadGetPeople() {
    this.setState({ loaded: true })
    await AsyncStorage.multiGet(["lid", "peopleRSN"]).then(async (response) => {
      let lid = response[0][1], peopleRSN = response[1][1]

      await MyProfileServices.getPeople(lid, peopleRSN).then(async (resp) => {
        // console.log("PROFILEDATA",resp)
        this.setState({ loaded: false })
        if (resp.responseObject) {

          await this.setState({ profileData: { ...resp.responseObject }})
          //  console.log("SECTIONDATA11",JSON.stringify(this.state.sectionData))
          this.setSectionData();
        }
      }).catch((error) => {
        //ERROR HANDLING
        this.setState({ loaded: false });
        BottomAlert("No data found")

        console.log("axios error", error)
      })
    })
  }
  async onLoadGetPeopleTitles() {

    this.setState({ loaded: true })
    await MyProfileServices.getValidPeopleTitles(this.state.lid).then(async (resp) => {
      //    console.log("PEOPLETITLES",resp)
      let values = this.state.sectionData
      values[0].data[0][1].dropDownData = resp.responseObject.map(v => { return { ...v, "value": v.description } })
      this.setState({ sectionData: values })
     // this.setState({ loaded: false });

    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });

      console.log("axios error", error)
    })

  }

  async onLoadGetStreetTypes() {
    this.setState({ loaded: true })
    await MyProfileServices.getValidStreetTypes(this.state.lid).then(async (resp) => {
      // console.log("STREETTYPES",resp)
      let values = this.state.sectionData
      values[1].data[0][2].dropDownData = resp.responseObject.map(d => { return { ...d, "value": d.description } })
      this.setState({ sectionData: values })

      //this.setState({ loaded: false })

    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });
      BottomAlert("No data found")
      console.log("axios error", error)
    })


  }

  async onLoadGetStreetDirections() {
    this.setState({ loaded: true })
    await MyProfileServices.getValidStreetDirections(this.state.lid).then((resp) => {
      // console.log("STREETDIRECTIONS",resp)
      let values = this.state.sectionData
      values[1].data[0][2].secondDropDownData = resp.responseObject.map(v => { return { ...v, "value": v.addressDirection } })
      this.setState({ sectionData: values })

     // this.setState({ loaded: false })

    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });
      BottomAlert("No data found")
      console.log("axios error", error)
    })
  }


  async onLoadGetUnitTypes() {
    this.setState({ loaded: true })
    await MyProfileServices.getValidUnitTypes(this.state.lid).then((resp) => {
      //  console.log("UNIT TYPES",resp)
      let values = this.state.sectionData
      values[1].data[0][3].dropDownData = resp.responseObject.map(v => { return { ...v, "value": v.addressUnitType } })
      this.setState({ sectionData: values })

     // this.setState({ loaded: false })

      // }
    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });
      BottomAlert("No data found")
      console.log("axios error", error)
    })
  }

  async onLoadGetCity() {
    this.setState({ loaded: true })
    await MyProfileServices.getValidCity(this.state.lid).then((resp) => {
       console.log("getCITY",resp)
      let values = this.state.sectionData
      values[1].data[0][4].dropDownData = resp.responseObject.map(v => { return { ...v, "value": v.city } })
      this.setState({ sectionData: values })

     // this.setState({ loaded: false })

    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });
      BottomAlert("No data found")
      console.log("axios error", error)
    })
  }

  async onLoadGetProvinces() {
    this.setState({ loaded: true })
    await MyProfileServices.getValidProvinces(this.state.lid).then((resp) => {
      // console.log("getPROVINCES",resp)
      let values = this.state.sectionData
      values[1].data[0][5].dropDownData = resp.responseObject.map(v => { return { ...v, "value": v.provinceName } })
      this.setState({ sectionData: values })

     // this.setState({ loaded: false })

    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });
      BottomAlert("No data found")
      console.log("axios error", error)
    })
  }

  async onLoadGetPhoneTypes() {
    this.setState({ loaded: true })
    await MyProfileServices.getValidPhoneTypes(this.state.lid).then((resp) => {
      // console.log("getPHONETYPES",resp)
      let values = this.state.sectionData
      values[2].data[0][0].dropDownData = resp.responseObject.map(v => { return { ...v, "value": v.description } })
      values[2].data[0][1].dropDownData = resp.responseObject.map(v => { return { ...v, "value": v.description } })
      values[2].data[0][2].dropDownData = resp.responseObject.map(v => { return { ...v, "value": v.description } })

      this.setState({ sectionData: values })
      //this.setState({ loaded: false })

    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });
      BottomAlert("No data found")
      console.log("axios error", error)
    })
  }

  async onLoadGetSecurityQuestions() {
    this.setState({ loaded: true })
    await MyProfileServices.getValidSecurityQuestions(this.state.lid).then((resp) => {
      // console.log("SECURITY QUESTIONS",resp)
      let values = this.state.sectionData
      values[3].data[0][0].dropDownData = resp.responseObject.map(v => { return { ...v, "value": v.description } })
      this.setState({ sectionData: values })
      this.setState({ loaded: false })

    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });
      BottomAlert("No data found")
      console.log("axios error", error)
    })

  }

  convertToNormalNumberFormat = (value) => {
    let newValue = '';

    for (let i = 0; i < value.length; i += 1) {
      if (value[i] === '(' || value[i] === ')' || value[i] === ' ' || value[i] === '-') i += 1;
      newValue += value[i];
    }
    return newValue.split(' ').join('')
  }

  onPressUpdate() {

    let peopleData = {}

    this.state.sectionData.forEach((bigObj) => {
      bigObj.data[0].forEach((smallObj) => {
        if (smallObj.secondKey !== undefined) {
          if (smallObj.secondKey === 'addrStreetDirection')
            peopleData = { ...peopleData, [smallObj.secondKey]: smallObj.secondValue, ['addrStreetPrefix']: smallObj.secondValue }
          else
            peopleData = { ...peopleData, [smallObj.secondKey]: smallObj.secondValue }

        }
        if (smallObj.key !== undefined && smallObj.key !== 'emailAddress') {
          if (smallObj.hint === 'Phone1' || smallObj.hint === 'Phone2' || smallObj.hint === 'Phone3') {
            peopleData = { ...peopleData, [smallObj.key]: this.convertToNormalNumberFormat(smallObj.value) }
          }
          else peopleData = { ...peopleData, [smallObj.key]: smallObj.value }
        }
      })
    })

    peopleData = { ...peopleData, peopleRSN: this.state.peopleRSN, addrPostal: this.state.sectionData[1].data[0][6].value }

     console.log("PEP",peopleData)
    MyProfileServices.updatePeople(this.state.lid, peopleData).then((resp) => {
      // console.log("UPDATEPEOPLE",resp)

      // this.setState({sectionData:values})
      this.setState({ loaded: false })

    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });
      BottomAlert("No data found")
      console.log("axios error", error)
    })
  }

  async componentDidMount() {


    await AsyncStorage.multiGet(["lid", "peopleRSN"]).then(async (response) => {
      this.setState({
        lid: response[0][1],
        peopleRSN: response[1][1]
      })
    })

    this.onLoadGetPeople();
    this.onLoadGetPeopleTitles();
    this.onLoadGetStreetTypes();
    this.onLoadGetStreetDirections();
    this.onLoadGetUnitTypes();
    this.onLoadGetCity();
    this.onLoadGetProvinces();
    this.onLoadGetPhoneTypes();
    this.onLoadGetSecurityQuestions();
  }

  //  formatPhoneNumber =(phoneNumberString) => {

  //    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  //    var match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
  //    console.log(match, '-> match', phoneNumberString, '-> phoneNumberString')
  //    if (match) {
  //      return [match[1],'-', match[2], '-', match[3]].join('')
  //    }
  //    return null
  //  }


  setSectionData = async () => {

    const newSectionData = await this.state.sectionData.map((bigObj) => {
      const newArray = [bigObj.data[0].map(smallObj => {
        if (smallObj.secondHint !== undefined) {
          if (smallObj.hint === 'Phone1' || smallObj.hint === 'Phone2' || smallObj.hint === 'Phone3') {
            return {
              ...smallObj,
              value: this.formatPhoneNumber(this.state.profileData[smallObj.key])
            }
          }
          return {
            ...smallObj,
            value: this.state.profileData[smallObj.key],
            secondValue: this.state.profileData[smallObj.secondKey]
          }
        }

        return {
          ...smallObj,
          value: this.state.profileData[smallObj.key]
        }
      })]

      return { ...bigObj, data: newArray }
    })

    this.setState({ sectionData: newSectionData });
    // console.log("SECTIONDATA",JSON.stringify(this.state.sectionData))

  }


  render() {

    this.props.navigation.setOptions({
      title: "My Profile", headerStyle: styles.headerStyle, headerRight: props => <TouchableOpacity style={{ padding: 15 }}
        onPress={() => { this.setState({ isEditable: !this.state.isEditable }), this.state.isEditable ? this.onPressUpdate() : null }}>
        <Text style={{ ...fonts.H2_Regular, color: colors.PRIMARY }}>{this.state.isEditable ? "Update" : "Edit"}</Text>
      </TouchableOpacity>
    })
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Loader isVisible={this.state.loaded} />
        <SectionList
          showsVerticalScrollIndicator={false}
          style={{ width: '100%', alignSelf: 'center', marginVertical: 10 }}
          sections={this.state.sectionData}
          extraData={this.state.sectionData}
          // keyExtractor={(item, index) => item + index}
          renderItem={({ section, item, index }) => this._renderSectiontem(section, item, index)}
        />
      </KeyboardAvoidingView>
    )
  }

  _renderSectiontem(section, itemsArray, index) {

    return (
      <FlatList
        style={{ width: '100%', marginBottom: 10, marginTop: 10 }}
        showsHorizontalScrollIndicator={false}
        data={itemsArray}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => this.state.isEditable && section.title == 4  ?  false : <View style={{ height: 1, backgroundColor: 'lightgrey' }} />}
        renderItem={({ item }) => this._renderItem(section, item)}
      />
    )
  }


  async moveToLogin() {
    //   await AsyncStorage.
    await AsyncStorage.clear();
    this.props.navigation.navigate("Login")
  }

  formatPhoneNumber = (value) => {
    const newPhoneFormat = new AsYouType('US').input(value);

    return newPhoneFormat;
  }

  handleChangeText = async (item, title, text = '', secondText = '') => {



    const newSectionData = await this.state.sectionData.map(bigObj => {
      if (bigObj.title === title) {
        const newData = [bigObj.data[0].map(smallObj => {
          if (smallObj.hint === item.hint) {
            if (smallObj.secondHint !== undefined && smallObj.secondHint === item.secondHint && secondText) {
              return {
                ...smallObj, secondValue: secondText
              }
            }

            if (item.hint === 'Phone1' || item.hint === 'Phone2' || item.hint === 'Phone3') {
              return {
                ...smallObj,
                value: this.formatPhoneNumber(text)
              }
            }

            return {
              ...smallObj,
              value: text
            }
          }

          return { ...smallObj };
        })]

        return {
          ...bigObj,
          data: newData
        }
      }
      return { ...bigObj };
    })

    this.setState({ sectionData: newSectionData })

  }
 
  _renderButton(item) {
    return (

      this.state.isEditable ? false :
      <TouchableOpacity style={styles.buttonStyle} onPress={() => item.hint == "Logout" ? this.moveToLogin() : this.props.navigation.navigate("GeneratePassword", { buttonTitle: "Update", headerTitle: "Change Password",isLogin:false})}>
        <Text style={{ marginLeft: 20, ...fonts.H3_Regular, color: item.color }}>{item.hint}</Text>
      </TouchableOpacity>
    )
  }


   _renderDualDropdown(item, title) {
    return (
      <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
        <MaterialDropDown
          data={item.dropDownData}
          width={"50%"}
          placeholder={item.hint}
          edit={this.state.isEditable}
          value={item.value}
          disable={this.state.isEditable}
          onChangeText={(text) => { this.handleChangeText(item, title, text) }}
        />
        <MaterialDropDown
          data={item.secondDropDownData}
          width={"50%"}
          placeholder={item.secondHint}
          edit={this.state.isEditable}
          value={item.secondValue}
          disable={this.state.isEditable}
          onChangeText={(secondText) => { this.handleChangeText(item, title, '', secondText) }}
        />
      </View>
    )
  }

  _renderDropdown(item, title) {
    return (
      <MaterialDropDown
        data={item.dropDownData}
        width={"100%"}
        placeholder={item.hint}
        edit={this.state.isEditable}
        value={item.value}
        disable={this.state.isEditable}
        onChangeText={(text,index) => { this.handleChangeText(item, title, text) }}
      />
    )
  }

  _renderTextInput(item, title) {
    return (
      this.state.isEditable &&  item.hint == 'E-mail' ? false :
      <TextInput
        style={[styles.textFontStyles, { width: '100%', height: 50 , color: this.state.isEditable ? 'black' : 'black'}]}
        placeholder={item.hint}
        keyboardType = {item.hint == "Zip Code" ? 'number-pad' : 'default'}
        value={item.value}
        editable={item.hint == "E-mail" ? false : this.state.isEditable}
        onChangeText={(text) => { this.handleChangeText(item, title, text) }}

      />
    )
  }

  _renderTextInputWithDropDown(item, title) {
    // console.log("textinputDropdown",item)
    return (
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput
          style={[styles.textFontStyles, { width: '70%', borderRightWidth: 1, borderColor: 'lightgrey',color: this.state.isEditable ? 'black' : 'black'}]}
          placeholder={item.hint}
          value={item.value}
          editable={this.state.isEditable}
          keyboardType={item.hint == 'Phone1' || item.hint == 'Phone2' || item.hint == 'Phone3' ? 'phone-pad' : 'default'}
          maxLength={item.hint == 'Phone1' || item.hint == 'Phone2' || item.hint == 'Phone3' ? 13 : 35}
          onChangeText={(text) => { this.handleChangeText(item, title, text) }}
        />
        <MaterialDropDown data={item.dropDownData}
          width={"30%"}
          placeholder={item.secondHint}
          edit={this.state.isEditable}
          disable={this.state.isEditable}
          value={item.secondValue}
          onChangeText={(secondText) => { this.handleChangeText(item, title, '', secondText) }}
        />
      </View>
    )
  }

  _renderDropDownWithTextInput(item, title) {
    return (
      <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
        <MaterialDropDown data={item.dropDownData}
          width={"50%"}
          placeholder={item.hint}
          value={item.value}
          edit={this.state.isEditable}
          disable={this.state.isEditable}
          onChangeText={(text) => { this.handleChangeText(item, title, text) }}
        />
        <TextInput
          style={[styles.textFontStyles, { width: '50%', borderRightWidth: 1, borderColor: 'lightgrey',color: this.state.isEditable ? 'black' : 'black'}]}
          placeholder={item.secondHint}
          value={item.secondValue}
          editable={this.state.isEditable}
          onChangeText={(secondText) => { this.handleChangeText(item, title, '', secondText) }}
        />
      </View>
    )
  }

  _renderItem(section, item) {

    switch (item.type) {
      case 'dropDown': return this._renderDropdown(item, section.title)
      case 'textinput': return this._renderTextInput(item, section.title)
      case 'dualDropDown': return this._renderDualDropdown(item, section.title)
      case 'textWithDropDown': return this._renderTextInputWithDropDown(item, section.title)
      case 'dropdownWithTextInput': return this._renderDropDownWithTextInput(item, section.title)
      case 'button': return this._renderButton(item, section.title)
      default: return null
    }
  }

}
