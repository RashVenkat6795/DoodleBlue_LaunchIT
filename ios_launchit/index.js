/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
// import Login from './src/feature/Login/Component/login'
import GeneratePassword from './src/feature/Login/Component/generatePassword'
import Register from './src/feature/Login/Component/register'
import {name as appName} from './app.json';
// require('react-native').unstable_enableLogBox()
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Register);
