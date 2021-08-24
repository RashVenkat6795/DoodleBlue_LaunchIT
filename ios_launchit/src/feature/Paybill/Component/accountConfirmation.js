import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    Image,
    Text,
} from "react-native";
import PrimaryButton from '../../../component/Button/primaryButton';
import styles from "./styles";
import PaymentPopup from '../../../component/view/paymentPopup'
import FooterButton from '../../../component/view/footerButton';
import ConfirmationView from '../../../component/view/confirmationView'
import HeaderLeft from '../../../component/Header/MainHeaderLeft'

export default class AccountConfirmation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            success: true
        };

        props.navigation.setOptions({title: 'Application Confirmation',  headerStyle: styles.headerStyle,headerTitleStyle : {fontWeight:'bold'},  headerLeft: props => <HeaderLeft {...props} back={true}  backhandler={()=>this.backhandler()}/> })

    }

    backhandler = () => {
        this.props.navigation.push('Services')
    }

    render() {
        return (
            <SafeAreaView style = {[styles.container, this.props.style, Styles.viewStyle]}>
                <ConfirmationView
                    style = {{width: '80%', alignSelf: 'center'}}
                    title = {this.state.success ? "Payment Successful" : "Payment Unuccessful"}
                    subTitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    image = {this.state.success ? "success":"failure" }
                    imageSize = {100}
                />

                <FooterButton
                    text = {this.state.success ? 'Download PDF' : 'Retry'}
                    onPress = {()=> {
                        
                    }}
                />

            </SafeAreaView>
        )
    }


}

const Styles = {
    viewStyle:{
        justifyContent: 'center', backgroundColor:'white'
    }
}