
import { Platform, StyleSheet, } from 'react-native';
import ScreenLayout from '../../../constants/layout'
import { fonts, colors } from "../../../theme/constant";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 40,
        backgroundColor: 'white'
    },
    logoImage: {
        // width: ScreenLayout.window.height / 4.5,
        width: ScreenLayout.window.width / 1.5,
        height : 78,
        marginTop: "2%",
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    mobileText: {
        width: '100%', 
        height: 50, 
        alignSelf: 'center',
    },
    passwordText: {
        marginTop: 11, 
        width: '100%', 
        height: 50, 
        alignSelf: 'center',
    },
    forgotPassButton: {
        alignSelf: 'center',
        // marginVertical:20,
        marginVertical: 20,
        marginRight: 25
    },
    forgotPassText: {
        ...fonts.H4_Regular,
        color : colors.PRIMARY
    },
    loginButton: {
       // marginTop: "10%",
        // height: 50,
        width: '75%',
        borderRadius: 30,
        bottom:10,
        alignSelf: 'center',
    },
    registerButton: {
        alignSelf: 'center',
        marginTop: "4%",
    },
    registerList: {
        marginTop: 30,
        width: '100%',
    },
    portalSearchButton : {
        backgroundColor:colors.PRIMARY,borderRadius:25,height:50,width:'75%',alignSelf:'center',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:20,marginTop:20
    },
    publicPortalText : {
        ...fonts.H2_Regular,color:'white',width:'70%', fontSize: 16, fontWeight:'500'
    },
    inputStyle:{
        width: '90%',
        flexDirection:'row',
        shadowOffset: { width: 0, height: 1.5 },
        shadowColor: 'rgb(116, 116, 116)',
		shadowOpacity: 0.25,
        elevation: 1,
    },
    loginStack : {
        width:'80%',alignSelf:'center'
    },
    loginFeatures : {
        width: '75%', marginBottom: 10, marginTop:0,alignSelf:'center',borderWidth:StyleSheet.hairlineWidth,borderColor:'#BFBFBF',borderRadius:17
    },
    horizontalView : {
        flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'85%',alignSelf:'center',marginVertical:5
    },
    loginFeaturesItem : {
        padding:10,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'
    },
    dotView : {
        height:8,width:8,backgroundColor:'#C4C4C4',borderRadius:4
    },
    featuresText : {
        marginLeft:10,color:'#616161'
    },
    loginFeatureHeader : {
        flexDirection:'row',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#F6F6F6',padding:10,borderTopLeftRadius:17,borderTopRightRadius:17
    },
    leftImage: {
        height: 25,
        width: 25,
        marginLeft: 8,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    resendCodeTextStyle:{
        fontWeight:'500',
        fontSize: 14,
        color: colors.PRIMARY,
        textDecorationLine:'underline',
        textDecorationColor:colors.PRIMARY
    },
    textinputStyle:{
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#cecece",
        width: 50,
        height: 50,
        marginHorizontal: 10,
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 2,
        shadowOffset: { width: 0, height: 1 }, shadowColor: 'grey', 
        shadowOpacity: 0.6, elevation: 1,
    },
    otpViewStyle:{
        flexDirection:'row', 
        borderRadius: 5, 
        borderWidth: StyleSheet.hairlineWidth, 
        height:55,
        borderColor: '#BFBFBF', 
        // shadowOffset: { width: 1, height: 2 }, shadowColor: 'lightgrey', 
        // shadowOpacity: 0.1, elevation: 1, 
        padding: 5, 
        backgroundColor:'white',
         marginTop: '10%',
        alignItems:'center'
    },
    resendCodeViewStyle:{
        marginTop: 30,
        alignSelf:'center'
    },
    textFontStyles : {
        paddingLeft:20,...fonts.H3_Regular,color:'black',backgroundColor:'white',
    }

});


export default styles;