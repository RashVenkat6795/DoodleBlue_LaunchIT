/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {images} from '../../../assets/constant';
import RegisterInputField from '../../../component/inputField/registerInputField';
import PrimaryButton from '../../../component/Button/primaryButton';
import Header from '../../../component/Header/AuthenticationHeader';
import HeaderLeft from '../../../component/Header/MainHeaderLeft';
import styles from './styles';
import * as MyProfileServices from '../../../api/MyProfileServices';
import {colors} from '../../../theme/constant';
import BottomAlert from '../../../component/BottomAlert';
import Loader from '../../../component/Loader';

export default class GeneratePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPass: true,
      loaded: false,
      newPassword: '',
      confirmPassword: '',
    };
    var navioption = props.navigation;
    props.navigation.setOptions({
      title: '',
      headerLeft: props => (
        <HeaderLeft title={''} {...props} back={true} navigation={navioption} />
      ),
    });
  }

  _updatePassword() {
    if (
      this.state.newPassword.trim() !== '' &&
      this.state.confirmPassword.trim() !== ''
    ) {
      if (this.state.newPassword.trim() === this.state.confirmPassword.trim()) {
        this.callChangePasswordAPI();
      } else {
        BottomAlert("Create password and Confirm Password didn't match");
      }
    } else {
      BottomAlert('Please enter password');
    }

    //   this.props.navigation.popToTop()
  }
  async callChangePasswordAPI() {
    this.setState({loaded: true});
    await AsyncStorage.multiGet(['lid', 'peopleRSN']).then(async response => {
      let lid = response[0][1],
        peopleRSN = response[1][1];
      await MyProfileServices.updatePassword(
        lid,
        peopleRSN,
        this.state.confirmPassword,
      )
        .then(async resp => {
          // console.log("PROFILEDATA",resp)
          this.setState({loaded: false});
          if (resp.message == 'Success') {
            BottomAlert('password Updated successfully');
            this.props.navigation.popToTop();
          } else {
            BottomAlert('Please try again later');
          }
        })
        .catch(error => {
          //ERROR HANDLING
          this.setState({loaded: false});
          BottomAlert('No data found');
        });
    });
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
              style={{width: 22, height: 22}}
            />
          </View>
        </TouchableOpacity>
        <Header
          style={Styles.headerStyle}
          header={this.props.route.params.headerTitle}
          subHeader={
            'Create a new password\nDo not share it with anyone for safe use.'
          }
        />
        <View style={Styles.inputViewStyle}>
          <View style={Styles.leftView}>
            <Image source={images.unlock} style={Styles.leftImage} />
          </View>
          <View
            style={{
              width: 1,
              height: '60%',
              backgroundColor: colors.CARD_BORDER_COLOR,
            }}
          />
          <RegisterInputField
            onTextChange={text => {
              this.setState({newPassword: text});
            }}
            style={[styles.mobileText, Styles.inputTextStyle]}
            isSecure={this.state.showPass}
            hint={'Create new password'}
          />
          <TouchableOpacity
            onPress={() => this.setState({showPass: !this.state.showPass})}
            style={Styles.rightImage}>
            <Image source={images.eyyOff} style={{height: 16, width: 16}} />
          </TouchableOpacity>
        </View>
        <View style={[Styles.inputViewStyle, {marginTop: 12}]}>
          <View style={Styles.leftView}>
            <Image source={images.lock} style={Styles.leftImage} />
          </View>
          <View
            style={{
              width: 1,
              height: '60%',
              backgroundColor: colors.CARD_BORDER_COLOR,
            }}
          />
          <RegisterInputField
            onTextChange={text => {
              this.setState({confirmPassword: text});
            }}
            style={[styles.mobileText, Styles.inputTextStyle]}
            isSecure={this.state.showPass}
            hint={'Confirm new password'}
          />
          <TouchableOpacity
            onPress={() => this.setState({showPass: !this.state.showPass})}
            style={Styles.rightImage}>
            <Image source={images.eyyOff} style={{height: 16, width: 16}} />
          </TouchableOpacity>
        </View>
        <PrimaryButton
          isRounded={true}
          style={[styles.loginButton, {marginTop: '20%'}]}
          text={this.props.route.params.buttonTitle}
          onPress={() => this.props.route.params.isLogin ? this.props.navigation.popToTop() : this._updatePassword()}
        />
      </SafeAreaView>
    );
  }
}

const Styles = {
  headerStyle: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 40,
  },
  inputStyle: {
    marginTop: '7%',
    width: '100%',
    shadowOffset: {width: 0, height: 0},
    shadowColor: '#747474',
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  leftImage: {
    alignContent: 'center',
    marginRight: 5,
    marginLeft: 5,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightImage: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
  },
  leftView: {
    // borderRightWidth: StyleSheet.hairlineWidth,
    // borderColor: colors.CARD_BORDER_COLOR,
    paddingHorizontal: 20,
    padding: 15,
  },
  inputViewStyle: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.CARD_BORDER_COLOR,
    alignItems: 'center',
    marginTop:28,
  },
  inputTextStyle: {
    borderColor: 'white',
    borderWidth: 0,
    width: '60%',
    paddingLeft: 5,
  },
};
