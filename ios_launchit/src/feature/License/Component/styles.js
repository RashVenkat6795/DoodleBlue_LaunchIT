import { Platform, StyleSheet, } from 'react-native';
import ScreenLayout from '../../../constants/layout'
import { fonts, colors } from "../../../theme/constant";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    textStyle: {
        width: '90%',
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 10,
        ...fonts.H4_Regular,
        color : "#AC9F9F",
    },
    textInputStyle : {
        width: '90%', alignSelf: 'center', marginTop: 5
    },
    listHeaderStyle : {
        marginVertical:20,flexDirection:'row',justifyContent:'space-between'
    },
    feeDueTextStyle : {
        width:'60%',...fonts.H3_Bold,color:'#333333'
    },
    statusViewStyle : {
        flexDirection:'row',justifyContent:'space-between'
    },
    activeTextStyle : {
        marginLeft:10,...fonts.H3_Bold,color:'#1B8646'
    },
    itemStyle : {
       borderColor:'#F8F0F0',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:20,alignItems:'center'
    },
    imageItem : {
        width: 25, height:25
    },
    headerStyle : {
        justifyContent:'space-between',flexDirection:'row',marginBottom:15
    },
    headerSubViewStyle : {
        flexDirection:'column',justifyContent:'space-between',alignItems:'center',borderWidth:1,paddingHorizontal:5,borderRadius:10
    },
    paymentsText : {
        marginVertical:5,textAlign:'center',...fonts.H4_Regular
    },
    headerStyle:{
        height: 60,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'rgba(140, 140, 140, 0.15)',
        shadowOpacity: 1,
        elevation:1
    }
});


export default styles;