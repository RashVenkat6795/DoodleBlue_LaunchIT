/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  UIManager,
  LayoutAnimation,
  AsyncStorage,
  Easing,
  NativeModules,
  Platform,
  StyleSheet,
} from 'react-native';
import BorderInputField from '../../../component/inputField/BorderInputField';
import PrimaryButton from '../../../component/Button/primaryButton';
import styles from './styles';
import {colors, fonts} from '../../../theme/constant';
import {images} from '../../../assets/constant';
import Loader from '../../../component/Loader';
import * as LoginService from '../../../api/LoginServices';
import BottomAlert from '../../../component/BottomAlert';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Apply for Permits and Licenses',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Pay fees Online',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Schedule Inspections',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d456',
          title: 'View your permits and Licenses',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d457',
          title: 'Renew your Licenses',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d458',
          title: 'Manage your Escrow Accounts',
        },
      ],
      isLoginShow: false,
      isLognSubmit: false,
      showPass: true,
      loginField: 'vishwa.c@launchitcorp.com',
      passField: 'Launch2016',
      loaded: false,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    // this.onLoad();
  }

  async onLoad() {
    let lid = await AsyncStorage.getItem('lid');
    this.setState({loaded: false});
    if (lid) {
      this.props.navigation.navigate('Services');
    } else {
    }
  }

  _openLoginViewAnimate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.setState({isLoginShow: !this.state.isLoginShow, isLognSubmit: true});
  }

  async getBoLoginData(item,dummyUserName,dummyPassword) {
    let formdata = {
      password: dummyPassword,
      userName: dummyUserName,
    };
    this.setState({loaded: true});
    await LoginService.boLogin(formdata)
      .then(async(res) => {
        console.log("dfsadfsadnofll",JSON.stringify(res))
        this.setState({loaded: false});
        if (res.message === 'Login successful') {
          //await AsyncStorage.clear();
          const boLoginLid = await res.responseObject.lid;
          await AsyncStorage.setItem('boLoginLid', boLoginLid);
          item == 3 ? this.props.navigation.navigate('RecoverPassword',{isValidOTP:false}) : this.props.navigation.navigate(item == 1 ? 'PublicSearch' : 'Register');
        } else {
          BottomAlert(res.message);
        }
      })
      .catch(err => {
        console.log('errors', JSON.stringify(err));
        this.setState({loaded: false});
      });
  }

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  async getRemoteData() {
    if (!this.validateEmail(this.state.loginField)) {
      alert('Please enter valid email');
    } else {
      let formdata = {
        password: this.state.passField.trim(),
        userName: this.state.loginField.trim().toLowerCase(),
      };
      this.setState({loaded: true});
      await LoginService.login(formdata)
        .then(res => {
          console.log('datafromServer', JSON.stringify(res));
          this.setState({loaded: false});
          if (res.responseObject) {
            // this.props.actions.loginResults(res.responseObject)
            this.moveToLogin(
              res.responseObject.lid,
              res.responseObject.peopleRSN,
            );
            AsyncStorage.setItem('boLoginLid', '')
            // this.props.navigation.navigate('Services')
          } else {
            BottomAlert(res.message);
          }
        })
        .catch(err => {
          console.log('errors', JSON.stringify(err));
          this.setState({loaded: false});
        });
    }
  }

  async moveToLogin(lid, peopleRSN) {
    let set = [['lid', lid.toString()], ['peopleRSN', peopleRSN.toString()]];
    await AsyncStorage.multiSet(set);
    this.props.navigation.navigate('Services');
  }
  _renderLoginRegisterStack() {
    return (
      <View style={{marginVertical: 15}}>
        <PrimaryButton
          style={styles.loginButton}
          text="Login"
          isRounded={true}
          height={50}
          onPress={() => {
            this.state.isLognSubmit
              ? this.getRemoteData()
              : this._openLoginViewAnimate();
          }}
        />
        <PrimaryButton
          style={[
            styles.loginButton,
            {
              color: colors.PRIMARY,
              borderWidth: 2,
              backgroundColor: 'transparent',
              marginTop: 20,
              borderColor: colors.PRIMARY,
            },
          ]}
          text="Register"
          color={colors.PRIMARY}
          isRounded={true}
          height={50}
          onPress={() => {
            this.getBoLoginData(2,'PORTALAMANDA','PORTAL20');
          }}
        />
      </View>
    );
  }

  _renderLoginStack() {
    return (
      <View style={styles.loginStack}>
        <BorderInputField
          onTextChange={text => {
            this.setState({loginField: text});
          }}
          style={styles.mobileText}
          keyboardType="email-address"
          leftImage="greyuser"
          hint={'E-mail'}
        />
        <BorderInputField
          leftImage="greylock"
          rightImage="eyyOff"
          righImageAction={() => {
            this.setState({showPass: !this.state.showPass});
          }}
          onTextChange={text => {
            this.setState({passField: text});
          }}
          style={styles.passwordText}
          isSecure={this.state.showPass}
          hint={'Password'}
        />
        <TouchableOpacity
          style={styles.forgotPassButton}
          onPress={() => this.getBoLoginData(3,'PORTALAMANDA','PORTAL20')}>
          <Text style={styles.forgotPassText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderLoginFeatures() {
    return (
      <FlatList
        style={styles.loginFeatures}
        showsVerticalScrollIndicator={false}
        data={this.state.features}
        ListHeaderComponent={() => this._renderHeader()}
        ItemSeparatorComponent={() => this._renderLineView('100%')}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderItem}
      />
    );
  }

  async componentDidMount() {
    await AsyncStorage.clear()
  }

  _renderHeader() {
    return (
      <View style={styles.loginFeatureHeader}>
        <Image style={{height: 15, width: 15}} source={images.features} />
        <Text style={[{...fonts.H2_Bold}, styles.featuresText]}>
          Login Features
        </Text>
      </View>
    );
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.loginFeaturesItem}>
        <View style={styles.dotView} />
        <Text style={[{...fonts.H3_Regular}, styles.featuresText]}>
          {item.title}
        </Text>
      </View>
    );
  };

  _renderPublicSearchButton() {
    return (
      <TouchableOpacity
        style={styles.portalSearchButton}
        onPress={() => {
          this.getBoLoginData(1,'INTERNET','INTERNET');
        }}>
        <Text style={styles.publicPortalText}>Public Search</Text>
        <Image style={{height: 20, width: 20}} source={images.searchNew} />
      </TouchableOpacity>
    );
  }

  _renderLineView(width) {
    return (
      <View
        style={{
          height: StyleSheet.hairlineWidth,
          backgroundColor: '#BFBFBF',
          width: width,
        }}
      />
    );
  }

  _renderHorizontalView() {
    return (
      <View style={styles.horizontalView}>
        {this._renderLineView('42%')}
        <Text style={{...fonts.H2_Regular, color: '#BFBFBF'}}>or</Text>
        {this._renderLineView('42%')}
      </View>
    );
  }

  render() {
    //    alert(this.props.login)
    return (
      <View style={styles.container}>
        <Loader isVisible={this.state.loaded} />
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <ScrollView style={{flex: 1}}>
          {this._renderPublicSearchButton()}
          {this._renderHorizontalView()}
          {this.state.isLoginShow && this._renderLoginStack()}
          {this._renderLoginRegisterStack()}
          {this._renderLoginFeatures()}
        </ScrollView>
      </View>
    );
  }
}
