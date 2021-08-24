
import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, Image, FlatList, TextInput, StyleSheet } from "react-native";
import InputField from '../../../component/inputField/inputField';
import PrimaryButton from '../../../component/Button/primaryButton';
import { images } from "../../../assets/constant";
import BorderInputField from '../../../component/inputField/BorderInputField';
import Header from '../../../component/Header/AuthenticationHeader';
import HeaderLeft from '../../../component/Header/MainHeaderLeft';
import styles from "./styles";
import { colors, fonts } from "../../../theme/constant";
import MaterialDropDown from '../../../component/MaterialDropDown'
export default class RecoverPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showotp: false,
      //   showPass: true,
      isSecure: true,
      isEditable: true,
      pinNumber: '',
      flatListData: [
        { "hint": "Email Address", "text": null, "ref": "emailAddress", type: 'textinput', value: '' },
        { "hint": "Password Question", "text": null, "ref": "passwordQuestion", type: 'dropDown', dropDownData: [], selectedValue: '' },
        { "hint": "Password Answer", "ref": "passwordAnswer", type: 'textinput', value: '', image: true },
      ]
    }
    var navioption = props.navigation;
    props.navigation.setOptions({
      title: '',
      headerLeft: props => <HeaderLeft title={'register'} {...props} back={true} navigation={navioption} />
    })
  }

  componentDidMount() {
       this.setState({showotp:!!this.props.route.params ? this.props.route.params.isValidOTP : false})
  }

  _renderRecoveryPassword() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          style={Styles.headerStyles}
          header="Recover your password"
          subHeader={"Select one of any credentials which should we use for recover your password"}
        />
        <View style={Styles.inputViewStyle}>
          <FlatList scrollEnabled={false}
            style={{ width: '100%', marginBottom: 10, marginTop: 10, borderWidth: 1, borderColor: 'lightgrey' }}
            showsHorizontalScrollIndicator={false}
            data={this.state.flatListData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'lightgrey' }} />}
            renderItem={({ item }) => this._renderItem(item)}
          />
        </View>

        <PrimaryButton
          isRounded={true}
          style={[styles.loginButton, { marginTop: '18%' }]}
          text="Next"
          onPress={() => {
            this.props.navigation.navigate('GeneratePassword', { buttonTitle: "Login", headerTitle: "Change Password",isLogin:true })
          }}
        />
      </View>
    )
  }

  _renderOTPScreen() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          style={Styles.headerStyles}
          header="Enter Pin Number"
          subHeader={"Please enter the pin number sent to your mobile number"}
        />
        <View style={Styles.pinViewStyle}>
          <TextInput
            style={[Styles.textFontStyles, { width: '90%', height: 50, textAlign: 'center', marginLeft: 0 }]}
            secureTextEntry={true}
            autoFocus={true}
            keyboardType='number-pad'
            // maxLength={6}
            value={this.state.pinNumber}
            onChangeText={pin => this.setState({ pinNumber: pin })}
          />
        </View>
        <PrimaryButton
          isRounded={true}
          style={[styles.loginButton, { marginTop: '24%' }]}
          text="Submit"
          onPress={() => {
            this.props.navigation.navigate('GeneratePassword', { buttonTitle: "Login", headerTitle: "Create Password",isLogin:true})
          }}
        />
      </View>
    )
  }

  _renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 15,
          marginTop: 5,
        }}
        onPress={() => {
          this.props.navigation.goBack();
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
    )
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this._renderHeader()}
        {!this.state.showotp ? this._renderRecoveryPassword() : this._renderOTPScreen()}
      </SafeAreaView>
    )
  }

  _renderTextInput(item) {
    return (
      <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput
          style={[Styles.textFontStyles, { width: '100%', height: 50 }]}
          placeholder={item.hint}
          editable={this.state.isEditable}
          secureTextEntry={this.state.isSecure}
          value={item.value}
        // onChangeText = {(text) =>this._handleChangeStates(section,index,text)}
        />
        {item.image ?
          <TouchableOpacity onPress={() => this.setState({ isSecure: !this.state.isSecure })} style={Styles.rightImageView}>
            <Image
              source={images['eyyOff']}
              style={Styles.rightImage}
            />
          </TouchableOpacity>
          :
          null
        }
      </View>
    )
  }
  _renderDropdown(item) {
    return (
      <View style={{ marginLeft: 8 }}>
        <MaterialDropDown
          data={item.dropDownData}
          style={{ marginRight: item.hint == 'Password Question' ? 12 : 0 }}

          width={"100%"}
          edit={true}
          placeholder={item.hint}
          disable={this.state.isEditable}
          value={item.selectedValue}
        // onChangeText = {text => {}}

        />
      </View>
    )
  }

  _renderItem(item) {

    switch (item.type) {
      case 'dropDown': return this._renderDropdown(item)
      case 'textinput': return this._renderTextInput(item)

      default: return null
    }
  }
}

const Styles = {
  headerStyles: {
    width: '90%', alignSelf: 'center', marginTop: 12
  },
  otpContainerStyle: {
    flexDirection: 'row', marginTop: '15%', alignSelf: 'center'
  },
  otpView: {
    paddingHorizontal: 15, borderRightColor: 'rgba(148, 148, 148, 0.31)', borderRightWidth: 1
  },
  pinViewStyle: {
    flexDirection: 'row', borderWidth: StyleSheet.hairlineWidth, borderColor: colors.CARD_BORDER_COLOR, alignItems: 'center', marginTop: '25%', justifyContent: 'center'
  },
  inputViewStyle: {
    marginTop: 25,
  },
  textFontStyles: {
    marginLeft: 25, ...fonts.H3_Regular, color: 'black', backgroundColor: 'white',
  },
  rightImageView: {
    position: 'absolute', right: 25, alignSelf: 'center', resizeMode: 'contain'
  },
  rightImage: {
    height: 15, width: 15
  }

}