import React ,{Component} from 'react';
import { StyleSheet, View,TextInput,Text} from 'react-native';
TextInput.defaultProps.selectionColor = '#1a73e8';
import {colors} from '../../theme/constant'

export default class GmailInput extends Component{


    constructor(props){
        super(props);
        this.state =  {
            isFocused: false,
            height:30,
        };
    }

    handleFocus = () => {
        this.setState({ isFocused: true });




    };
    handleBlur = () => {

        //for hiding the text if it is empty
        if(this.props.hideLabel){
            this.setState({ isFocused: true });

        }else{
            this.setState({ isFocused: false });
        }

    };


    render() {
        const { label, ...props } = this.props;
        const { isFocused } = this.state;
        const labelStyle = {
            position: 'absolute',
            left: 0,
            top: !isFocused ? 35 :10,
            fontSize: !isFocused ? 12 : 10,
            color: !isFocused ? '#aaa' : colors.PRIMARY,
            marginLeft:30,
            marginBottom:!isFocused ? 20 :0,

            zIndex:!isFocused ? 0:9,
            paddingLeft:!isFocused ? 0: 5,
            paddingRight:!isFocused ? 0: 5,
            backgroundColor:!isFocused? '#FFF' : '#FFF',

        };

        const inputContainer= {
            marginTop:20,
            marginLeft:10,
            marginRight:10,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderBottomWidth:2,
            borderRadius:4,
            height: 60,
            width:"100%",
            borderColor:!isFocused ? '#aaa': colors.PRIMARY,
            borderTopWidth:!isFocused ? 2:2,
            zIndex: 1,
            overflow: 'visible',
        };

        const parent={
            height:80,
            zIndex:2,
        };


        return (
            <View style={parent}>
                <Text style={labelStyle}>{label}</Text>
                <View style={inputContainer}>
                    <TextInput
                        {...props}
                        style={{height: 50, fontSize: 20, color: '#000', marginLeft: 20 ,marginBottom: 10}}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
            </View>
    );
    }
}

const styles = StyleSheet.create({

    bottom_style:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        marginTop: 400,
    },
    hrstyle:{
        textAlign: 'left',

    }




});






