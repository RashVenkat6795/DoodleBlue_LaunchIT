import { Dimensions, Platform } from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad) {
    isIPhoneX = WIDTH === X_WIDTH && HEIGHT === X_HEIGHT || WIDTH === XSMAX_WIDTH && HEIGHT === XSMAX_HEIGHT;
}

export const isNotch = Platform.OS == 'ios' ? isIPhoneX : false