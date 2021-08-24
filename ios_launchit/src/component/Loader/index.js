/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Modal,
  Dimensions,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {images} from '../../assets/constant';
import {themes} from '../../theme/constant';
import {ThemeColors} from 'react-navigation';

const {width, height} = Dimensions.get('window');

export default class Loader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.props.isVisible}
        onRequestClose={() => {}}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}>
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                width: width - 50,
              },
              this.props.style,
            ]}>
            <ActivityIndicator
              animating={true}
              color={themes.colors.APP_GREY}
              size="large"
              style={{height: 40}}
            />
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}
