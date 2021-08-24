import { Platform, StyleSheet, } from 'react-native';
import ScreenLayout from '../../../constants/layout'
import { fonts, colors } from "../../../theme/constant";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.VIEW_BACKGROUND
    },
    headerStyle: {       
        height: 60,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'rgba(140, 140, 140, 0.15)',
        shadowOpacity: 1,
    },
    inspectionViewContainer:{
        flexDirection:'row',
        padding: 10,
        marginTop : 15,
        alignSelf:'center',
    },
    buttonStyle:{
        width: '50%',
    },
    inspectionListViewStyle: {
        width: '100%', marginTop: 6, marginBottom: 6
    },
    scheduleListViewStyle:{
        width: '100%', marginTop: 2, marginBottom: 2
    }
});


export default styles;