import axios from 'axios';
import { Alert } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import BottomAlert from '../component/BottomAlert';
//import Config from "react-native-config";

/**
 * Request Wrapper with default success/error actions
 */
//API Part branch
const request = async function (options, isHeader = true) {
  // alert(Config.BASE_URL)
  let authHeader = null;
  /* let data = await AsyncStorage.getItem('token');
  //alert(data)
  if (data != '') {
    authHeader = 'Bearer ' + data;
  } else {
    authHeader = await AsyncStorage.getItem('Auth');
  } */
  const client = axios.create({
    baseURL: "http://angdev.launchitcorp.com:9014/arl/api/v1",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
  });

  const onSuccess = function (response) {
    console.debug('Request Successful!', response);
    return response.data;
  };

  const onError = function (error) {
    console.debug('Request Failed:', error.config);

    if (error.response) {
      console.debug('Status:', error.response.status);
      console.debug('Data:', error.response.data);
      console.debug('Headers:', error.response.headers);
    } else {
      Alert.alert("Error", error.message, [{ text: "OK", onPress: () => {} }]);
      console.debug('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };
//   return client(options).then(onSuccess).catch(onError);
  return NetInfo.fetch().then(state=> {
    if (state.isConnected) {
      return client(options).then(onSuccess).catch(onError);
    } else {
       // Alert.alert("Network Error", "You are not connected to internet.", [{ text: "OK", onPress: () => {} }]);
       BottomAlert("You are not connected to internet.")
    }
  });
};

export default request;