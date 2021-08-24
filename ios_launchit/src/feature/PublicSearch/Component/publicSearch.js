/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  SectionList,
  AsyncStorage,
  TouchableOpacity,
  Image,
} from 'react-native';
import PrimaryButton from '../../../component/Button/primaryButton';
<<<<<<< HEAD
import CustomTabBar from "./customTabBar";
import SearchView from '../../../component/view/searchView'
import SearchProperty from '../../../component/inputField/searchProperty'
import styles from "./styles";
import SegmentedControl from '@react-native-community/segmented-control';
import ScrollableTabView, {
    DefaultTabBar,
    ScrollableTabBar
  } from "react-native-scrollable-tab-view";
import {colors, fonts} from '../../../theme/constant'
import HeaderLeft from '../../../component/Header/MainHeaderLeft'
import { strings } from "../../../constants/strings";
import { images } from "../../../assets/constant";
import * as PublicSearchService from "../../../api/PublicSearchServices";
import Loader from '../../../component/Loader'
import BottomAlert from "../../../component/BottomAlert";
import async from 'async'
import { call } from "react-native-reanimated";
import MaterialDropDown from "../../../component/MaterialDropDown";
import DateTimePicker from '@react-native-community/datetimepicker';
import TextField from '../../../component/inputField/searchProperty';
=======
import CustomTabBar from './customTabBar';
import SearchView from '../../../component/view/searchView';
import SearchProperty from '../../../component/inputField/searchProperty';
import styles from './styles';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import HeaderLeft from '../../../component/Header/MainHeaderLeft';
import {strings} from '../../../constants/strings';
import {images} from '../../../assets/constant';
import * as PublicSearchService from '../../../api/PublicSearchServices';
import Loader from '../../../component/Loader';
import BottomAlert from '../../../component/BottomAlert';
import MaterialDropDown from '../../../component/MaterialDropDown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
>>>>>>> 2872b900b6a31489a20b05f951273bcaab766ae7

export default class PublicSearch extends Component {
  constructor(props) {
    super(props);
    var navioption = props.navigation;
    props.navigation.setOptions({
      title: strings.PublicSearchHeaderTitle,
      headerLeft: props => (
        <HeaderLeft {...props} back={true} navigation={navioption} />
      ),
    });

<<<<<<< HEAD
        this.state = {
            loaded: false,
            inputValue: '',
            activeTab: 0,
            isEditable: true,
            projectData: [ 
                {
                index:0,
                data: [[
                    {"hint": "Number", "text": null, "title": "Prefix", "ref": "Number", "isSecure": false,half:true,"dropdown": true, type:'dropdownWithTextInput'},
                    {"hint": "Street Name", "text": null, "ref": "StreetName", type:'textinput'},
                    {"hint": "Street Type", "text": null, "ref": "StreetType", isLeftDropDown:true,type:'dualDropDown'},
                    {"hint": "Direction", "text": null, "title": "Unit Type","ref": "Direction","isSecure": false,half:true,"dropdown": true,type:'dropdownWithTextInput'},
                    {"hint": "Unit Number", "text": null, "ref": "UnitNumber", "secondHint": "Zip Code",half:true,isLeftDropDown:false,isTextInput: true,type:'textinput'}
                ]]
               },
               {
                index:1,
                data: [[
                    {"hint": "Project name", "text": null, "ref": "ProjectName", type:'textinput'},
                    {"hint": "Permit/Case Type", "text": null,"ref": "PermitCaseType",isLeftDropDown:true, type:'textWithDropDown'},
                    {"hint": "Sub Type", "text": null,"ref": "SubType",isLeftDropDown:true, type:'textWithDropDown'},
                    {"hint": "Work Type", "text": null,"ref": "WorkType",isLeftDropDown:true, type:'textWithDropDown'},
                ]]
               },
               {
                index:2,
                data: [[
                    {"hint": "Start Date", "text": null, "ref": "StartDate", "title": "End Date","isSecure": false,half:true,dropdown: true,isLeftDropDown:true,customImage:images.calendar, type:'datePicker'},
                ]]
               },
            ]
        }
=======
    this.state = {
      loaded: false,
      lid: '',
      peopleRSN: '',
      boLoginLid: '',
      isEditable: true,
      showDatePicker: false,
      inputValue: '',
      activeTab: 0,
      folderType: '',
      type: 0,
      projectData: [
        {
          index: 0,
          data: [
            [
              {
                hint: 'Number',
                text: null,
                ref: 'House',
                secondHint: 'Prefix',
                type: 'textInputWithDropDown',
                dropDownData: [
                  // {value: ' '},
                  {value: 'E'},
                  {value: 'N'},
                  {value: 'NE'},
                  {value: 'NW'},
                  {value: 'S'},
                  {value: 'SE'},
                  {value: 'SW'},
                  {value: 'W'},
                ],
                value: '',
                selectedValue: '',
              },
              {
                hint: 'Street Name',
                ref: 'streetName',
                type: 'textinput',
                value: '',
              },
              {
                hint: 'Street Type',
                text: null,
                ref: 'streetType',
                type: 'dropDown',
                dropDownData: [],
                selectedValue: '',
              },
              {
                hint: 'Unit Type',
                text: null,
                ref: 'unitType',
                secondHint: 'Unit Number',
                type: 'DropDownWithTextInput',
                dropDownData: [],
                selectedValue: '',
                value: '',
              },
              {
                hint: 'Zip Code',
                text: null,
                ref: 'postal',
                half: true,
                isLeftDropDown: false,
                isTextInput: true,
                type: 'textinput',
                value: '',
              },
            ],
          ],
        },
        {
          index: 1,
          data: [
            [
              {
                hint: 'Project name',
                text: null,
                ref: 'projectName',
                type: 'textinput',
                value: '',
              },
              {
                hint: 'Permit/Case Type',
                text: null,
                ref: 'permitCaseType',
                isLeftDropDown: true,
                type: 'dropDown',
                selectedValue: '',
              },
              {
                hint: 'Sub Type',
                text: null,
                ref: 'subType',
                isLeftDropDown: true,
                type: 'dropDown',
                selectedValue: '',
              },
              {
                hint: 'Work Type',
                text: null,
                ref: 'workType',
                isLeftDropDown: true,
                type: 'dropDown',
                selectedValue: '',
              },
            ],
          ],
        },
        {
          index: 2,
          data: [
            [{hint: 'Start Date', secondHint: 'End Date', type: 'dateInputs'}],
          ],
        },
      ],
    };
  }
>>>>>>> 2872b900b6a31489a20b05f951273bcaab766ae7

  async componentDidMount() {
    await AsyncStorage.multiGet(['lid', 'peopleRSN', 'boLoginLid']).then(
      async response => {
        this.setState({
          lid: response[0][1],
          peopleRSN: response[1][1],
          boLoginLid: response[2][1],
          loaded: true,
        });
      },
    );
    this.getStreetTypes();
    this.getUnitTypes();
    this.getPermitCasTypes();
  }

  async getStreetTypes() {
    let lid =
      this.state.lid == '' || this.state.lid == null
        ? this.state.boLoginLid
        : this.state.lid;
    await PublicSearchService.getValidStreetTypes(lid)
      .then(response => {
        let values = this.state.projectData;
        values[0].data[0][2].dropDownData = response.responseObject.map(v => {
          return {...v, value: v.description};
        });
        this.setState({projectData: values, loaded: false});
      })
      .catch(error => {
        // handle error
        this.setState({loaded: false});
        console.log('axios error', error);
      });
  }

  async getUnitTypes() {
    let lid =
      this.state.lid == '' || this.state.lid == null
        ? this.state.boLoginLid
        : this.state.lid;
    await PublicSearchService.getValidUnitTypes(lid)
      .then(response => {
        let values = this.state.projectData;
        values[0].data[0][3].dropDownData = response.responseObject.map(v => {
          return {...v, value: v.addressUnitType};
        });
        this.setState({projectData: values, loaded: false});
      })
      .catch(error => {
        // handle error
        this.setState({loaded: false});
        console.log('axios error', error);
      });
  }

  async getPermitCasTypes() {
    let reqData = [{}];
    let lid =
      this.state.lid == '' || this.state.lid == null
        ? this.state.boLoginLid
        : this.state.lid;
    await PublicSearchService.executeCustomTransaction(lid, 52, reqData)
      .then(response => {
        let columnLen = response.responseObject[0].columnValues.length;
        let data = response.responseObject;
        let dataArr = [];
        for (let i = 0; i < columnLen; i++) {
          let obj = {};
          data.map(item => {
            obj[item.columnName] = item.columnValues[i];
          });
          dataArr.push(obj);
        }
        let values = this.state.projectData;
        values[1].data[0][1].dropDownData = dataArr.map(v => {
          return {...v, value: v.FolderDesc};
        });
        this.setState({projectData: values, loaded: false});
      })
      .catch(error => {
        this.setState({loaded: false});
        console.log('axios error', error);
      });
  }
  hideDatePicker = () => {
    this.setState({showDatePicker: false});
  };

<<<<<<< HEAD
    async onLoad(){
        let lid = await AsyncStorage.getItem("lid");
        async.parallel({
            'peopleTitles': (callback) => {
                PublicSearchService.getValidPeopleTitles(lid).then(response => {
                    callback('peopleTitles', this.objToDropdownForm(response.responseObject, "description", "id", false,false));
                }).catch(error => {
                    // handle error
                    console.log("error",error);
                })
            },
            'streetTypes': (callback) => {
                PublicSearchService.getValidStreetTypes(lid).then(response => {
                    callback('streetTypes', this.objToDropdownForm(response.responseObject, "description", "id", false, false));
                }).catch(error => {
                    console.log("error",error);
                })
            },
            'unitTypes': (callback) => {
                PublicSearchService.getValidUnitTypes(lid).then(response => {
                    callback('unitTypes', this.objToDropdownForm(response.responseObject, "addressUnitTypeDesc", "addressUnitType", false, false));
                }).catch(error => {
                    console.log("error",error);
                })
            },
            'permitORcaseTypes': (callback) => {
                let reqData = [{}], resultArr = [];
                PublicSearchService.executeCustomTransaction(lid,52,reqData).then(response => {
                    /* let resData = response.responseObject;
                    resData[1].columnValues.map((label, index) => {
                        resultArr.push({ label: label, value: resData[0].columnValues[index] });
                    }); */
                    callback('permitORcaseTypes', this.arrToDropdownForm(response.responseObject));
                }).catch(error => {
                    console.log("error",error);
                })  
            }  
        }, (err, results) => {
            let projectData = [
                {
                index:0,
                data: [[
                    {"hint": "Number", "text": null, "secondHint": "Prefix","ref": "Number","isSecure": false,half:true,"dropdown": true, "dropdownData": results.peopleTitles, type:'textWithDropDown'},
                    {"hint": "Street Name", "ref": "StreetName","text": null, type:'textinput'},
                    {"hint": "Street Type", "ref": "StreetType","text": null,isLeftDropDown:true,"dropdown": true,"dropdownData": results.streetTypes},
                    {"hint": "Direction", "ref": "Direction","text": null, "secondHint": "Unit Type","isSecure": false,half:true,"dropdown": true,"dropdownData": results.unitTypes,type:'textWithDropDown'},
                    {"hint": "Unit Number", "ref": "UnitNumber","text": null, "secondHint": "Zip Code",half:true,isLeftDropDown:false,isTextInput: true, "keyboardType":"numeric", type:'textWithDropDown'}
                ]]
               },
               {
                index:1,
                data: [[
                    {"hint": "Project name", "ref": "ProjectName","text": null, type:'textinput'},
                    {"hint": "Permit/Case Type", "ref": "PermitCaseType","text": null,isLeftDropDown:true,"dropdownData": results.permitORcaseTypes, "dropdown": true, type:'dropDown'},
                    {"hint": "Sub Type", "ref": "SubType","text": null,isLeftDropDown:true,"dropdownData": [], type:'dropDown'},
                    {"hint": "Work Type", "ref": "WorkType","text": null,isLeftDropDown:true,"dropdownData": [], type:'dropDown'},
                ]]
               },
               {
                index:2,
                data: [[
                    {"hint": "Start Date", "ref": "StartDate", "ref2": "EndDate","text": null, "secondHint": "End Date","isSecure": false,type:"dualDatePicker",half:true,dropdown: true,isLeftDropDown:true,customImage:images.calendar},
                ]]
               },
            ]
            this.setState({ projectData }, () => console.log("state pro", this.state.projectData));
        }).catch((error) => {
            //ERROR HANDLING
            this.setState({ loaded: false });
            BottomAlert("Data not found")
            //Alert.alert("Error", error, [{ text: "OK", onPress: () => {}}]);
        })
=======
  handleConfirm = date => {
    // selectedDate = new Date(selectedDate);
    // let displayDate = selectedDate.getMonth() + "-" + selectedDate.getDate() + "-" + selectedDate.getFullYear();
    let displayDate = moment(date).format('YYYY-MM-DD');
    let values = this.state.projectData;
    this.state.type == 0
      ? (values[2].data[0][0].hint = displayDate)
      : (values[2].data[0][0].secondHint = displayDate);
>>>>>>> 2872b900b6a31489a20b05f951273bcaab766ae7

    this.setState({projectData: values, showDatePicker: false});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Loader isVisible={this.state.loaded} />
        <ScrollableTabView
          style={{marginTop: 20, flex: 1, borderWidth: 0}}
          initialPage={0}
          tabBarActiveTextColor={'white'}
          renderTabBar={() => <CustomTabBar />}
          tabBarUnderlineStyle={{height: 0}}
          onChangeTab={index => this.setState({activeTab: index.i})}>
          <View
            tabLabel={strings.projectNameTab}
            style={{width: '100%', flex: 1}}>
            {this._renderProjectTabView()}
          </View>
          <View tabLabel={strings.folderRSNTab} style={styles.tabSubViewStyle}>
            {this._renderSearchView(
              false,
              'FolderRSN/Rowid',
              'Search by FolderRSN / Rowid',
            )}
          </View>
          <View tabLabel={strings.permitNoTab} style={styles.tabSubViewStyle}>
            {this._renderSearchView(
              true,
              'Permit Number',
              'Search by Permit Number',
            )}
          </View>
        </ScrollableTabView>
        {this._renderFooter()}
        {this.state.showDatePicker && (
          <DateTimePickerModal
            isVisible={this.state.showDatePicker}
            mode="date"
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
            minimumDate={new Date()}
          />
        )}
      </SafeAreaView>
    );
  }
  handleIsBoLoginLid = () =>
    this.state.lid == '' || this.state.lid == null ? true : false;

  getLid = () => {
  if (this.handleIsBoLoginLid()) return this.state.boLoginLid;
  return this.state.lid;
} 

<<<<<<< HEAD
    onSelectPermitORCaseType(value) {
        let reqData = [{
            fieldName: "FolderType",
            fieldValue: value
        }];
        PublicSearchService.executeCustomTransaction(lid,64,reqData).then(response => {
            let projectData = [...this.state.projectData];
            projectData[1].data[0][2].dropdownData = this.arrToDropdownForm(response.responseObject);
            this.setState({ projectData });
        }).catch(error => {
            console.log("error",error);
        })
    }

    onSelectSubType(value) {
        let reqData = [{
            fieldName: this.state.selected,
            fieldValue: value
        }];
        PublicSearchService.executeCustomTransaction(lid,64,reqData).then(response => {
            let projectData = [...this.state.projectData];
            projectData[1].data[0][3].dropdownData = this.arrToDropdownForm(response.responseObject);
            this.setState({ projectData });
            this.updateProjectDataState("Work Type", response.responseObject);
        }).catch(error => {
            console.log("error",error);
=======
  onSearchButtonPressed = async () => {
    // alert(this.state.activeTab)
    this.setState({loaded: true});
    if (this.state.activeTab == 1) {
      if (this.state.inputValue == '') {
        this.setState({loaded: false});
        BottomAlert('Please enter folderRSN');
      } else {
        let data = [
          {
            fieldName: 'argFolderrsn',
            fieldValue: this.state.inputValue, //`491979`
          },
        ];

        const lid = this.getLid();
        await PublicSearchService.getSearchByFolderRSN(lid, 53, data)
          .then(response => {
            console.log('SearchByFolderRSN', response);
            this.setState({loaded: false});
            if (response.message == 'Success') {
              this.props.actions.publicSearchResults(response.responseObject);
              let datas = this.props.publicsearch;
              this.props.navigation.navigate('SearchResult', {
                datas,
                isBoLoginLid: this.handleIsBoLoginLid()
              });
            }else {
              BottomAlert('No data found');
            }
          })
          .catch(error => {
            //ERROR HANDLING
            this.setState({loaded: false});
            BottomAlert('No data found');
            console.log('axios error', error);
          });
      }
    } else if (this.state.activeTab == 0) {
      let data = [
        {
          fieldName: 'argPropHouse',
          fieldValue: `%${this.state.projectData[0].data[0][0].value.trim()}%`,
        },
        {
          fieldName: 'argPropStreet',
          fieldValue: `%${this.state.projectData[0].data[0][1].value.trim()}%`,
        },
        {
          fieldName: 'argPropStreetPrefix',
          fieldValue: `%${this.state.projectData[0].data[0][0].selectedValue}%`,
        },
        {
          fieldName: 'argPropStreetType',
          fieldValue: `%${this.state.projectData[0].data[0][2].selectedValue}%`,
        },
        {
          fieldName: 'argpropUnit',
          fieldValue: `%${this.state.projectData[0].data[0][3].value.trim()}%`,
        },
        {
          fieldName: 'argPropUnitType',
          fieldValue: `%${this.state.projectData[0].data[0][3].selectedValue}%`,
        },
        {fieldName: 'argPropProvince', fieldValue: '%%'},
        {
          fieldName: 'argPropPostal',
          fieldValue: `%${this.state.projectData[0].data[0][4].value.trim()}%`,
        },
        {
          fieldName: 'argFolderName',
          fieldValue: `%${this.state.projectData[1].data[0][0].value.trim()}%`,
        },
        {
          fieldName: 'argFolderType',
          fieldValue: `%${this.state.projectData[1].data[0][1].selectedValue}%`,
        },
        {
          fieldName: 'argSubCode',
          fieldValue: `%${this.state.projectData[1].data[0][2].selectedValue}%`,
        },
        {
          fieldName: 'argWorkCode',
          fieldValue: `%${this.state.projectData[1].data[0][3].selectedValue}%`,
        },
        {
          fieldName: 'argStartInDate',
          fieldValue: `${
            this.state.projectData[2].data[0][0].hint == 'Start Date'
              ? '1990-01-01'
              : this.state.projectData[2].data[0][0].hint
          }`,
        },
        {
          fieldName: 'argEndInDate',
          fieldValue: `${
            this.state.projectData[2].data[0][0].secondHint == 'End Date'
              ? '2100-01-01'
              : this.state.projectData[2].data[0][0].secondHint
          }`,
        },
      ];

     
      const lid = this.getLid();
      await PublicSearchService.getPublicSearchAPIresult(lid, 54, data)
        .then(searchResponse => {
          this.setState({loaded: false});
          if (searchResponse.message == 'Success') {
            console.log('searchResponse', searchResponse);
            this.props.actions.publicSearchResults(
              searchResponse.responseObject,
            );
            let searchData = this.props.publicsearch;
            this.props.navigation.navigate('SearchResult', {
              searchData,
              isBoLoginLid: this.handleIsBoLoginLid()
            });
          } else {
            BottomAlert('No data found');
          }
>>>>>>> 2872b900b6a31489a20b05f951273bcaab766ae7
        })
        .catch(error => {
          //ERROR HANDLING
          this.setState({loaded: false});
          BottomAlert('No data found');
          console.log('axios error', error);
        });
    } else if (this.state.activeTab == 2) {
      this.setState({loaded: false});
    }
  };

<<<<<<< HEAD
    _renderFooter() {
        return (
            <PrimaryButton
            style = {[styles.submitButton]}
            text = {strings.PublicSearchHeaderTitle}
            onPress = {()=> {
                this.onSearchButtonPressed()
            }}
        /> 
        )
    }
=======
  onSelectPermitORCaseType(value) {
    let lid =
      this.state.lid == '' || this.state.lid == null
        ? this.state.boLoginLid
        : this.state.lid;
    PublicSearchService.getFolderSubByFolderType(lid, value)
      .then(response => {
        //    console.log("Subtype",response.responseObject)
        let values = this.state.projectData;
        values[1].data[0][2].dropDownData = response.responseObject.map(v => {
          return {...v, value: v.subDesc};
        });
        this.setState({projectData: values});
      })
      .catch(error => {
        console.log('SubType error', error);
      });
  }

  onSelectSubType(subCode, folderType) {
    let lid =
      this.state.lid == '' || this.state.lid == null
        ? this.state.boLoginLid
        : this.state.lid;
    PublicSearchService.getFolderWorkByFolderType(lid, folderType, subCode)
      .then(response => {
        //    console.log("WorkType",response.responseObject)
        let values = this.state.projectData;
        values[1].data[0][3].dropDownData = response.responseObject.map(v => {
          return {...v, value: v.workDesc};
        });
        this.setState({projectData: values});
      })
      .catch(error => {
        console.log('WorkType error', error);
      });
  }
>>>>>>> 2872b900b6a31489a20b05f951273bcaab766ae7

  _renderFooter() {
    return (
      <PrimaryButton
        style={[styles.submitButton]}
        text={strings.PublicSearchHeaderTitle}
        onPress={() => {
          this.onSearchButtonPressed();
        }}
      />
    );
  }

<<<<<<< HEAD
    _renderSectiontem(item,index) {
        console.log("sec item", item)
        return( 
            <FlatList
                style={{width: '100%', marginTop: 10}}
                showsHorizontalScrollIndicator={false}
                data={item}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
            />
        )
    }
=======
  _renderProjectTabView() {
    return (
      <SectionList
        showsVerticalScrollIndicator={false}
        style={{width: '100%', alignSelf: 'center'}}
        sections={this.state.projectData}
        extraData={this.state.projectData}
        renderSectionHeader={({section}) =>
          section.index == 0 ? (
            <Text style={styles.headerText}>{strings.searchbyProperty}</Text>
          ) : null
        }
        stickySectionHeadersEnabled={false}
        renderItem={({section, item, index}) =>
          this._renderSectiontem(item, index, section)
        }
      />
    );
  }
>>>>>>> 2872b900b6a31489a20b05f951273bcaab766ae7

  _renderSectiontem(item, index, section) {
    // console.log(item)
    return (
      <FlatList
        style={{width: '100%', marginTop: 10}}
        showsHorizontalScrollIndicator={false}
        data={item}
        keyExtractor={(_item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: 'lightgrey'}} />
        )}
        renderItem={({item, index}) => this._renderItem(item, index, section)}
      />
    );
  }

  _renderSearchView(showSubHeader, placeholder, headerName) {
    return (
      <SearchView
        hint={placeholder}
        style={styles.searchView}
        header={headerName}
        subHeader={showSubHeader ? strings.permitsNoDes : null}
        onChange={value => this.setState({inputValue: value})}
      />
    );
  }

  _renderProjectView = ({item, index}) => {
    return (
      <View style={styles.projectView}>
        <SearchProperty
          style={{width: '100%'}}
          hint={item.hint}
          rightImage={item.rightImage}
        />
      </View>
    );
  };

  _renderButton(title, type) {
    return (
      <TouchableOpacity
        style={styles.dateButtonStyle}
        onPress={() =>
          this.setState({
            showDatePicker: !this.state.showDatePicker,
            type: type,
          })
        }>
        <Text style={[styles.textFontStyles, {width: '70%', color: '#BFBFBF'}]}>
          {title}
        </Text>
        <Image
          source={images.calendar}
          style={{height: 20, width: 20, right: 20, tintColor: 'grey'}}
        />
      </TouchableOpacity>
    );
  }

<<<<<<< HEAD
    _renderDualDropdown(item) {
        return(
            <View style={{width:'100%',height:50,flexDirection:'row',justifyContent:'space-between'}}>
                <MaterialDropDown data = {item.dropdownData}  width = {"50%"} placeholder = {item.hint} disable = {this.state.isEditable}/>
                <MaterialDropDown data = {item.dropdownData}  width = {"50%"} placeholder = {item.secondHint} disable = {this.state.isEditable}/>
            </View>
        )
    }

    _renderDropdown(item) {
        return(
            <MaterialDropDown
                data = {item.dropdownData}
                width = {"100%"}
                placeholder = {item.hint}
                disable = {this.state.isEditable}
                onChangeText={value => this.setState({ [`selected${item.ref}`]: value })}/>
        )
=======
  _renderDateButtons(item) {
    return (
      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        {this._renderButton(item.hint, 0)}
        {this._renderButton(item.secondHint, 1)}
      </View>
    );
  }

  _handleOnChangeDropDown(item, section, dropDownIndex, index) {
    if (item.hint === 'Street Type') {
      let values = this.state.projectData;
      values[section].data[0][index].selectedValue =
        item.dropDownData[dropDownIndex].id;
      // console.log("Street Type",  values[section].data[0][index].selectedValue)
      this.setState({projectData: values});
>>>>>>> 2872b900b6a31489a20b05f951273bcaab766ae7
    }
    if (item.hint === 'Permit/Case Type') {
      let values = this.state.projectData;
      const folderType = item.dropDownData[dropDownIndex].FolderType;
      values[section].data[0][index].selectedValue =
        item.dropDownData[dropDownIndex].FolderType;
      // console.log("Permit/Case Type",  values[section].data[0][index].selectedValue)
      this.setState({projectData: values, folderType});
      this.onSelectPermitORCaseType(
        this.state.projectData[section].data[0][index].selectedValue,
      );
    }
<<<<<<< HEAD

    _renderDropDownWithTextInput(item) {
        return(
            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
                <TextInput 
                    style ={[styles.textFontStyles,{width:'50%',borderRightWidth:1,borderColor:'lightgrey'}]}
                    placeholder = {item.hint}
                    editable = {this.state.isEditable}
                />
                <MaterialDropDown
                    data = {item.dropdownData}
                    width = {"50%"}
                    placeholder = {item.secondHint}
                    disable = {this.state.isEditable}
                    onChangeText={value => this.setState({ [`selected${item.ref2}`]: value })}/>
            </View>
        )
    }

    _renderTextInputWithDopDown(item) {
        return(
            <View style={{width:'100%',height:50,flexDirection:'row',justifyContent:'space-between'}}>
                <MaterialDropDown 
                    data = {item.dropdownData}
                    width = {"50%"}
                    placeholder = {item.hint}
                    disable = {this.state.isEditable}
                    onChangeText={value => this.setState({ [`selected${item.ref}`]: value })}/>
                <TextInput 
                    style ={[styles.textFontStyles,{width:'50%',borderRightWidth:1,borderColor:'lightgrey'}]}
                    placeholder = {item.secondHint}
                    editable = {this.state.isEditable}
                />
            </View>
        )
=======
    if (item.hint === 'Sub Type') {
      let values = this.state.projectData;
      values[section].data[0][index].selectedValue =
        item.dropDownData[dropDownIndex].subCode;
      // console.log("SelectedSubType",  values[section].data[0][index].selectedValue)
      this.setState({projectData: values});
      this.onSelectSubType(
        item.dropDownData[dropDownIndex].subCode,
        this.state.folderType,
      );
    }
    if (item.hint === 'Work Type') {
      let values = this.state.projectData;
      values[section].data[0][index].selectedValue =
        item.dropDownData[dropDownIndex].workCode;
      // console.log("SelectedWorkType",  values[section].data[0][index].selectedValue)
      this.setState({projectData: values});
>>>>>>> 2872b900b6a31489a20b05f951273bcaab766ae7
    }
  }

<<<<<<< HEAD
    onDatePicked(item, selectedDate) {
        let projectData = [...this.state.projectData];
        let ref = item.focusStartDate ? item.ref : item.ref2;
        selectedDate = new Date(selectedDate);
        let displayDate = selectedDate.getMonth() + "/" + selectedDate.getDate() + "/" + selectedDate.getFullYear();
        projectData[2].data[0][0][`selected${ref}`] = displayDate;
        projectData[2].data[0][0][`focus${ref}`] = false;
        this.setState({ projectData });
    }

    onDatePickerFocus(ref) {
        let projectData = [...this.state.projectData];
        projectData[2].data[0][0][`focus${ref}`] = true;
        console.log("proj", projectData)
        this.setState({ projectData });
    }

    _renderDualDatePicker(item) {
        return(
            <View style={{width:'100%',height:50,flexDirection:'row',justifyContent:'space-between'}}>
                <TextField
                    value = {item.selectedStartDate}
                    disableShadow = {true}
                    editable={this.state.isEditable} 
                    style = {{width: '50%', alignSelf: 'center', marginTop: 10}}
                    rightImage = 'calendar'
                    hint = 'MM/DD/YYYY'
                    placeholder = {item.hint}
                    onFocus = {() => this.onDatePickerFocus(item.ref)}
                />
                <TextField
                    value = {item.selectedEndDate}
                    disableShadow = {true}
                    editable={this.state.isEditable} 
                    style = {{width: '50%', alignSelf: 'center', marginTop: 10}}
                    rightImage = 'calendar'
                    hint = 'MM/DD/YYYY'
                    placeholder = {item.secondHint}
                    onFocus = {() => this.onDatePickerFocus(item.ref2)}
                />
                {(item.focusStartDate || item.focusEndDate) && (
                    <DateTimePicker
                        value={item.date ? item.date : new Date()}
                        mode={"date"}
                        width = {"50%"}
                        is24Hour={false}
                        display="default"
                        onChange={(event, selectedDate) => this.onDatePicked(item, selectedDate)}
                    /> )}
            </View>
        )
    }

    _renderItem = ({ item, index }) => { console.log("flatitem", item)
        switch(item.type) {
            case 'dropDown' : return this._renderDropdown(item)
            case 'textinput' : return this._renderTextInput(item)
            case 'dualDropDown' : return this._renderDualDropdown(item) 
            case 'textWithDropDown' : return this._renderDropDownWithTextInput(item)
            case 'dropdownWithTextInput' : return this._renderTextInputWithDopDown(item)
            case 'button' : return this._renderButton(item)
            case 'dualDatePicker' : return this._renderDualDatePicker(item)
        }
=======
  _renderDropdown(item, index, section) {
    return (
      <MaterialDropDown
        data={item.dropDownData}
        selectedValue={item.selectedValue}
        width={'100%'}
        edit={true}
        placeholder={item.hint}
        disable={this.state.isEditable}
        onChangeText={(value, dropDownIndex) => {         
          this._handleOnChangeDropDown(item, section, dropDownIndex, index,value);
        }}
        showClear = {true}
        onClickClear={() => {
          let values = this.state.projectData;
          values[section].data[0][index].selectedValue = "";
          this.setState({projectData: values});
        }}
      />
    );
  }

  _renderTextInput(item, index, section) {
    return (
      <TextInput
        style={[styles.textFontStyles, {width: '100%', height: 50}]}
        placeholder={item.hint}
        editable={this.state.isEditable}
        value={item.value}
        onChangeText={text => this._handleChangeStates(section, index, text)}
      />
    );
  }

  _renderTextInputWithDropDown(item, index, section) {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput
          style={[
            styles.textFontStyles,
            {width: '50%', borderRightWidth: 1, borderColor: 'lightgrey'},
          ]}
          placeholder={item.hint}
          multiline={false}
          no={1}
          value={item.value}
          editable={this.state.isEditable}
          onChangeText={text => {
            // console.log("TextInputWIthDropDown",text,index);
            this._handleChangeStates(section, index, text);
          }}
        />
        <MaterialDropDown
          data={item.dropDownData}
          selectedValue={item.selectedValue}
          edit={true}
          width={'50%'}
          placeholder={item.secondHint}
          disable={this.state.isEditable}
          value={item.selectedValue}
          showClear = {true}
          onChangeText={(text, dropDownIndex) => {
            // console.log("TextInputWIthDropDown",text,dropDownIndex,index);
            if (item.secondHint === 'Prefix') {
              let values = this.state.projectData;
              values[section].data[0][index].selectedValue = text;
              // console.log("selectedValue", values[section].data[0][index].selectedValue )
              this.setState({projectData: values});
            }
          }}
          onClickClear={() => {
            let values = this.state.projectData;
            values[section].data[0][index].selectedValue = "";
            this.setState({projectData: values});
          }}
        />
      </View>
    );
  }
  _renderDropDownWithTextInput(item, index, section) {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <MaterialDropDown
          data={item.dropDownData}
          selectedValue={item.selectedValue}
          edit={true}
          width={'50%'}
          placeholder={item.hint}
          showClear = {true}
          disable={this.state.isEditable}
          value={item.selectedValue}
          onChangeText={(value, dropDownIndex) => {
            // console.log("DropDownWithTextInput",value,dropDownIndex,index);
            if (item.hint === 'Unit Type') {
              let values = this.state.projectData;
              values[section].data[0][index].selectedValue =
                item.dropDownData[dropDownIndex].addressUnitType;
              // console.log("Unit Type",  values[section].data[0][index].selectedValue)
              this.setState({projectData: values});
            }
          }}
          onClickClear={() => {
            let values = this.state.projectData;
            values[section].data[0][index].selectedValue = "";
            this.setState({projectData: values});
          }}
        />
        <TextInput
          style={[
            styles.textFontStyles,
            {width: '50%', borderRightWidth: 1, borderColor: 'lightgrey'},
          ]}
          placeholder={item.secondHint}
          multiline={false}
          no={1}
          value={item.value}
          editable={this.state.isEditable}
          onChangeText={text => {
            // console.log('DropDownWithTextInput', text, index);
            this._handleChangeStates(section, index, text);
          }}
        />
      </View>
    );
  }

  _handleChangeStates(sectionIndex, itemIndex, data) {
    let values = this.state.projectData;
    values[sectionIndex].data[0][itemIndex].value = data;
    this.setState({projectData: values});
    //   console.log(JSON.stringify(this.state.projectData[0].data[0][0].value))
  }

  _renderItem(item, index, section) {
    // console.log(section.index)
    switch (item.type) {
      case 'dropDown':
        return this._renderDropdown(item, index, section.index);
      case 'textinput':
        return this._renderTextInput(item, index, section.index);
      case 'dateInputs':
        return this._renderDateButtons(item);
      case 'textInputWithDropDown':
        return this._renderTextInputWithDropDown(item, index, section.index);
      case 'DropDownWithTextInput':
        return this._renderDropDownWithTextInput(item, index, section.index);
>>>>>>> 2872b900b6a31489a20b05f951273bcaab766ae7
    }
  }
}
