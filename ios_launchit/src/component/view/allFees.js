import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import { images } from '../../assets/constant';
import { TouchableOpacity } from "react-native-gesture-handler";
import PrimaryButton from '../Button/primaryButton'

class AllFees extends Component {


    state = {
        isSelectAll: false
    }

    render() {
        const {selectedImage, deselectedImage, showPayButton} = this.props
        console.warn()
        return (
            <View style={styles.container}>
                <View style={{width:showPayButton ? '45%' : '90%', padding: 10 }}>
                    <TouchableOpacity style={styles.touchableStyle}
                        onPress={()=> {
                            this.setState({
                                isSelectAll: !this.state.isSelectAll
                            },() => {
                                this.props.onSelectAll(this.state.isSelectAll)
                            })
                        }}
                    >
                        <Text style = {styles.label}>All Fees</Text>
                        <Image style = {styles.image} source = {images[this.state.isSelectAll ? selectedImage: deselectedImage]}/>
                    </TouchableOpacity>
                </View>
                {showPayButton ? <PrimaryButton
                    isRounded = {true}
                    text = "Pay Selected"
                    style = {styles.payButton}
                    onPress = {() =>  this.props.onPaySelect()}
                /> : false}
            </View>
        )
    }


}

AllFees.defaultProps = {
    style: {},
    selectedImage: "checkbox",
    deselectedImage: "unselected_checkbox",

}

const styles = StyleSheet.create({
    container: { width:'100%', flexDirection:'row', justifyContent:'space-between', padding: 10 },
    image: { height: 18, width: 18 },
    label: { ...fonts.H3_Bold, width:'80%'},
    payButton: { width:'45%' },
    touchableStyle:{ flexDirection:'row',justifyContent:'space-between',alignItems:'center', justifyContent:'center' }
})

export default AllFees;
