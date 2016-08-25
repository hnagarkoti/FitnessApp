import React, { Component } from 'react';
import { Card, Button, Avatar } from 'react-native-material-design';
import { mApi } from '../../libs/Api';
import { goto, goBack } from '../../libs/routerUtils';
import Link from '../core/Link';
import ButtonLink from '../core/ButtonLink';
import styles from './styles';
import TabBar from '../core/TabBar';
import { LoginTabBar } from './tabIcons';
import ReactNative from 'react-native';
const { StyleSheet, Text, TouchableHighlight, TextInput, View, Image, Dimensions, ToastAndroid } = ReactNative;
import ProgressBarAndroid  from 'ProgressBarAndroid';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from '../core/Spinner';
var {width, height} = Dimensions.get('window');

var demo_img_url = 'http://www.myfashionlife.com/wp-content/uploads/2015/10/44.jpg';
class LoginView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>

            <Image style={{width: width, height: (height - height/8.5)}} source={{uri: demo_img_url}}>
              <Text style={{color: '#fff', fontSize: 100, fontWeight: 'bold'}}>Fitness is all about</Text>
            </Image>


        <TabBar style={ componentStyles.TabBar } items={ LoginTabBar(this.context.store) }  />
      </View>
    );
  }

}
LoginView.contextTypes = {
  store: React.PropTypes.object.isRequired
}
const componentStyles = StyleSheet.create({


  TabBar: {
    // color: 'black',
    backgroundColor: 'orange'
  },
  image: {
    width: width,
    height: (height - height/5.5),
    borderColor: '#ff0000', borderStyle: 'solid', borderWidth: 2, // For Testing..
  },

  mainContainer: {
    // justifyContent: 'center',
    // flex: 2,
    backgroundColor: 'white',
    // padding: 30,
    borderStyle: 'solid', borderWidth: 2, borderColor: '#dabe00ff',
  }
});

module.exports = LoginView;
