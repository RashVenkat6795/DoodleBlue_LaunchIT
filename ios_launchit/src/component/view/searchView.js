import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text
} from "react-native";
import { colors, fonts } from '../../theme/constant'

class SearchView extends Component {

    render() {
        const {header, subHeader, hint, onChange} = this.props
        return (
            <View 
                style = {[styles.container, this.props.style]}>
                    <Text style = {styles.headerText}>{header}</Text>
                    <View style = {styles.textInputView}>
                        <TextInput 
                            style = {styles.textInput} 
                            placeholder = {hint} 
                            placeholderTextColor = "#666666"
                            keyboardType={hint == 'FolderRSN/Rowid' ? 'number-pad':'default'}
                            onChangeText={(text) => onChange(text)}
                        />
                    </View>
                    <Text style = {styles.subHeaderText}>{subHeader}</Text>
            </View>
        )
    }


}

SearchView.defaultProps = {
    style: {},
    header: null,
    subHeader: null,
    hint: null

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    headerText: {
        ...fonts.H3_Regular,
        marginLeft: 15,
        marginRight: 0,
        alignSelf: 'flex-start',
        color: "#1E5297"
    },
    subHeaderText: {
        ...fonts.H5_Regular,
        marginLeft: 15,
        marginRight: 0,
        marginTop: 15,
        alignSelf: 'flex-start',
        color: colors.TEXT_LIGHT_GRAY
    },
    textInputView: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 15,
        height: 50,
        width: '100%',
        borderColor: colors.APP_LIGHT_GRAY,
        backgroundColor:'white',
        justifyContent:'center',
        borderWidth: 0.5,
    },
    textInput: {
       // position: 'absolute',
        backgroundColor:'white',
        //left: 10,
        paddingLeft : 15,
        top: 0,
        bottom: 0,
        right: 0
    }
    

})

export default SearchView;
