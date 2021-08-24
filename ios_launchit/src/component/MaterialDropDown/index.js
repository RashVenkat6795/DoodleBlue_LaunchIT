import React,{Component} from 'react'
import {
    View,
    Text,
    Modal,
    Dimensions,
    ActivityIndicator,
    SafeAreaView,Image,Platform,
    TouchableOpacity
} from 'react-native'
import { images } from '../../assets/constant'
import { themes } from '../../theme/constant'
import { ThemeColors } from 'react-navigation'
import { Dropdown } from 'react-native-material-dropdown';

const {width,height} = Dimensions.get('window')


export default class MaterialDropDown extends Component{
    constructor(props){
        super(props)
    }


    render(){
<<<<<<< HEAD
        let data = [{
            value: '1',
          }, {
            value: '2',
          }, {
            value: '3',
          }];
      console.log("dd", this.props.placeholder, this.props.data)
=======
   
      console.log(this.props, 'propsvalue');
>>>>>>> 2872b900b6a31489a20b05f951273bcaab766ae7
        return(
           <View style={{backgroundColor:'white',width:!!this.props.width ? this.props.width : "100%",alignSelf:'center',borderRightWidth:1,borderColor:'lightgrey'}}>
            
               <Dropdown 
                data={this.props.data}
<<<<<<< HEAD
=======
                value = {this.props.selectedValue === '' ? '' : this.props.value} 
>>>>>>> 2872b900b6a31489a20b05f951273bcaab766ae7
                useNativeDriver={true}  
                placeholder = {this.props.placeholder}
                disabled = {!this.props.disable}
                dropdownPosition={0}
                style = {{marginLeft:20,borderWidth:0}}
                baseColor = {'black'}
                disabledLineType='none'
                dropdownOffset={{top:10, left:0, }}
                inputContainerStyle={{ borderBottomColor: 'transparent'}}
<<<<<<< HEAD
                renderAccessory={()=> <View style={{width:20}}
                onChangeText={this.props.onChangeText}>
                <Image source={images.drop_down} 
=======
                renderAccessory={()=>
                <View style={{width:20},this.props.style}>
                 <Image source={this.props.edit ? images.drop_down : null} 
>>>>>>> 2872b900b6a31489a20b05f951273bcaab766ae7
                style={{ width: 20, height: 20,right:10,marginTop:5}} />
               </View>
                }
                onChangeText = {(value,index) => this.props.onChangeText(value,index)}
                />
              
               {(!!this.props.showClear && this.props.selectedValue != '') && <TouchableOpacity onPress = {this.props.onClickClear}  style = {{position:'absolute',top:16,right:45}}>
                    <Image source = {require('../../assets/images/cancel.png')}
                    style = {{height:11,width:11}}/>
                </TouchableOpacity>}
                
            </View>
        )
    }
}