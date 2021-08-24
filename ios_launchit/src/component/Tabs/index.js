import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,Image, Platform
} from "react-native";
import { images } from '../../assets/constant';
import { colors, fonts } from '../../theme/constant'


function Lablename(name)
{
    if(name =="Services")
    {
        return "My Service"
    }
    else if(name =="Apply")
    {
        return "Apply"
    }
    else if(name =="PayBill")
    {
        return "Pay Fees"
    }
    else if(name =="Escrow")
    {
        return "Escrow AC"
    }
    else if(name =="Settings")
    {
        return "Settings"
    }
    else{
        return name;
    }
}

function GetTabImages(name,isFocused){
    if(name =="Services")
    {
      if(isFocused){
        return images.services_active
      }else{
        return images.services_inactive

      }
        
  }
    else if(name =="Apply")
    {
      if(isFocused){
        return images.Apply_active
      }else{
        return images.Apply_inactive

      }
    }
    else if(name =="PayBill")
    {
      if(isFocused){
        return images.fee_active
      }else{
        return images.fee_inactve
      }
    }
    else if(name =="Escrow")
    {
      if(isFocused){
        return images.Account_active
      } else {
        return images.Account_inactive
      }
    }
    else if(name =="Settings")
    {
      if(isFocused){
        return images.settings_inactive
      } else {
        return images.settings_inactive
      }
        
    }
    else{
        return null;
    }

}



function TabsDesign({ state, descriptors, navigation}) {
    return (
        <View style={{ flexDirection: 'row'}}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault
              : true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
               route.name == "Settings" ? navigation.openDrawer() : navigation.navigate(route.name)
            }
          };
  
          
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}



              
              style={{flex:1,paddingTop:Platform.OS == 'android' ? 5 : 5,paddingBottom:Platform.OS == 'android' ? 5 : 5,backgroundColor:'white', justifyContent:'center',alignItems:'center',paddingHorizontal:10,elevation:20}}
            >
            <View style={{}}>
            <Image 
                source = {GetTabImages(label,isFocused)}
                style = {{width:24,height:24
                
                }}
                />
            </View >
              <Text style={{ fontSize:10,color: isFocused ? colors.PRIMARY : colors.APP_GREY ,marginTop:7,textAlign:'center'}}>
                {Lablename(label)}
              </Text>
            </TouchableOpacity>

          );
        })}
      </View>
    );
  }
  
  function TabIcon(props) {





   
    return <TabsDesign {...props}  />;
  }
  const styles = StyleSheet.create({
  
  })

export default TabIcon;