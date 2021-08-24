import { Platform, StyleSheet, } from 'react-native';
import ScreenLayout from '../../../constants/layout'
import { fonts, colors } from "../../../theme/constant";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.VIEW_BACKGROUND,
    },
    releatedFolderStyle : {
        width: '100%',
        padding : 10,
        paddingBottom : 25,
        flexDirection:'row',
        justifyContent :'space-between',
        alignItems :'center',
        marginTop: 15,
        backgroundColor:'white',
    },
    drodownStyle : {
     height :20,
     width : 20,
     marginTop:10
    },
    textStyle: {
        width: '80%',
        //alignSelf: 'center',
        ...fonts.H3_Bold,
        backgroundColor:'white',
        color : "#333333",
    },
    textInputStyle : {
        width: '100%', alignSelf: 'center'
    },
    listHeaderStyle : {
        padding:15,flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',marginVertical:20,
        borderColor: colors.CARD_BORDER_COLOR, borderWidth: StyleSheet.hairlineWidth
    },
    feeDueTextStyle : {
        width:'60%',...fonts.H2_Regular,color:'#333333'
    },
    statusViewStyle : {
        flexDirection:'row',justifyContent:'space-between',alignItems:'center'
    },
    activeTextStyle : {
        marginLeft:5,...fonts.H2_Bold
    },
    itemStyle : {
       borderColor:'#F8F0F0',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:10,alignItems:'center'
    },
    imageItem : {
        width: 30, height:30
    },
    headerStyle : {
        justifyContent:'space-between',flexDirection:'row',margin:15
    },
    headerSubViewStyle : {
        flexDirection:'column',justifyContent:'space-between',alignItems:'center',borderWidth:1,borderRadius:5
    },
    paymentsText : {
        marginTop:5,marginBottom: 0,textAlign:'center',...fonts.H4_Bold
    },
    footerStyle : {
       backgroundColor:'white',
       width:'100%',
       paddingHorizontal:15,
       paddingVertical:10,
       marginVertical: 10
    },
    descStyle : {
        ...fonts.H3_Bold,color: colors.TEXT_BROWN_COLOR
    },
    descText : {
        ...fonts.H3_Regular,marginVertical:20,color:colors.TEXT_GREY,
    },
    headerStyle:{
        height: 60,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'rgba(140, 140, 140, 0.15)',
        shadowOpacity: 1,
        elevation:1
    },
    listStyle:{
        width: '100%', marginBottom: 10,backgroundColor:'white'
    },
    sectionFlatlistStyle:{
        width: '100%', marginBottom: 10, marginTop: 10,alignSelf:'center',borderTopLeftRadius:17,borderTopRightRadius:17,borderWidth:StyleSheet.hairlineWidth,borderColor:colors.CARD_BORDER_COLOR,backgroundColor:'white'
    },
    sectionListHeader:{
        borderTopLeftRadius:17,borderTopRightRadius:17,backgroundColor:colors.PRIMARY
    },
    sectionHeaderText:{
        padding:10,...fonts.H3_Bold,color:'white'
    },
    lineSepStyle:{
        height:1,backgroundColor:'#E3E3E3',width:'100%'
    },
    uploadInputStyle:{
        marginTop: "10%", marginTop: "4%", 
        width: '100%', 
        height: 74, 
        alignSelf: 'center',
    },
    workflowContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems : 'center',
        paddingHorizontal : 15,
        paddingVertical:10
       // borderRadius:5
    },
    workflowTitleText : {...fonts.H5_Bold,color:'black', width:'90%'},
    workflowText: {width:'90%',color:colors.TEXT_BROWN_COLOR},
    
});


export default styles;