import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet,ToastAndroid,TouchableHighlight } from 'react-native';
import { Card, Button, Avatar } from 'react-native-material-design';
import styles from './styles';
import TabBar from '../core/TabBar';
import { ProfileTabBar } from './tabIcons';
import { mApi } from '../../libs/Api';
// var Swipeout = require('react-native-swipeout');



class HealthReadItems extends Component {

  static contextTypes = {
    openDrawer: React.PropTypes.func,
    store: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      healthReadData: null,
      loaded: false,
      isRead:false
    };

    this.handleNotifications = this.handleNotifications.bind( this );
  }

  handleNotifications(){
    this.loadData();
  }

  loadData(){
    var that = this;
    var id = this.props.id;
    var url = 'http://192.168.0.13:3000/SubCategories?categoryId='+id;
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson:--- ',responseJson[0].data);
        that.setState({
          healthReadData: responseJson[0].data,
          loaded: true
        });
      })
      .catch((error) => {
        console.error(error);
      });
    // mApi.getHealthReadStuff(1)
    //   .then(function(result) {
    //     console.log('result came:-- ', result);
        // that.setState({
        //   allAlerts: result.data.items,
        //   loaded: true
        // });
      // })
  }

   componentDidMount() {
    this.loadData();
    // this.subscription = mApi.emitter.addListener( 'onReceiveNotification', this.handleNotifications );
  }

   componentWillUnmount(){
    //  if( mApi.emitter && this.subscription ) {
    //    mApi.emitter.removeSubscription( this.subscription );
    //  }
   }
  Read(alert){
    console.log("in read................");
  }

  renderSection( alert ){
    let imageUrl = alert.data.imageUrl;
    if( imageUrl ){
      return (
        <Image
          resizeMode="contain"
          source={{ uri: imageUrl }}
          style={{ backgroundColor: '#FDE0DD', margin: 10, height: 200}} />
        );
      }
  }


// style={[styles.base, { backgroundColor: '#fff' }]}
  render(alerts) {

    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    else if(!this.state.healthReadData.length){
      return this.renderNoLoadingView();
    }
    console.log('props:-- ', this.props);
    console.log('categoryData:-- ', this.props.id);
    console.log('data:--- ', this.state.healthReadData);
    return (

      <View style={{ flex: 1 }}>
      { this.state.healthReadData.map((data => (
        <Image
          resizeMode="contain"
          source={{ uri: data.image }}
          style={{ backgroundColor: '#FDE0DD', margin: 10, height: 200}} />
      )))

      }

      </View>

    );
  }

   renderLoadingView() {
    return (
      <View style={ styles.gallerycontainer }>
        <Text>
          Fetching ...
        </Text>
      </View>
      );
  }

  renderNoLoadingView() {
    return (
      <View style={ styles.gallerycontainer }>
        <Text>
          No Data found.
        </Text>
      </View>
      );
  }

}


const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  alertMessage: {
    color: '#8f8f8fff',
    marginLeft: 10
  },
  alertTitle: {
    color: '#8f8f8fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
  },
});
// { this.state.allAlerts.map((alert) => (
//   <Swipeout key={ alert.id } right={[{text: 'Delete',backgroundColor: 'red',onPress:this.deleteAlert.bind(this,alert) }
// ]} autoClose='true' backgroundColor= 'transparent'>
// <View style={{borderColor: '#E1E1E1', borderStyle: 'solid', borderWidth: 1, margin: 2 }}>
//   <Card style={[styles.base, { backgroundColor: '#fff', padding: 10, margin: 1 }]}>
//     <Card.Body >
//       <Text onPress={ this.Read.bind(this,alert) } style={ componentStyles.alertTitle }> { alert.data.title } </Text>
//       { this.renderSection( alert ) }
//       <Text onPress={ this.Read.bind(this,alert) } style={ componentStyles.alertMessage }> { alert.message } </Text>
//     </Card.Body>
//   </Card>
//   </View>
//  </Swipeout>
// )) }
module.exports = HealthReadItems;
