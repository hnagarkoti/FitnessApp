import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import HealthReadItems from './HealthReadItems';

class HealthRead extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      TabJson: []
    };

  };

  getTabsData() {
    var that = this;
    return fetch('http://192.168.0.13:3000/HealthRead')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson:--- ',responseJson[0].categories);
        that.setState({
          TabJson: responseJson[0].categories,
          loaded: true
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount(){
    var result = this.getTabsData();
    if(result){
      console.log('result:------ ',result);
    }
  }


  render(){
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    else{
      console.log('this.state.result:----- ',this.state.result);
      return(
        <View style={{flex: 1, flexDirection: 'row'}}>
          <ScrollableTabView
            tabBarUnderlineColor={'white'}
            tabBarBackgroundColor={'#206040'}
            tabBarActiveTextColor={'white'}
            tabBarInactiveTextColor={'#E4E7E4'}
            tabBarTextStyle={{fontFamily: 'Roboto', fontSize: 16}}
            scrollWithoutAnimation={true}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}
          >
          {this.state.TabJson.map((val) =>(
            <ScrollView tabLabel={val.name} key={val.id}>
              <HealthReadItems id={val.id} />
            </ScrollView>

            ))}



          </ScrollableTabView>
        </View>
      )
    }
  }
  renderLoadingView() {
    return (
      <View style={ { flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Text>Loading app...</Text>
      </View>
      );
  }
}


module.exports = HealthRead;
