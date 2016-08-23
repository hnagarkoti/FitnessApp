import React, { Component } from 'react';
import { View, Image, Text, ToastAndroid, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { Card, Button, Avatar, Drawer, Divider, Subheader, COLOR, TYPO } from 'react-native-material-design';
import styles from './scenes/styles';
// import About from './scenes/About/About.js';
// // import Profile from './scenes/User/ProfileContent';
// import LoginView from './scenes/LoginView';
import { goto, goBack, reset } from '../libs/routerUtils';
// import Alert from './scenes/Alert';
// import { logout } from '../libs/session';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { mApi } from '../libs/Api';
var window = Dimensions.get('window');
var imgURL = 'http://pickaface.net/includes/themes/clean/img/slide2.png';
let iconClr = '#ED1C26';

const cs = StyleSheet.create({
  header:{
     paddingTop: -15,
     position:'relative',
     right:25,
     top:25,
     backgroundColor:'#ffffffb1',
     width:260,
     padding:14,
      borderWidth: 5, 
      borderBottomColor: '#ED1C26',
      borderTopColor: '#fff0',
      
    
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  logoutButton: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ED1C26',
  },
  sectionItem: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionContainer: {

  },
  icon: {
    color: iconClr,
    fontSize: 20,
    marginLeft: 5,
  },

  img: {
    margin: 10,
   
    height: 100,
  },

  itemText: {
    flex: 1,
    marginLeft: 50,
    color: iconClr,
    fontSize: 15,
    fontWeight: '400',
  },
  pc: {
    height: 70,
    width: 70,
    borderRadius: 35,
     borderColor: '#880088', borderStyle: 'solid', borderWidth: 2, // For Testing..
  }
})



class Section extends Component {

  renderItem(props, i) {
    return (
      <TouchableHighlight
        onPress={ props.onPress}
        key={ 'ooo-' + i }
        underlayColor="#99d9f4">
        <View
          style={ cs.sectionItem }>
          <Icon style={cs.icon} name={props.icon } ></Icon>
          <Text style={cs.itemText }> { props.value }</Text>
        </View>
      </TouchableHighlight>
      );
  }

  render(){
    console.log('this.props.items for section :---- ', this.props.items);
    return (
      <View style={{ flex: .7}}>
        <View style={ [cs.sectionContainer] }>
          { this.props.items.map((v, i) => this.renderItem(v, i)) }
        </View>
      </View>
    );
  }
}

class BottomSection extends Component {
  
renderItem(props, i) {
    return (
      <TouchableHighlight
        onPress={ props.onPress}
        key={ 'ooo-' + i }
        underlayColor="#99d9f4">
        <View
          style={ cs.sectionItem }>
          <Icon style={cs.icon} name={props.icon } ></Icon>
          <Text style={cs.itemText }> { props.value }</Text>
        </View>
      </TouchableHighlight>
      );
  }

  render(){
    return (
      <View style={{ flex: .7 }}>
      <View style={ [cs.sectionContainer] }>
        { this.props.items.map((v, i) => this.renderItem(v, i)) }
      </View>
      
      </View>
    );
  }

}


export default class Sidebar extends Component {

  constructor(){
    super();
    this.state = {
      // profilePicture: mApi.user && mApi.user.profilePicture
      profilePicture: imgURL
    };
  }

  logout() {
    logout().then(() => {
      reset(this.context.store, 'loginView');
    });
  }

  favourite() {
    // goto(this.context.store, 'favourite');
  }
  goto(page) {
    this.context.closeDrawer();
    goto(this.context.store, page);
  }

  handleProfilePicChange(){
    this.setState({
      // profilePicture: mApi.user.profilePicture
      profilePicture: imgURL
    });
  }

  componentDidMount() {
    this.subscription = mApi.emitter.addListener( 'onProfilePicChange', this.handleProfilePicChange.bind(this) );
  }

  componentWillUnmount(){
    if( mApi.emitter && this.subscription ) {
      mApi.emitter.removeSubscription( this.subscription );
    }
  }

  render() {
    return (
      <View style={{ flex: 1}}>
      <Drawer theme='light'>
          
  
        <Drawer.Header
          image={<Image source={require('./../assests/images/nav.jpg') }/>}>
          
          <TouchableHighlight
            onPress={() => { this.goto('profile') } }
            underlayColor="#99d9f4">
            <Image style={{marginTop: 5, height: 70, width: 70, borderRadius: 35}} source={require('../assests/images/ic.png')}/>
            
          </TouchableHighlight>
          <View style={[cs.header,{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',paddingHorizontal: 16}]}>
            <Text style={[styles.textOfWelcomeDrawer, COLOR.googleRed700, TYPO.paperFontTitle,]}>Hemant </Text>
          </View>
        </Drawer.Header>

        <Section
          items={[
            {
              icon: '',
              value: 'Dashboard',
              onPress: () => { this.goto('Dashboard') },
              onLongPress: () => this.goto('Dashboard')
            },

            {
              icon: 'person',
              value: 'Active Challenges',
              onPress: () => { this.goto('ActiveChallenges') },
              onLongPress: () => this.goto('ActiveChallenges')
            },
            {
              icon: 'photo-library',
              value: 'Guided Session',
              label: '8',
              onPress: () => { this.goto('GuidedSession') },
              onLongPress: () => this.goto('GuidedSession')
            },

            {
              icon: 'notifications',
              value: 'Leaderboard',
              label: '8',
              onPress: () => { this.goto('Leaderboard') },
              onLongPress: () => this.goto('Leaderboard')
            },
            {
              icon: 'settings',
              value: 'Challenge History',
              label: '8',
              onPress: () => { this.goto('ChallengeHistory') },
              onLongPress: () => this.goto('ChallengeHistory')
            },
            
            {
              icon: 'help',
              value: 'Power Up',
              label: '8',
              onPress: () => { this.goto('Powerup') },
              onLongPress: () => this.goto('Powerup')
            },
            {
              icon: 'settings',
              value: 'Friends',
              label: '8',
              onPress: () => { this.goto('Friends') },
              onLongPress: () => this.goto('Friends')
            },
            {
              icon: 'settings',
              value: 'Blog',
              label: '8',
              onPress: () => { this.goto('Blog') },
              onLongPress: () => this.goto('Blog')
            }
            ]}
          />
          <Divider style={{ marginTop: 200 }} />
          
          <BottomSection
            items={[{
                        icon: 'exit-to-app',
                        value: 'Logout',
                        label: '8',
                        onPress: () => this.goto('Welcome'),
                        onLongPress: () => this.goto('Welcome')
                    }]}
          />
         
        </Drawer>
        </View>
        );
    }
}
var styles1 = StyleSheet.create({
  drawer:{
    width:200
  },
});
Sidebar.contextTypes = {
  store: React.PropTypes.object.isRequired,
  openDrawer: React.PropTypes.func,
  closeDrawer: React.PropTypes.func,
};

