import { Platform, StyleSheet, } from 'react-native';
import { fonts, colors } from "../../../theme/constant";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.VIEW_BACKGROUND
    },

    escrowList: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 18,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth:1,borderColor:'grey'
    },
    permitlist:{
        width: '100%',
        // alignSelf: 'center',
        marginTop: 18,
        backgroundColor: 'white',
        borderRadius: 3,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:colors.CARD_BORDER_COLOR
    },
    permitsummary:{
        width: '100%',
        alignSelf: 'center',
        marginTop: 18,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        borderWidth:1,borderColor:'#E4E0DD'
    },
    DropDownView:{
        marginBottom:15,
        flexDirection:'column'
    },
    DropDownLabel:{
        width:'100%',
        backgroundColor:'white',
        borderColor: colors.CARD_BORDER_COLOR,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 10,
    },
    buttonStyle:{
        width: '100%'
    },
    headerStyle:{
        height: 60,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'rgba(140, 140, 140, 0.15)',
        shadowOpacity: 1,
        elevation:1
    },
    searchViewStyle:{
        width: '100%', 
        alignSelf: 'center',
        marginTop:30, 
        backgroundColor:'white',
        borderColor: colors.CARD_BORDER_COLOR, 
        borderWidth: StyleSheet.hairlineWidth
    },
    listStyle:{
        // marginTop: 30,
        width: '100%',
        flex :1,
        paddingBottom: 50,
    },
    footerBtnViewStyle:{
        marginTop: 15
    },
    termsHeaderTextStyle:{
        ...fonts.H3_Regular,
    },
    termsDescStyle:{
        ...fonts.H4_Regular,
        marginTop: 20
    },
    termsTextViewStyle:{
        width:'100%',
        backgroundColor:'white',
        padding: 15
    }
});


export default styles;