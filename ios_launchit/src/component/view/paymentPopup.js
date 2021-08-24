import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet, Modal, SafeAreaView, Image} from 'react-native';
import { fonts } from '../../theme/constant';
import PrimaryButton from '../Button/primaryButton'

class PaymentPopUp extends Component {

   render() {
      const {isVisible} = this.props
      return (
         <Modal
            animationType={'fade'}
            transparent={true}
            onRequestClose={() => false}
            visible={isVisible}
         >
            <SafeAreaView style={styles.container}>
               <View style = {styles.mainView}>
                  <View style={styles.headerView}>
                     <TouchableOpacity style = {styles.closeContainer} onPress = {this.props.onDismiss}>
                        <Image
                           source = {require('../../assets/images/close.png')}
                           style = {{width: '65%', height: '65%'}}
                        />
                     </TouchableOpacity>
                     <Text style = {styles.headerText}>Choose your Payment method</Text>
                  </View>
                  
                    <PrimaryButton
                        isRounded = {true}
                        text = "Escrow Payment"
                        height = {40}
                        style = {{width: '90%', marginTop: 24, alignSelf: 'center'}}
                        onPress = {this.props.onPressEscrow}
                    />
                    <PrimaryButton     
                        isRounded = {true}
                        text = "Credit card"
                        height = {40}
                        style = {{width: '90%', marginTop: 10, alignSelf: 'center'}}
                        onPress = {this.props.onPressCredit}
                    />
                    {/* <View style = {{width: '100%', height: 2, backgroundColor: 'lightgray', marginTop: 24}}/>
                    <View style = {{flexDirection: 'row', width: '90%', alignSelf: 'center'}}>
                        <Text style = {{marginTop: 20, marginBottom: 20, ...fonts.SUB_HEADING}}>Total Amount Payale</Text>
                        <Text style = {{position: 'absolute', right: 0, alignSelf: 'center', ...fonts.BODY}}>$50.00</Text>
                    </View> */}
               </View>

            </SafeAreaView>

         </Modal>
      )
   }
}


PaymentPopUp.defaultProps = {
   animating: true,
   isVisible: false
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: 'rgba(0, 0, 0, 0.2)',
   },
   mainView: {
      //  width: '90%',
      //  alignSelf: 'center',
      flex: 1,
       backgroundColor: 'white',
   },
   headerView:{
      
   },
   headerText: {
       marginLeft: 22, 
       marginRight: 22, 
       ...fonts.Title,
       marginTop: 40,
    },
    closeContainer: {
       position: 'absolute', 
       right: 12, 
       top: 15, 
       height: 25, 
       width: 25, 
      //  backgroundColor: 'red',
      }
})

export default PaymentPopUp