'use strict';

import React from 'react';
import {
  Text,
  Image,
  Dimensions,
  StyleSheet,
  View,
  Modal,
  TouchableHighlight,
  TextInput
} from 'react-native';
var {width, height} = Dimensions.get('window');
import Button from 'react-native-button';
import FBLogin from './FBLogin';
// import GoogleLogin from './GoogleLogin';


import CheckBox from 'react-native-checkbox';
import { goto, goBack } from '../../libs/routerUtils';

var demo_img_url = 'http://www.myfashionlife.com/wp-content/uploads/2015/10/44.jpg';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      checked: true
    };
  };
  _handlePress() {
    console.log('Pressed!');
  };

  render(){
    return (
      <View>
        <Image style={styles.image} source={{uri: demo_img_url}}>
        </Image>
        <View style={{justifyContent: 'center', padding: 30}}>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            placeholder="UserName"
            value={this.state.text}
          />
          <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          placeholder="Password"
          value={this.state.text}
        />


        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <CheckBox
          label='Accept Terms & Conditions'
          checked={this.state.checked}
          onChange={(checked) => this.setState({ checked: !(this.state.checked) })}
          />

        </View>

        <View style={{justifyContent: 'center', padding: 30}}>
          <Button
            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'orange'}}
            style={{fontSize: 20, color: 'green'}}
            onPress={() => goto(this.context.store, 'Welcome')}>
            Sign In!
          </Button>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Or Connect with
          </Text>

        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 50}}>

         <FBLogin/>
        </View>
        <View style={{flexDirection: 'row'}}>
        {/* Goggle login Button */}
        </View>


      </View>
    )
  }
}

SignUp.contextTypes = {
  // openDrawer: React.PropTypes.func,
  store: React.PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  row: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'flex-start'
  },
  image: {
    // margin: 2,
    // width: width,
    // height: (height - height/1.5),
    // borderColor: '#ff0000', borderStyle: 'solid', borderWidth: 2, // For Testing..
    // borderRadius: 70,
    // width: 140,
    // height: 140
  }
})
module.exports = SignUp;
