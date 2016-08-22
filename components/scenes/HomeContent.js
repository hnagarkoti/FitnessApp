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
// import { ProfileTabBar, HomePageTabBar } from './tabIcons';

var GridView = require('react-native-grid-view');
var ITEMS_PER_ROW = 2;

var Movie = React.createClass({
  render: function() {
    return <View style={ styles.gridViewImage } key={ 'm_' + this.props.categoryData.id }>
             <Link to="product" params={ { category: this.props.categoryData } }>
             <Image source={ { uri: this.props.categoryData.icon } } style={ styles.gridViewthumbnail } />
             <View key={ 'v_' + this.props.categoryData.id }>
               <Text style={ styles.gridViewtitle } numberOfLines={ 2 }>
                 { this.props.categoryData.name }
               </Text>
             </View>
             </Link>
           </View>;
  },
});

class HomeContent extends React.Component {

  static contextTypes = {
    openDrawer: React.PropTypes.func,
    store: React.PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = {
      dataSource: null,
      loaded: false,
      sessionLoaded: true,
    };
    this.loadData();
  }

  loadData() {
    var that = this;
    mApi.getCategories()
      .then(function(result) {
        that.setState({
          dataSource: result.data.items,
          loaded: true
        });
      });
  }

  render() {
    return (
      <View style={ styles.container }>
        <NavBar navTitle="HOME" navLeft={ <Icon name="menu" size={ 30 } color="#fff" onPress={ this.context.openDrawer } /> } />
        { this.renderContent() }
        <TabBar items={ HomePageTabBar(this.context.store)} />
      </View>
      );
  }

  renderContent() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <GridView items={ this.state.dataSource } itemsPerRow={ ITEMS_PER_ROW } renderItem={ this.renderItem } style={ styles.gridlistView } />
      );
  }

  renderLoadingView() {
    return (
      <View style={ { flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Spinner style={{alignSelf: 'auto'}} visible={ !this.state.visible } />
      </View>
      );
  }

  renderItem(item) {
    return <Movie categoryData={ item } key={ 'tes' + item.id } />;
  }
}


module.exports = HomeContent;
