import React, { Component } from "react";
import { Text, View, Image, StyleSheet} from "react-native";
import { images } from '../../assets/constant';
import { colors } from "../../theme/constant";


export default class ApplyStatus extends Component {
    constructor(props){
      super(props);
      this.state={
        arr:[
            "Select type",
            "Input Information",
            "Attach doc",
            "Agree terms",
            "Option to pay",
            "Summary"
        ]       
      }
  }

    render() {
        let {CurrentStatusID} = this.props;
        return (
            <View style={styles.container}>
            {this.state.arr.map((element,index) => {
                return (
                    <View style={CurrentStatusID >= index ? styles.SelCompletedStatus : styles.SelCompletedStatus}>
                        { CurrentStatusID != 0 && CurrentStatusID == index?
                            <View style={styles.viewStyle1}>
                                <Image 
                                    source = {CurrentStatusID >= index ? images.SelectedDot : images.unselected_dot}
                                    style = {CurrentStatusID >= index ? {width:14,height:14} : {width:20,height:20}}
                                />
                            </View>
                        : CurrentStatusID == 0 ?
                            <View style={styles.viewStyle1}>
                                <Image 
                                    source = {CurrentStatusID >= index ? images.SelectedDot : images.unselected_dot}
                                    style = {CurrentStatusID >= index ? {width:14,height:14} : {width:20,height:20}}
                                />
                            </View>
                        : CurrentStatusID >= index ? 
                            <View style={[styles.viewStyle1,{backgroundColor:"rgba(39, 174, 96, 0.19)"}]}>
                                <Image 
                                    source = {CurrentStatusID >= index ? images.completedDot : images.unselected_dot}
                                    style = {CurrentStatusID >= index ? {width:14,height:14} : {width:20,height:20}}
                                />
                            </View>
                        : <Image 
                            source = {CurrentStatusID >= index ? images.SelectedDot : images.unselected_dot}
                            style = {CurrentStatusID >= index ? {width:14,height:14} : {width:20,height:20}}
                          />
                        }
                        
                        { (CurrentStatusID != 0 && CurrentStatusID == index || CurrentStatusID >= index )?
                            <Text style={styles.TextStyle} >{element}</Text>
                        : 
                            <Text style={styles.DisableTextStyle} >{element}</Text>
                        }
                    </View>
                )
            })}
            <View style={styles.lineStyle}/>
        </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width:"100%",
        height:85,
        paddingHorizontal:"3%",
        position:"relative",
        backgroundColor: colors.VIEW_BACKGROUND,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical: 10
    },
    CompletedStatus:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:6
    },
    SelCompletedStatus:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:6
    },
    TextStyle:{
        fontSize:8,
        marginTop:11,
        marginBottom:6,
        color: colors.TEXT_PRIMARY,
        // width:'70%'
    },
    DisableTextStyle:{
        fontSize:10,
        marginTop:11,
        marginBottom:6,
        color: colors.TEXT_DISABLE
    },
    viewStyle1:{
        width:20,height:20,borderRadius:10,
        backgroundColor: colors.APPLY_VIEWBAR_COLOR,
        justifyContent:"center",alignItems:"center"
    },
    lineStyle:{
        width:"90%",height:1,position:"absolute",
        backgroundColor: colors.APPLY_VIEWBAR_COLOR,
        zIndex:-1,top:"50%",left:"10%"
    }
})