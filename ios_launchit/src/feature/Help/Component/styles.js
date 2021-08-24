import { Platform, StyleSheet, } from 'react-native';
import ScreenLayout from '../../../constants/layout'
import { fonts, colors } from "../../../theme/constant";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    headerText : {
       padding:10,marginLeft:10,...fonts.H4_Bold 
    }
});


export default styles;