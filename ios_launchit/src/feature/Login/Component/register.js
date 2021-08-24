import React, { Component } from "react";
import { SafeAreaView, FlatList, SectionList, ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, TextInput, AsyncStorage } from "react-native";
import PrimaryButton from '../../../component/Button/primaryButton';
import Header from '../../../component/Header/AuthenticationHeader'
import styles from "./styles";
import { colors, austinColors, fonts } from '../../../theme/constant'
import Declaration from '../../../component/checkox/declaration'
import IndicatorBar from "../../../component/Header/indicatorbar";
import MaterialDropDown from "../../../component/MaterialDropDown";
import * as MyProfileServices from '../../../api/MyProfileServices';
import * as LoginService from '../../../api/LoginServices';
import BottomAlert from '../../../component/BottomAlert';
import { images } from '../../../assets/constant';
import Loader from '../../../component/Loader';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstPage: true,
      isEditable: true,
      loaded: false,
      boLoginLid: '',
      sectionData: [{

        data: [[
          { "hint": "Registered E-mail", "text": null, "value": "", type: 'textinput' },
          { "hint": "Confirm E-mail", "text": null, "value": "", type: 'textinput' },
          { "hint": "First Name", "text": null, "value": "","secondHint": 'Title', "dropDownData": [], "selectedValue": "", type: 'textWithDropDown', secondWidth: '30%', firstWidth: '70%',selectedID :''},
          { "hint": "Last Name", "text": null, "value": "", type: 'textinput' },
          { "hint": "Organization", "text": null, "value": "", type: 'textinput' },
          { "hint": "Phone Number", "text": null,"value": "","secondHint": 'Phone Type',"dropDownData": [], "selectedValue": "", type: 'textWithDropDown', secondWidth: '40%', firstWidth: '60%',selectedID:''},
          { "hint": "Security password question?", "selectedValue": "", "dropDownData": [], type: 'dropDown',selectedID:''},
          { "hint": "Security password answer", "text": null, "value": "", type: 'textinput' },
        ]]
      }],

      sectionData2: [{

        data: [[
          { "hint": "House Number", "text": null, "value": "", type: 'textinput' },
          { "hint": "Street Name", "text": null, "value": "", type: 'textinput' },
          { "hint": "Street Type", "selectedValue": "", "dropDownData": [], type: 'dropDown',selectedID:''},
          { "hint": "Street Direction", "selectedValue": "", "dropDownData": [], type: 'dropDown',selectedID:''},
          { "hint": "Unit Type", "selectedValue": "", "dropDownData": [], type: 'dropDown',selectedID:''},
          { "hint": "Unit Number", "text": null, "value": "", type: 'textinput' },
          { "hint": "City", "text": null, "value": "","secondHint": 'State',"dropDownData": [], "selectedValue": "", type: 'textWithDropDown', secondWidth: '50%', firstWidth: '50%',selectedID:''},
          { "hint": "Country", "text": null, "selectedValue" : '',"secondHint": "Zip Code","value": "", type: 'dualTextInput' },

        ]]
      }]
    };
  }

  async componentDidMount() {
    await AsyncStorage.multiGet(['boLoginLid']).then(
      async response => {
        this.setState({
          boLoginLid: response[0][1],
        });
      },
    );
    console.log(this.state.boLoginLid)
    this.getValidPeopleTitles()
    this.getValidPhoneTypes()
    this.getValidSecurityQuestions()
    this.getValidStreetTypes()
  }

  async getValidPeopleTitles() {
    this.setState({ loaded: true })
    await MyProfileServices.getValidPeopleTitles(this.state.boLoginLid).then(async (resp) => {
      console.log("PEOPLETITLES",resp)
      let values = this.state.sectionData
      values[0].data[0][2].dropDownData = resp.responseObject.map(v => { return { ...v, "value": v.description } })
      this.setState({ sectionData: values })
     // this.setState({ loaded: false });
    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });
      console.log("axios error", error)
    })
  }

 async getValidPhoneTypes() {
    this.setState({ loaded: true })
    await MyProfileServices.getValidPhoneTypes(this.state.boLoginLid).then((resp) => {
       console.log("getPHONETYPES",resp)
       let values = this.state.sectionData
       values[0].data[0][5].dropDownData = resp.responseObject.map(v => { return { ...v, "value": v.description } })
       this.setState({ sectionData: values })
    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });
      BottomAlert("No data found")
      console.log("axios error", error)
    })
  }
  async getValidSecurityQuestions() {
    this.setState({ loaded: true })
    await MyProfileServices.getValidSecurityQuestions(this.state.boLoginLid).then((resp) => {
       console.log("SECURITY QUESTIONS",resp)
       let values = this.state.sectionData
       values[0].data[0][6].dropDownData = resp.responseObject.map(v => { return { ...v, "value": v.description } })
       this.setState({ sectionData: values })
     // this.setState({ loaded: false })

    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });
      BottomAlert("No data found")
      console.log("axios error", error)
    })
  }

 async getValidStreetTypes() {
    this.setState({ loaded: true })
    await MyProfileServices.getValidStreetTypes(this.state.boLoginLid).then(async (resp) => {
       console.log("STREETTYPES",resp)
      let values = this.state.sectionData2
      values[0].data[0][2].dropDownData = resp.responseObject.map(d => { return { ...d, "value": d.description } })
      this.setState({ sectionData2: values })
      this.setState({ loaded: false })
    }).catch((error) => {
      //ERROR HANDLING
      this.setState({ loaded: false });
      BottomAlert("No data found")
      console.log("axios error", error)
    })
  }

  _onChangeDropDownValue(dataIndex,dropDownIndex) {
    let values = this.state.firstPage ? this.state.sectionData : this.state.sectionData2
    values[0].data[0][dataIndex].selectedValue = values[0].data[0][dataIndex].dropDownData[dropDownIndex].value
    values[0].data[0][dataIndex].selectedID = values[0].data[0][dataIndex].dropDownData[dropDownIndex].id
    if(values[0].data[0][dataIndex].secondHint == "State") {
      values[0].data[0][dataIndex + 1].selectedValue  = values[0].data[0][dataIndex].dropDownData[dropDownIndex].country
    }
    console.log("dropeffetctedvalues",JSON.stringify(values))
    this.state.firstPage ?  this.setState({sectionData:values}) : this.setState({sectionData2:values})
   }

   _onHandleChangeText(dataIndex,text) {
    let values = this.state.firstPage ? this.state.sectionData : this.state.sectionData2
    values[0].data[0][dataIndex].value = text
   // console.log("dropeffetctedvalues",JSON.stringify(values))
    this.state.firstPage ? this.setState({sectionData:values}) : this.setState({sectionData2:values})
   }

  async onPressRegister() {
    let firstPageData = this.state.sectionData[0].data[0]
    let secondPageData = this.state.sectionData2[0].data[0]
    let data = {
      "emailAddress": firstPageData[1].value.trim(),
      "nameFirst": firstPageData[2].value,
      "nameTitle": firstPageData[2].selectedID, //peopleTitle
      "nameLast": firstPageData[3].value,
      "organizationName": firstPageData[4].value,
      "phone1": firstPageData[5].value,
      "phone1Desc": firstPageData[5].selectedID,
      "phone2": "",
      "phone2Desc": "",
      "phone3": "",
      "phone3Desc": "",
      "internetQuestion": firstPageData[6].selectedID,
      "internetAnswer": firstPageData[7].value,
      "addrHouse": secondPageData[0].value,//house number
      "addrStreet": secondPageData[1].value,//Street Name
      "addrStreetType": secondPageData[2].selectedID,//streetType
      "addrStreetDirection": secondPageData[3].selectedID,//Street Direction
      "addrStreetPrefix": secondPageData[3].selectedID,//Street Direction
      "addrUnitType": secondPageData[4].selectedID,//unitType
      "addrUnit": secondPageData[5].value,//Unit Number
      "addrCity": secondPageData[6].value,//city,
      "addrProvince": secondPageData[6].selectedID,//state,
      "addrCountry": secondPageData[7].selectedValue,//country,
      "addrPostal": secondPageData[7].value //Zip code
    }
    console.log("reg data", data);
    this.setState({loaded: true});
    await LoginService.register(data,this.state.boLoginLid)
      .then(async(res) => {
        console.log("dfsadfsadnofll",JSON.stringify(res))
        this.setState({loaded: false});
        BottomAlert(res.message);
        this.props.navigation.navigate('RecoverPassword', { isValidOTP: true })
      })
      .catch(err => {
        console.log('errors', JSON.stringify(err));
        this.setState({loaded: false});
      });
  }

  renderFirstPage() {
    return (
      <View>
        <IndicatorBar
          leftColor={'blue'}
          lineColor={'grey'}
          rightColor={'grey'}
        />

        <View style={[styles.registerList, { marginTop: '5%' }]}>
          <SectionList
            showsVerticalScrollIndicator={false}
            style={{ width: '100%', alignSelf: 'center', marginVertical: 10 }}
            sections={this.state.sectionData}
            extraData={this.state.sectionData}
            // keyExtractor={(item, index) => item + index}
            renderItem={({ section, item, index }) => this._renderSectiontem(section, item, index)}
          />
        </View>

        <PrimaryButton
          isRounded={true}
          style={[styles.loginButton, { marginTop: 40, marginBottom: 40 }]}
          text="Next"
          onPress={() => {
            this.setState({ firstPage: false })
          }}
        />
      </View>
    )
  }

  _renderSectiontem(section, itemsArray, index) {
    return (
      <FlatList
        style={{ width: '100%', marginBottom: 10, marginTop: 10, borderWidth: 1, borderColor: 'lightgrey' }}
        showsHorizontalScrollIndicator={false}
        data={itemsArray}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'lightgrey' }} />}
        renderItem={({ item,index }) => this._renderItem(item,index)}
      />
    )
  }

  renderSecondPage() {
    const { data1, dropdownData } = this.state;
    return (
      <View>
        <IndicatorBar
          leftColor={'green'}
          lineColor={'blue'}
          rightColor={'blue'}
        />



        <View style={[styles.registerList, { marginTop: '5%' }]}>
          <SectionList
            showsVerticalScrollIndicator={false}
            style={{ width: '100%', alignSelf: 'center', marginVertical: 10 }}
            sections={this.state.sectionData2}
            extraData={this.state.sectionData2}
            // keyExtractor={(item, index) => item + index}
            renderItem={({ section, item, index }) => this._renderSectiontem(section, item, index)}
          />
        </View>

        <Declaration
          style={Styles.declarationStyle}
        // text = ""
        />

        <PrimaryButton
          isRounded={true}
          style={[styles.loginButton, { marginTop: 10, marginBottom: 32 }]}
          text="Register"
          onPress={() => {
            //this.onPressRegister();
            this.props.navigation.navigate('RecoverPassword', { isValidOTP: true })
          }}
        />
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
         <Loader isVisible={this.state.loaded} />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            marginTop: 5,
          }}
          onPress={() => {
            this.state.firstPage ? this.props.navigation.goBack() : this.setState({firstPage:true})
          }}>
          <View
            style={{
              backgroundColor: '#F9F7F7',
              width: 35,
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 18,
            }}>
            <Image
              source={images.chevronleft_darkblue}
              style={{ width: 22, height: 22 }}
            />
          </View>
        </TouchableOpacity>
        <ScrollView style={{ flex: 1 }}>

          <Header
            style={Styles.headerStyle}
            header="Register"
            subHeader={"Discover amazing things news around you."}
          />
          {this.state.firstPage ? this.renderFirstPage() : this.renderSecondPage()}
        </ScrollView>
      </SafeAreaView>
    )
  }

  _renderTextInput(item,index) {
    console.log(index)
    return (
      <TextInput
        style={[styles.textFontStyles, { width: '100%', height: 50 }]}
        placeholder={item.hint}
        value={item.value}
        editable={this.state.isEditable}
       onChangeText={(text) => { 
         this._onHandleChangeText(index,text) 
        }}
      />
    )
  }

  _renderTextInputWithDropDown(item,index) {
    // console.log("textinputDropdown",item)
    return (
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput
          style={[styles.textFontStyles, { width: item.firstWidth, borderRightWidth: 1, borderColor: 'lightgrey', color: this.state.isEditable ? 'black' : '#A9A9A9' }]}
          placeholder={item.hint}
          value={item.value}
          editable={this.state.isEditable}
          onChangeText={(text) => { 
            this._onHandleChangeText(index,text) 
          }}
        />
        <MaterialDropDown
          data={item.dropDownData}
          width={item.secondWidth}
          placeholder={item.secondHint}
          edit={true}
          disable={this.state.isEditable}
          value={item.selectedValue}
          onChangeText={(value, dropDownIndex) => {
             //this.handleChangeText(item, title, '', secondText) 
             //console.log("dropdown",value,dropDownIndex,index);
             //console.log('datatt',this.state.sectionData2[0].data[0][index].dropDownData[dropDownIndex].id)
             this._onChangeDropDownValue(index,dropDownIndex)
            }}
        />
      </View>
    )
  }


  _renderDropdown(item, index, section) {
    return (
      <MaterialDropDown
        data={item.dropDownData}
        width={'100%'}
        edit={true}
        value = {item.selectedValue}
        placeholder={item.hint}
        disable={this.state.isEditable}
        onChangeText={(value, dropDownIndex) => {
          // console.log('datatt',this.state.sectionData2[0].data[0][index].dropDownData[dropDownIndex].id)
          this._onChangeDropDownValue(index,dropDownIndex)
        }}
      />
    );
  }

  _renderDualTextInput(item, index, section) {
    return (
      <View
        style={{
          width: '100%',
          height : 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
       <TextInput
          style={[
            styles.textFontStyles,
            { width: '50%', borderRightWidth: 1, borderColor: 'lightgrey' },
          ]}
          placeholder={item.hint}
          multiline={false}
          no={1}
          value={item.selectedValue}
          editable={false}
        />
        <TextInput
          style={[
            styles.textFontStyles,
            { width: '50%', borderRightWidth: 1, borderColor: 'lightgrey' },
          ]}
          placeholder={item.secondHint}
          multiline={false}
          no={1}
          value={item.value}
          editable={this.state.isEditable}
          onChangeText={(text) => {
            // console.log('DropDownWithTextInput', text, index);
            //this._handleChangeStates(section, index, text);
            this._onHandleChangeText(index,text) 
          }}
        />
      </View>
    );
  }

  _renderItem(item,index) {

    switch (item.type) {
      case 'textinput': return this._renderTextInput(item,index)
      case 'textWithDropDown': return this._renderTextInputWithDropDown(item,index)
      case 'dropDown': return this._renderDropdown(item,index)
      case 'dualTextInput': return this._renderDualTextInput(item,index)
      default: return null
    }
  }

}

const Styles = {
  topContainer: {
    width: '80%', alignSelf: 'center', flexDirection: 'row', marginTop: 40
  },
  topLeftContainer: {
    backgroundColor: 'rgba(30, 82, 151, 0.16)', width: 20, height: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center'
  },
  lineStyle: {
    backgroundColor: '#D6D6D6', width: '85%', height: 1, alignSelf: 'center'
  },
  topRightConatiner: {
    backgroundColor: colors.TEXT_CUSTOM_GRAY, width: 12, height: 12, borderRadius: 6, alignSelf: 'center'
  },
  secondViewStyle: {
    width: '83%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10
  },
  topRightConatiner2: {
    backgroundColor: 'rgba(30, 82, 151, 0.16)', width: 20, height: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center'
  },
  declarationStyle: {
    width: '90%', alignSelf: 'center', marginTop: '5%', marginBottom: 30
  },
  headerStyle: {
    width: '90%', alignSelf: 'center', marginTop: 12
  },
  textStyle: {
    ...fonts.SUB_HEADING,
    marginLeft: 10,
    color: '#A2A2A2'
  },
  btnStyle: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.CARD_BORDER_COLOR,
    paddingHorizontal: 15, padding: 10
  },
  imgStyle: {
    width: 25, height: 24, marginTop: 10
  }
}