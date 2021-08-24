import { Platform, StyleSheet, } from 'react-native';
import ScreenLayout from '../../../constants/layout'
import { fonts, colors } from "../../../theme/constant";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.VIEW_BACKGROUND
    },
    headerStyle:{
        height: 60,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'rgba(140, 140, 140, 0.15)',
        shadowOpacity: 1,
    },
    escrowList: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 18,
        backgroundColor: colors.BACKGROUND_LIGHT_GRAY,
        borderRadius: 10,
        borderColor:'#BBBBBB',borderWidth:0.25
    },
    payableAmountText : {
        ...fonts.H4_Regular
    },
    payableAmountValue : {
        ...fonts.H3_Bold
    },
    invoiceListStyle:{
        flex:1,
        width: '100%',
        marginVertical: 10,
    },
    footerBtnStyle:{
        width: '100%', position:'relative'
    },
    bottomView:{
      //  position:'absolute',
        paddingTop:20,
        bottom: 0,
        backgroundColor: colors.VIEW_BACKGROUND,
        width:'100%'
    },
    bottomTextView:{
        width:'80%',
        flexDirection: 'row',
        marginBottom: '10%',
        alignSelf:'center',
        justifyContent:'space-between'
    },
    paymentSelectField:{
        width: '100%', alignSelf: 'center', marginTop: 10
    },
    paymentDetailsListStyle:{
        width: '100%', marginVertical: 15
    }
});


export default styles;