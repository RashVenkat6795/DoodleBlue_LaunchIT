import React from "react";
import {  
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  import Animated from 'react-native-reanimated';
  import {
    Text, 
    TouchableOpacity,Image,View,StyleSheet, Alert
    
} from "react-native";
import { images } from '../../assets/constant';
import { colors, fonts } from '../../theme/constant';
var arr=[
//   {
//   "label":"Search",
//   "Image":images.searchBlue
// },{
//   "label":"Change Password",
//   "Image":images.lock
// },
{
	"label":"My Profile",
	"Image":images.profileNew
},
{
  "label":"Report an issue",
  "Image":images.fileTextNew
},{
  "label":"About",
  "Image":images.globalNew
},{
  "label":"Help",
  "Image":images.helpNew
},
// {
//   "label":"Logout",
//   "Image":images.logoutNew
// },






];


function CustomDrawerContent({ progress, ...rest }) {
 
    const translateX = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [-100, 0],
    });
   
    const MainPage = (e) => { // use consts or let
     if(e.label == "Search"){
      rest.navigation.navigate("PublicSearch")
     }
     else if(e.label == "About"){
      rest.navigation.navigate("About")
     }else if(e.label == "Help"){
      rest.navigation.navigate("Help")
    }else if(e.label == "Report an issue"){
      rest.navigation.navigate("Report")
    }else if(e.label == "Change Password"){
      rest.navigation.navigate("RecoverPassword")

    }else if(e.label == "My Profile"){
      rest.navigation.navigate("Profile")

    }else if(e.label == "Logout"){
      
      rest.navigation.navigate("Login")

    }
    }
    
    return (
			<Animated.View style={{ transform: [{ translateX }] }}>
				<View style={styles.Row}>
					<TouchableOpacity>
						<Image style = {{width: 90, height: 90,marginRight:20}} source = {images.Profile}/>
					</TouchableOpacity>
					<View style={styles.column}>
						{/* <View style={{marginTop:14}}> */}
							<Text style={styles.profileName}>Arun Kumar</Text>
							{/* </View> */}
							{/* <View style={{marginTop:7}}>
							<Text style={styles.ViewProfileText}>View profile</Text>
							</View> */}
					</View>
				</View>
				{arr.map((element,index) => {
					return (
						<TouchableOpacity onPress={()=>MainPage(element)} key={index} style={styles.MenuOption}>
							<Image style = {{width: 25, height: 25}} source = {element.Image}/>
							<View style={{marginLeft:20}}>
								<Text style={{...fonts.H3_Regular}}>{element.label}</Text>
							</View>
						</TouchableOpacity>
					)
				})}
			</Animated.View>
    );
  }

  const styles = StyleSheet.create({
    Row: {
      ...fonts.BODY,
        backgroundColor: colors.PRIMARY,
        flexDirection:'row',
        alignItems : 'center',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:10,
        paddingRight:10,
    },
    column:{
      flexDirection:'column',
      
    },
    profileName:{
      color:'#FFF',
      ...fonts.H2_Bold,
      color : 'white'
    },
    ViewProfileText:{
      ...fonts.BODY,
      color:'#FFF',
      fontSize:16,
    },
    MenuOption:{
      flexDirection:'row',
      paddingLeft:18,
      paddingBottom:20,
      marginTop:20,
      alignItems:'center',
      borderBottomColor: colors.VIEW_BACKGROUND,
      borderBottomWidth:1
    }
})
  export default CustomDrawerContent;