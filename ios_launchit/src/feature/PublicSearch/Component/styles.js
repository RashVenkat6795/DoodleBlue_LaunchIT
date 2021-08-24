import React from 'react';
import {StyleSheet} from 'react-native';
import {fonts, colors} from '../../../theme/constant';

const styles = StyleSheet.create({
  /*  container: {
        flex: 1,
        backgroundColor: '#E3E3E3',
    }, */
  searchView: {
    width: '100%',
    alignSelf: 'center',
  },
  projectView: {
    width: '50%',
    alignSelf: 'center',
    // top: 12,
    // marginTop: 8,
    // marginBottom: 12,
  },
  submitButton: {
    //position: 'absolute',
    bottom: 12,
    width: '70%',
    alignSelf: 'center',
    marginTop: 40,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    backgroundColor: 'red',
  },

  /*  mobileText: {
        marginTop: "4%", 
        width: '100%', 
        // height: 50, 
        alignSelf: 'center',
    }, */
  headerText: {
    ...fonts.H3_Regular,
    marginLeft: 10,
    marginTop: 15,
    color: colors.TEXT_SECONDARY,
  },
  tabSubViewStyle: {
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  /*  mobileText: {
       // width: '90%', 
        height: 50, 
      //  alignSelf: 'center',
    }, */

  container: {
    flex: 1,
    backgroundColor: colors.VIEW_BACKGROUND,
  },
  headerStyle: {
    height: 60,
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'rgba(140, 140, 140, 0.15)',
    shadowOpacity: 1,
  },
  escrowList: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 18,
    backgroundColor: colors.BACKGROUND_LIGHT_GRAY,
    borderRadius: 10,
    borderColor: '#BBBBBB',
    borderWidth: 0.25,
  },
  payableAmountText: {
    ...fonts.H4_Regular,
  },
  payableAmountValue: {
    ...fonts.H3_Bold,
  },
  invoiceListStyle: {
    width: '100%',
    marginVertical: 10,
  },
  footerBtnStyle: {
    width: '100%',
    position: 'relative',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.VIEW_BACKGROUND,
    width: '100%',
  },
  bottomTextView: {
    width: '80%',
    flexDirection: 'row',
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  paymentSelectField: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
  },
  paymentDetailsListStyle: {
    width: '100%',
    marginVertical: 15,
  },
  mobileText: {
    height: 50,
  },
  buttonStyle: {
    height: 50,
    width: '100%',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#BFBFBF',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  textFontStyles: {
    paddingLeft: 20,
    ...fonts.H3_Regular,
    color: 'black',
    backgroundColor: 'white',
  },
  dateButtonStyle: {
    width: '50%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default styles;