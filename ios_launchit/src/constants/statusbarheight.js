import { Platform, StatusBar, Dimensions } from 'react-native';
import { isNotch } from './isNotch';

export default STATUSBAR_HEIGHT = Platform.OS === 'ios' ? ( isNotch ? 44 : 20 ) : StatusBar.currentHeight;