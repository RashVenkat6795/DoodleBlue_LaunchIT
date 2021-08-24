import React, { Component } from "react";
import ScreenName from './ScreenName'
import TabDesign from '../component/Tabs'
import HeaderLeft from '../component/Header/MainHeaderLeft'
import HeaderRight from '../component/Header/MainRight'
import CustomDrawerContent from '../component/DrawerDesign'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AsyncStorage } from "react-native";
import {colors} from '../theme/constant'
import StatusBar from '../constants/statusbar';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function HeaderLeftoption(navigation,title){
  return({
    headerLeft: props => <HeaderLeft {...props} back={true} title = {title ? title : 'Back'} navigation={navigation}/>,
    headerStyle: {       
		height: 60,
      shadowColor: 'transparent', elevation:10      
    }
  })
  
}

function StackScreen() {
  return (
    <Stack.Navigator screenOptions = {{headerTitleAlign:'center'}}>     
      <Stack.Screen  name="Services" 
       options={({ navigation, route }) => ({         
         headerTitle:"",
         headerTitleStyle: { alignSelf: 'center' },
          headerLeft: props => <HeaderLeft {...props}/>,
          headerRight: props => <HeaderRight {...props} navigation = {navigation}/>,
          headerStyle: {       
			      height: 60,
            shadowOffset: { width: 0, height: 2 },
            shadowColor: 'rgba(140, 140, 140, 0.15)',
            shadowOpacity: 1,      
          },
          })} 
          component={ScreenName.Services}/>
         
        <Stack.Screen name="Inspection" component={ScreenName.Inspection} options={({ navigation }) => HeaderLeftoption(navigation)}/>
        <Stack.Screen name="ScheduleInspection" component={ScreenName.ScheduleInspections} options={({ navigation }) => HeaderLeftoption(navigation)}/>
        <Stack.Screen name="InspectionDetails" component={ScreenName.InspectionDetails} options={({ navigation }) => HeaderLeftoption(navigation)}/>
        <Stack.Screen name="Permits" options={({ navigation }) => HeaderLeftoption(navigation,"Home")} component={ScreenName.Permits} />
        <Stack.Screen name="PlumbingPermit" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.PlumbingPermit} />
        <Stack.Screen name="Details" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.Details} />
        <Stack.Screen name="AssociatedPeople" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.AssociatedPeople} />
        <Stack.Screen name="PropertyDetails" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.PropertyDetails} />
        <Stack.Screen name="WorkFlow" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.WorkFlow} />
        <Stack.Screen name="AddAttachementsList" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.AddAttachementsList} />
        <Stack.Screen name="FeesAndPayments" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.FeesAndPayments} />
        <Stack.Screen name="UploadAttachment" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.UploadAttachment} />

        <Stack.Screen name="License" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.License} />
        <Stack.Screen name="Profile" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.Profile} />
        <Stack.Screen name="Notifications" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.Notifications} />
        <Stack.Screen name="About" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.About} />
        <Stack.Screen name="Report" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.Report} />
        <Stack.Screen name="Help" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.Help} />
    </Stack.Navigator>
  );
}
function ApplyStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Apply" screenOptions = {{headerTitleAlign:'center'}} >     
      <Stack.Screen  name="Apply" options={({ navigation }) => HeaderLeftoption(navigation)}  component={ScreenName.Apply}/> 
        <Stack.Screen options={({ navigation }) => HeaderLeftoption(navigation)} name="Applysucces" component={ScreenName.ApplySuccess} />
    </Stack.Navigator>
  );
}
function PayFeesStackScreen() {
  return (
    <Stack.Navigator screenOptions = {{headerTitleAlign:'center'}} >     
       <Stack.Screen name="PayBill"  options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.PayBill} />
        <Stack.Screen name="Invoice" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.Invoice} />
        <Stack.Screen name="PaymentTypeSelection" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.PaymentTypeSelection} />
        <Stack.Screen name="EscrowPayment" options={({ navigation }) => HeaderLeftoption(navigation)}  component={ScreenName.EscrowPayment} />
        <Stack.Screen name="CardPayment" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.CardPayment} />
        <Stack.Screen name="AccountConfirmation" component={ScreenName.AccountConfirmation} />
    </Stack.Navigator>
  );
}

function EscrowStackScreen() {
  return (
    <Stack.Navigator screenOptions = {{headerTitleAlign:'center'}} >     
      <Stack.Screen  name="Escrow"   options={({ navigation, route }) => ({
          headerTitle:"Escrow Account",
          headerStyle: {       
			      height: 60,
            shadowOffset: { width: 0, height: 2 },
            shadowColor: 'rgba(140, 140, 140, 0.15)',
            shadowOpacity: 1,      
          },
         //headerLeft: props => <HeaderLeft {...props} navigation={navigation}/>
       })}   component={ScreenName.Escrow}/>
    <Stack.Screen name="AccountSummary" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.AccountSummary} />
    <Stack.Screen name="TransactionDetails" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.TransactionDetails} />
    <Stack.Screen name="Transactions" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.Transactions} />
    </Stack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <Stack.Navigator  >     
      <Stack.Screen  name="Settings"   options={({ navigation, route }) => ({
            headerTitle:"",
          headerStyle: {  
			height: 60,     
            shadowColor: 'transparent', elevation:10      
          },
       })}   component={ScreenName.Settings}/>
    </Stack.Navigator>
  );
}
// function RegisterStackScreen() {
//   return (
//     <Stack.Navigator headerMode = {'none'} >     
//       <Stack.Screen  name="Register"  component={ScreenName.Register} />
//     </Stack.Navigator>
//   );
// }
function RecoveryPwdStackScreen() {
  return (
    <Stack.Navigator  headerMode = {'none'}  >     
      <Stack.Screen  name="RecoverPassword" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.RecoverPassword} />
    </Stack.Navigator>
  );
}
function PublicSearchStackScreen() {
  return (
    <Stack.Navigator screenOptions = {{headerTitleAlign:'center'}} >     
        <Stack.Screen  name="PublicSearch" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.PublicSearch} />
        <Stack.Screen  name="SearchResult"  options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.SearchResult} />
        <Stack.Screen  name="RelatedFolder"  options={({ navigation }) => HeaderLeftoption(navigation)}  component={ScreenName.RelatedFolder} />
        <Stack.Screen name="PlumbingPermit" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.PlumbingPermit} />
        <Stack.Screen name="Details" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.Details} />
        <Stack.Screen name="AssociatedPeople" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.AssociatedPeople} />
        <Stack.Screen name="PropertyDetails" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.PropertyDetails} />
        <Stack.Screen name="WorkFlow" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.WorkFlow} />
        <Stack.Screen name="AddAttachementsList" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.AddAttachementsList} />
        <Stack.Screen name="FeesAndPayments" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.FeesAndPayments} />
        <Stack.Screen name="UploadAttachment" options={({ navigation }) => HeaderLeftoption(navigation)} component={ScreenName.UploadAttachment} />
    </Stack.Navigator>
  );
}

function LoginStackNavigator() {
  return (
    <NavigationContainer>	
      {/* <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/> */}
      <Stack.Navigator 
        headerMode='none' 
        screenOptions={{
          headerBackTitle: "Back",            
          headerStyle: {
            backgroundColor: 'white',
            // height: 60
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

{/* <Stack.Screen name="InitialScreen"  component={ScreenName.InitialScreen} />  */}
    <Stack.Screen name="Login"  component={ScreenName.Login} />
     <Stack.Screen name="Services"  component={DrawerNavigation} />
      <Stack.Screen name="GeneratePassword" component={ScreenName.GeneratePassword} />
      <Stack.Screen name="Register" component={ScreenName.Register} />
      <Stack.Screen name="RecoverPassword" component={ScreenName.RecoverPassword} />
      <Stack.Screen name="Search" component={ScreenName.Search} />
      <Stack.Screen name="PublicSearch" component={PublicSearchStackScreen} />
      
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function getTabBarVisible(route,name) {
  const routeName = route.state
    ?  route.state.routes[route.state.index].name
    : route.params?.screen || name;

  if (routeName === name) {
    return true;
  }
  return false;
}
function TabsNavigation() {
    return (
     
       <Tab.Navigator tabBar={props => <TabDesign {...props} />}>      
            <Tab.Screen name={"Services"}  component={StackScreen}  options={({ route }) => ({tabBarVisible: getTabBarVisible(route,"Services")})} />   
            <Tab.Screen name={"Apply"} component={ApplyStackScreen} options={({ route }) => ({tabBarVisible: getTabBarVisible(route,"Apply")})} />   
            <Tab.Screen name={"PayBill"} component={PayFeesStackScreen} options={({ route }) => ({tabBarVisible: getTabBarVisible(route,"PayBill")})} />   
            <Tab.Screen name={"Escrow"} component={EscrowStackScreen} options={({ route }) => ({tabBarVisible: getTabBarVisible(route,"Escrow")})} /> 
            <Tab.Screen name={"Settings"} component={SettingsStackScreen} options={({ route }) => ({tabBarVisible: getTabBarVisible(route,"Settings")})} />   
      </Tab.Navigator>
     
    )
}
function DrawerNavigation() {
  return (
   
     <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name={"Services"} component={TabsNavigation} />                 
    </Drawer.Navigator>
   
  )
}
  export default LoginStackNavigator