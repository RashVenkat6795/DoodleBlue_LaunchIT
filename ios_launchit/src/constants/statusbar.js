import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import STATUSBAR_HEIGHT from './statusbarheight';
import {colors} from '../theme/constant'

const MyStatusBar = ({backgroundColour, barStyle, ...props}) => {
    return(
        <View style={[styles.statusBar, { backgroundColor : backgroundColour ? backgroundColour : colors.PRIMARY  }]}>
            <StatusBar barStyle={barStyle ? barStyle : "light-content"} {...props} />
        </View>
    )
};

const styles = {
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
}

export default MyStatusBar;