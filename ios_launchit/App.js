/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import StatusBar from './src/constants/statusbar';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import Login from './src/feature/Login/Component/login';
import MainStackNavigator from './src/navigation/AppNavigator'
import { PersistGate } from 'redux-persist/integration/react';
import Store from './src/redux/store';
import { Provider } from 'react-redux';
import { colors } from './src/theme/constant';
// console.disableYellowBox = true;
const { store, persistor } = Store();
export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
    <View style = {{flex: 1}}>
      {/* <StatusBar backgroundColour={'white'} barStyle={'dark-content'}/> */}
      {/* <StatusBar backgroundColour={'#428AE9'} barStyle={'light-content'}/> */}
      <SafeAreaView style={{flex: 1}}>
        {/* <StatusBar backgroundColor={colors.PRIMARY} barStyle={'light-content'}/> */}
        <MainStackNavigator/>
      </SafeAreaView> 
    </View>
    {/* </PersistGate> */}
    </Provider>
  );
}
