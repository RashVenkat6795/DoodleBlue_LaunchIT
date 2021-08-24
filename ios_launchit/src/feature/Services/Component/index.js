/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import ServiceView from '../../../component/view/servicesView';

export default class Services extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ServiceView
          style={{width: '100%'}}
          onPress={(navigate, params) => {
            navigate && this.props.navigation.navigate(navigate, {...params});
          }}
        />
      </SafeAreaView>
    );
  }
}
