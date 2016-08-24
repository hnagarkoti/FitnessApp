// 'use strict';

import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
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
var img_url = 'http://www.123dentist.com/wp-content/uploads/2012/07/oral-health-care-and-pregnancy.jpg';
class Blog extends React.Component {

  static contextTypes = {
    openDrawer: React.PropTypes.func,
    store: React.PropTypes.object.isRequired,
  };

  constructor(){
    super();
    this.state = {
      currentScreenWidth: width,
      currentScreenHeight: height
    }
  };

  // handleRotation(event) {
  //   var layout = event.nativeEvent.layout
  //   this.setState({currentScreenWidth: layout.width, currentScreenHeight: layout.height })
  // };

  calculatedSize() {
    var size = this.state.currentScreenWidth
    return {width: size, height: size}
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image source={require('../../assests/images/oral-health-care-and-pregnancy.jpg')} style={{height: height/(3.8), width: width}} />

        <View>
              <Text style={cs.text} >
                While everyone may need life insurance, they do not ask for it. Many believe life insurance is difficult to understand, the selling process is pushy or cumbersome
                and the benefits are not really useful. That's why we offer you simple, easy to understand life insurance plans with real benefits at a good price, backed
                up by efficient service. We do believe taking care of our customers' interests is the best way to promote our business.
              </Text>
              <Text  style={cs.text} >
                One of the youngest life insurers in India, IndiaFirst is paving the way for a brave new world of insurance. Think New, Be Honest, Be Helpful and Do More – are the
                four guiding values that help us ‘Do the First' and set benchmarks in productivity, financial efficiency and customer service through innovative use of technology.
                Launched nationwide in March, 2010 by Shri Pranab Mukherjee, Former Minister of Finance, Government of India, we provide you a variety of health, security
                (term insurance), savings and wealth (investment) products.
              </Text>
              <Text style={cs.text} >
                One of the youngest life insurers in India, IndiaFirst is paving the way for a brave new world of insurance. Think New, Be Honest, Be Helpful and Do More – are the
                four guiding values that help us ‘Do the First' and set benchmarks in productivity, financial efficiency and customer service through innovative use of technology.
                Launched nationwide in March, 2010 by Shri Pranab Mukherjee, Former Minister of Finance, Government of India, we provide you a variety of health, security
                (term insurance), savings and wealth (investment) products.
              </Text>
              <Text  style={cs.text} >
                One of the youngest life insurers in India, IndiaFirst is paving the way for a brave new world of insurance. Think New, Be Honest, Be Helpful and Do More – are the
                four guiding values that help us ‘Do the First' and set benchmarks in productivity, financial efficiency and customer service through innovative use of technology.
                Launched nationwide in March, 2010 by Shri Pranab Mukherjee, Former Minister of Finance, Government of India, we provide you a variety of health, security
                (term insurance), savings and wealth (investment) products.
              </Text>
              <Text  style={cs.text} >
                One of the youngest life insurers in India, IndiaFirst is paving the way for a brave new world of insurance. Think New, Be Honest, Be Helpful and Do More – are the
                four guiding values that help us ‘Do the First' and set benchmarks in productivity, financial efficiency and customer service through innovative use of technology.
                Launched nationwide in March, 2010 by Shri Pranab Mukherjee, Former Minister of Finance, Government of India, we provide you a variety of health, security
                (term insurance), savings and wealth (investment) products.
              </Text>
              <Text style={cs.text} >
                One of the youngest life insurers in India, IndiaFirst is paving the way for a brave new world of insurance. Think New, Be Honest, Be Helpful and Do More – are the
                four guiding values that help us ‘Do the First' and set benchmarks in productivity, financial efficiency and customer service through innovative use of technology.
                Launched nationwide in March, 2010 by Shri Pranab Mukherjee, Former Minister of Finance, Government of India, we provide you a variety of health, security
                (term insurance), savings and wealth (investment) products.
              </Text>
            </View>

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

}

const cs = StyleSheet.create({
  mainContentOfAboutUs: {
    flex: 1,
    backgroundColor: '#fff',
    // borderColor: '#001088', borderStyle: 'solid', borderWidth: 6, // For Testing.
  },
  subContainer: {
    flex: 1,
    // borderColor: '#000088', borderStyle: 'solid', borderWidth: 6, // For Testing.
  },
  logoWrapper:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:
  {
    fontSize :13,
    margin:20,
  }
})

module.exports = Blog;
