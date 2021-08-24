import React, { Component } from "react";
import { SafeAreaView, View, ScrollView, Image, TouchableOpacity, Text, FlatList } from "react-native";
import FooterButton from '../../../component/view/footerButton'
import RegisterInputField from '../../../component/inputField/registerInputField'
import TwoColumnInputField from '../../../component/view/TwoColumnInputField'
import styles from './styles'
import {images} from '../../../assets/constant'
import { fonts } from "../../../theme/constant";
import DropDown from '../../../component/DropDown'

export default class EmergencyInfo extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: [
                { "isOpen": true, "emergencyData": [ {"text": "Alternate Phone"}, {"text": "Emergency Contact"}, {"text": "Primary Phone"}]
                },
            ]
           
           
        };
    }

    nextclick(){
        var data={title:"Emergency Contact Information",cid:1}
        this.props.changehaeder( data);
        this.props.next()
    }

    // onArrowPress(index){
    //     let data = this.state.data[index]
    //     if(data.isOpen)
    //         this.setState({ data.: false })
    //     else 
    //         this.setState({ isOpen: true })
    // }

    renderItem = ({ item, index }) => {
        return(
            <RegisterInputField
                onTextChange={(text) => {
                    this.setState({
                        // data: 
                    })
                }}
                style = {{ width:'100%', height: 50, alignSelf: 'center', backgroundColor: 'white' }}
                hint = {item.text}
            />
        )
    }

    render() {
        return (
            <View style = {styles.container}>
                <ScrollView>
                    {/* <TwoColumnInputField
                    data = {this.state.emergencyData}
                    /> */}
                    {this.state.data.map((item,index) => {
                        let open = item.isOpen 
                        return(
                            <View>
                                <TouchableOpacity style={{width:'100%', flexDirection:'row', padding: 10, justifyContent:'space-between'}} onPress={() => {}}>
                                    <Text style={{...fonts.H3_Bold,marginLeft:21}}>{index + 1}st Person Details</Text>
                                    <Image source={item.isOpen ? images['chevronup'] : images['chevrondown']} style={{width: 25, height: 25}}/>
                                </TouchableOpacity>
                                {item.isOpen ? <FlatList
                                    style={styles.listStyle}
                                    showsHorizontalScrollIndicator={false}
                                    data={item.emergencyData}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={this.renderItem}
                                /> : null}
                            </View>
                        )
                    })}

             <RegisterInputField
                onTextChange={(text) => {
                    this.setState({
                        // data: 
                    })
                }}
                style = {{ width:'100%', height: 50, alignSelf: 'center', backgroundColor: 'white' }}
                hint = {"2nd Person Details"}
                isDropdown = {true}
                
            />  
            <RegisterInputField
                onTextChange={(text) => {
                    this.setState({
                        // data: 
                    })
                }}
                style = {{ width:'100%', height: 50, alignSelf: 'center', backgroundColor: 'white' }}
                hint = {"3rd Person Details"}
                isDropdown = {true}
                
            />  
                </ScrollView>
                <View style={[styles.footerBtnViewStyle,{alignItems:'center'}]}>
                        <FooterButton
                            style = {[styles.buttonStyle,{position:'relative'}]}
                            text = 'Next'
                            onPress = {()=> { this.nextclick() }}
                        />
                    </View>
            </View>
        )
    }   

}
