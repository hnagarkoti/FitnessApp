// 'use strict';

import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ListView, Dimensions } from 'react-native';
import { Card, Button, Avatar, Drawer, Divider, Subheader, COLOR, TYPO } from 'react-native-material-design';
import Spinner from '../core/Spinner';
import { mApi } from '../../libs/Api';
import Link from '../core/Link';
import ButtonLink from '../core/ButtonLink';
import styles from './styles';
import NavBar from '../core/NavBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabBar from '../core/TabBar';
import { goto, goBack } from '../../libs/routerUtils';
import { ProfileTabBar, HomePageTabBar } from './tabIcons';

var {width, height} = Dimensions.get('window');

class HomeContent extends React.Component {

  static contextTypes = {
    openDrawer: React.PropTypes.func,
    store: React.PropTypes.object.isRequired,
  };

  constructor(){
    super();
    var d = new Date();
    this.state = {
      weekValues: this.getWeek(d)
    }
  }


  componentDidMount(){
    // console.log('componentDidMount');
    // var date = new Date();
    // console.log('data:--------------- ', date);
  }

  onContentSizeChange(contentWidth, contentHeight){
    console.log('onContentSizeChange:--- ', contentWidth, 'height ', contentHeight);
  }

  onScroll(){
    console.log('onScroll called');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
          <View style={{height: height/10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', flexWrap: 'nowrap', alignContent: 'space-between' }}>
          {this.state.weekValues.map((val, i) => (

            <DateScrolViewPart val={val} />

          ))}

          </View>
        </ScrollView>
        <View style={{ borderColor: 'gray', borderStyle: 'solid', borderWidth: 2 }}></View>
      </View>
      );
  }

  renderLoadingView() {
    return (
      <View style={ { flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Spinner style={{alignSelf: 'auto'}} visible={ !this.state.visible } />
      </View>
      );
  }

  getWeek(d1){
    var out = [];
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    for(var i=0; i< 7; i++){
      if(i==0){
        d = new Date(d1);
        var day = d.getDay(),
        diff = d.getDate() - day;
        var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }else if( i== 1){
         d = new Date(d1);
         var day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
         var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }else if( i== 2){
         d = new Date(d1);
         var day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -5: 2); // adjust when day is sunday
         var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }else if( i== 3){
         d = new Date(d1);
         var day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -4: 3); // adjust when day is sunday
         var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }else if( i== 4){
         d = new Date(d1);
         var day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -3: 4); // adjust when day is sunday
         var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }else if( i== 5){
         d = new Date(d1);
         var day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -2: 5); // adjust when day is sunday
         var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }else if( i== 6){
         d = new Date(d1);
         var day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -1: 6); // adjust when day is sunday
         var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }
    }
    return out;
  };
}

class DateScrolViewPart extends React.Component {
  render(){
    return(
      <View style={{alignSelf: 'center'}}>
        <View style={{ backgroundColor: 'gray', borderRadius: 6, width: 12, height: 12}}>
        </View>
        <Text>{ this.props.val.getDayName }</Text>
      </View>
    )
  }
}

module.exports = HomeContent;
