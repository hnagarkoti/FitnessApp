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
      weekValues: this.getWeek(d),
      offset: 0
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

  getLastSunday(d) {
     d = new Date(d);
     var day = d.getDay(),
         diff = d.getDate() - day; // adjust when day is sunday
     return new Date(d.setDate(diff));
   }

  handleScroll(event: Object) {
    console.log('handleScroll');
   console.log('x:- ',event.nativeEvent.contentOffset.x, 'y:- ',event.nativeEvent.contentOffset.y);
   var currentOffset = event.nativeEvent.contentOffset.x;
        var direction = currentOffset > this.offset ? 'left' : 'right';
    this.state.offset = currentOffset;
    console.log(direction);
  //  if(event.nativeEvent.contentOffset.x <= 0){
  //    console.log('x val:-- ', event.nativeEvent.contentOffset.x);
   //
   //
    //   var oneWeekAgo = this.getLastSunday(new Date());
    //   var newSundayDate = new Date(oneWeekAgo.setDate(oneWeekAgo.getDate() - 7));
    //   console.log('newSundayDate:-- ', newSundayDate);
    //  var newPreviousWeekData = this.getWeek(newSundayDate);
    //  console.log('output:-- ', newPreviousWeekData);
  //  }
 };

  render() {
    var url1 = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuNN0jlYeNA5B1YlD4k6eEMQtDAQA4rl3Pp7D9rXy1Myp-PhVJNQ"
    return (
      <ScrollView>
          <ScrollView horizontal={true}>
          <Image source="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuNN0jlYeNA5B1YlD4k6eEMQtDAQA4rl3Pp7D9rXy1Myp-PhVJNQ" />

            <View>
                <Text style={{fontSize:20}}>Swipe me left right</Text>
            </View>
            <View>
                <Image source="https://ukofit.files.wordpress.com/2016/08/what-women-should-wear-to-the-gym-21.jpg" />
                <Text style={{fontSize:20}}>Swipe me left right 2</Text>
            </View>
            <View>
                <Image source={require('../../assests/images/cover.jpg')} />
                <Text style={{fontSize:20}}>Swipe me left right 3</Text>
            </View>
          </ScrollView>
          <ScrollView horizontal={true}>
            <View>
                <Image source={require('../../assests/images/cover.jpg')} />
                <Text style={{fontSize:20}}>Yoga1</Text>
            </View>
            <View>
                <Image source={require('../../assests/images/cover.jpg')} />
                <Text style={{fontSize:20}}>Yoga2</Text>
            </View>
            <View>
                <Image source={require('../../assests/images/cover.jpg')} />
                <Text style={{fontSize:20}}>Yoga3</Text>
            </View>
          </ScrollView>

        </ScrollView>
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

module.exports = HomeContent;
