import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from "react-native";
import { colors, fonts } from '../../theme/constant'
import AccountCell from './permitDetails'
import { images } from '../../assets/constant';

class SummaryCell extends Component {

    render() {
        const {style, item} = this.props

        return (
            <View style = {[styles.container, style]}>
                <Text style = {{...fonts.H3_Bold, color: 'black', marginLeft:20,paddingBottom:15}}>{item.main}</Text>
                <View style = {styles.innerContainer}>
                    <FlatList
                        style={{width: '100%'}}
                        data={item.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                    />
                    
                </View>
            </View>
        )
    }


    _renderItem = ({ item, index }) => {
        return( 
            // <Text style = {{marginTop: 8, marginBottom: 8, marginLeft: 14, ...fonts.BODY}}>
            //     <Text>{item.title}:     </Text>
            //     <Text>{item.des}</Text>
            // </Text>
            <AccountCell 
                style = {{width: "100%", backgroundColor:'white'}}
                title = {item.title}
                tetxStyle = {{marginLeft:20}}
                subTitle = {item.des}
            />
    )

    }


}

SummaryCell.defaultProps = {
    style: {},

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
    },
    innerContainer: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'white',
    },

    
    

})

export default SummaryCell;
