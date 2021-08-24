/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, FlatList, AsyncStorage} from 'react-native';
import styles from './styles';
import SearchResultCell from '../../../component/cell/searchResultCell';

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    var navigationOption = props.navigation;
    props.navigation.setOptions({title: 'Public Search Result'});
    this.state = {
      dataArr: [],
      item: this.props.route.params.datas
        ? this.props.route.params.datas
        : this.props.route.params.searchData,
    };
    this.onLoad();
  }

  onLoad() {
    let data = this.state.item;
    // console.log('SEARCHRESULT', this.state.item);
    let columnLen = data[0].columnValues.length,
      dataArr = [];
    for (let i = 0; i < columnLen; i++) {
      let obj = {};
      data.map(item => {
        obj[item.columnName] = item.columnValues[i];
        // eslint-disable-next-line eqeqeq
        if (item.columnName == 'FolderRSN') {
          this.setState({folderRSN: item.columnValues[i]});
        }
      });
      dataArr.push(obj);
    }
    setTimeout(() => {
      this.setState({dataArr});
    }, 100);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <SearchResultCell style = {{width: '100%'}}/> */}
        <FlatList
          style={{width: '100%', marginTop: 10}}
          showsVerticalScrollIndicator={false}
          data={this.state.dataArr}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
        />
      </SafeAreaView>
    );
  }

  _renderItem = ({item, index}) => {
    return (
      <SearchResultCell
        onPress={() => {
          this.props.navigation.navigate('PlumbingPermit', {
            title: 'Animal License',
            item: item,
            isBoLoginLid: this.props.route.params.isBoLoginLid,
          });
        }}
        showButton={false}
        style={{
          width: '100%',
          marginTop: 8,
          marginBottom: 8,
          alignSelf: 'center',
        }}
        item={item}
      />
    );
  };
}
