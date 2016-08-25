// 'use strict';

import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ListView } from 'react-native';
import { Card, Button, Avatar, Drawer, Divider, Subheader, COLOR, TYPO } from 'react-native-material-design';
import Spinner from '../core/Spinner';
import { mApi } from '../../libs/Api';
import Link from '../core/Link';
import ButtonLink from '../core/ButtonLink';
// import styles from './styles';
import NavBar from '../core/NavBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabBar from '../core/TabBar';
import { goto, goBack } from '../../libs/routerUtils';
import { ProfileTabBar, HomePageTabBar } from './tabIcons';
import RankedFriends from './RankedFriends';

var DATA = [{
  'id': 1,
  'name': 'Snehal',
  'rank':1,
  'image': 'https://pixabay.com/static/uploads/photo/2010/12/22/10/48/doll-3925_960_720.jpg'
},
  {
    'id': 2,
    'name': 'preethi',
    'rank':2,
    'image': 'http://hdimagesnew.com/wp-content/uploads/2015/11/cute-dolls-pics-9.jpg'
  },
  {
    'id': 3,
    'name': 'Hitha',
    'rank':3,
    'image': 'https://s-media-cache-ak0.pinimg.com/564x/42/2c/cd/422ccd63bc4dffa943da8340bdddda7b.jpg'
  },
  {
    'id': 4,
    'name': 'vinay',
    'rank':4,
    'image': 'http://hdimagesnew.com/wp-content/uploads/2015/11/1446565203_Purple-flower-Wallpapers-1.jpg'
  },{
    'id': 3,
    'name': 'Hitha',
    'rank':3,
    'image': 'https://s-media-cache-ak0.pinimg.com/564x/42/2c/cd/422ccd63bc4dffa943da8340bdddda7b.jpg'
  },
  {
    'id': 4,
    'name': 'vinay',
    'rank':4,
    'image': 'http://hdimagesnew.com/wp-content/uploads/2015/11/1446565203_Purple-flower-Wallpapers-1.jpg'
  },{
    'id': 3,
    'name': 'Hitha',
    'rank':3,
    'image': 'https://s-media-cache-ak0.pinimg.com/564x/42/2c/cd/422ccd63bc4dffa943da8340bdddda7b.jpg'
  },
  {
    'id': 4,
    'name': 'vinay',
    'rank':4,
    'image': 'http://hdimagesnew.com/wp-content/uploads/2015/11/1446565203_Purple-flower-Wallpapers-1.jpg'
  },{
    'id': 3,
    'name': 'Hitha',
    'rank':3,
    'image': 'https://s-media-cache-ak0.pinimg.com/564x/42/2c/cd/422ccd63bc4dffa943da8340bdddda7b.jpg'
  },
  {
    'id': 4,
    'name': 'vinay',
    'rank':4,
    'image': 'http://hdimagesnew.com/wp-content/uploads/2015/11/1446565203_Purple-flower-Wallpapers-1.jpg'
  }];


class FriendsList extends React.Component {

  static contextTypes = {
    openDrawer: React.PropTypes.func,
    store: React.PropTypes.object.isRequired,
  };
 constructor() {
    super();
    this.state = {
      friendsData: null,
      loaded: false
    };
  }
  componentDidMount() {
    this.setState({
      friendsData: DATA,
      loaded: true
    });
  }
  render() {
     if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <View style={{flex: 1}}>
       
        <View style={{flex: .2}}>
        <RankedFriends/>
        </View>
        <View style={{flex: .1,backgroundColor: '#fff',alignItems:'center',justifyContent: 'center'}}><Text style={{fontSize: 22,fontWeight:'bold'}}>Ranking</Text></View>
        <View style={{flex: .4}}>
         <ScrollView style={{ backgroundColor: '#fff' }}>
           {this.state.friendsData.map((friends)=>(
            
            <View style={{backgroundColor: '#fff',flexDirection: 'row',padding: 12}}>
          <Image style={{width: 50,height:50,borderRadius:10}} source={{uri: friends.image}}/> 
           <Text> {friends.name}</Text> 
          </View>
          
            
        ))}
          </ScrollView>
        </View>
    
      </View>
      );
  }

  renderLoadingView() {
    return (
      <View style={ { flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' } }>
         <Text> Loading friends...</Text>
      </View>
      );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

module.exports = FriendsList;
