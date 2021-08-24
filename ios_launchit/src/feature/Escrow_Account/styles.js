import { Platform, StyleSheet, } from 'react-native';
import { fonts } from '../../theme/constant';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    submitButton: {
        //position: 'absolute',
        bottom: 20,
        width: '75%',
        alignSelf: 'center',
        marginTop: 80,
    },
    headerText: {
        ...fonts.H3_Bold,
        padding:15,
        marginLeft:15,
        color : '#333333'
    },
});


export default styles;