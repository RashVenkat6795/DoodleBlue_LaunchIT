import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text
} from "react-native";
import { colors, fonts } from '../../theme/constant'

class IndicatorBar extends Component {

    constructor(props){
        super(props);

    }

    renderCircle(circleColor){
        let outerColor = circleColor == 'blue' ? { backgroundColor: 'rgba(30, 82, 151, 0.16)'} : circleColor == 'green' ? { backgroundColor: 'rgba(39, 174, 96, 0.16)'} : { backgroundColor: 'rgba(214, 214, 214,0.16)' }

        let innerColor = circleColor == 'blue' ? { backgroundColor: colors.PRIMARY } : circleColor == 'green' ? { backgroundColor: colors.TEXT_GREEN_COLOR } : { backgroundColor: colors.TEXT_CUSTOM_GRAY }

        return(
            <View style={[Styles.circleOuterContainer, outerColor]}>
                <View style={[Styles.circleInnerContainer,innerColor]}/>
            </View>
        )
    }
    render() {
        const {lineColor, leftColor, rightColor} = this.props
        let lineColour = lineColor == 'blue' ? { backgroundColor: colors.PRIMARY } : {backgroundColor: '#D6D6D6'},

        leftTextColor = this.props.leftColor == 'blue' ?  colors.PRIMARY : leftColor == 'green' ?  colors.TEXT_GREEN_COLOR : colors.TEXT_CUSTOM_GRAY,

        rightTextColor = this.props.rightColor == 'blue' ? colors.PRIMARY : leftColor == 'green' ? colors.TEXT_GREEN_COLOR :  colors.TEXT_CUSTOM_GRAY

        return (
            <View>
                <View style={Styles.topContainer}>
                    {this.renderCircle(leftColor)}
                    <View style={[Styles.lineStyle,lineColour]}/>
                    {this.renderCircle(rightColor)}
                </View>
                <View style={Styles.secondViewStyle}>
                    <Text style={{ width: 100, color: leftTextColor, textAlign:'center', alignSelf:'flex-start'}}>Personal Information</Text>
                    <Text style={{ width: 100, color:rightTextColor, textAlign:'center', alignSelf:'flex-end'}}>Address Information</Text>
                </View>
            </View>
        )
    }


}

IndicatorBar.defaultProps = {
    style: {},
    header: null,
    subHeader: null,

}

const Styles = StyleSheet.create({
    topContainer:{
        width:'80%', alignSelf:'center', flexDirection:'row', marginTop: 40
    },
    circleOuterContainer:{
        width: 20, height: 20, borderRadius: 10, alignItems:'center', justifyContent:'center'
    },
    circleInnerContainer:{
        width: 12, height: 12, borderRadius: 6
    },
    topLeftContainer:{
        backgroundColor:'rgba(30, 82, 151, 0.16)',
    },
    lineStyle:{
        width:'87%', height: 1, alignSelf:'center'
    },
    topRightConatiner:{
        backgroundColor:colors.TEXT_CUSTOM_GRAY, width: 12, height: 12, borderRadius: 6, alignSelf:'center'
    },
    secondViewStyle:{
        width:'100%', alignSelf:'center', flexDirection:'row', justifyContent:'space-between', marginTop: 10
    },
    topRightConatiner2:{
        backgroundColor:'rgba(30, 82, 151, 0.16)', width: 20, height: 20, borderRadius: 10, alignItems:'center', justifyContent:'center'
    },
})

export default IndicatorBar;
