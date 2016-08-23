// 'use strict';

import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ListView } from 'react-native';
import { Card, Button, Avatar, Drawer, Divider, Subheader, COLOR, TYPO } from 'react-native-material-design';
import Spinner from '../core/Spinner';
import { mApi } from '../../libs/Api';
import Link from '../core/Link';
import ButtonLink from '../core/ButtonLink';
import styles from './styles';
import NavBar from '../core/NavBar';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons';
import TabBar from '../core/TabBar';
import { goto, goBack } from '../../libs/routerUtils';
import { ProfileTabBar, HomePageTabBar } from './tabIcons';





class HomeContent extends React.Component {

  static contextTypes = {
    openDrawer: React.PropTypes.func,
    store: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={ styles.container }>
          <View>
            <Text>
              Hello
            </Text>
          </View>
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


}


module.exports = HomeContent;
