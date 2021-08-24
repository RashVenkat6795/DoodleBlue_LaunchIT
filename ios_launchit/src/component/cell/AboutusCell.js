import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity,Image,UIManager,LayoutAnimation} from 'react-native';
import {colors, fonts} from '../../theme/constant';
import { images } from '../../assets/constant';

class AboutUsCell extends Component {
    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
          }
    }
    
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.onPress()}
        >
        <View
          style={styles.innerContainer}>
          <Text
            style={styles.headerText}>
            {item.title}
          </Text>
          <Image
            style={{
              height: 25,
              width: 25,
              marginRight: 30,
              transform: [{rotate: item.isOpen ? '180deg' : '0deg'}],
            }}
            source={images.drop_down}
          />
        </View>
        {item.isOpen && (
          <View
            style={styles.footerContainer}>
            <Text
              style={styles.subHeaderText}>
              {item.Description}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

AboutUsCell.defaultProps = {
  style: {},
  header: null,
  subHeader: null,
};

const styles = StyleSheet.create({
  container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        marginVertical: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#BFBFBF',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    padding: 20,
    ...fonts.H3_Regular,
    marginLeft: 10,
    fontWeight: '500',
  },
  subHeaderText: {
    paddingLeft: 30,
    paddingVertical: 15,
    paddingRight: 10,
    color: 'grey',
    lineHeight: 30,
  },
  footerContainer : {
    width: '100%',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#BFBFBF',
    backgroundColor: 'white',
  }
  
});

export default AboutUsCell;
