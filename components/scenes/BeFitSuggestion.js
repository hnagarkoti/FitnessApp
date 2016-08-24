'use strict'

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  smalltext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  image: {
    flex: 1,
  }
})

 class BeFitSuggestion extends React.Component {

   constructor(){
     super();
     this.state = {
       firstTab: true,
       secondTab: false,
       thirdTab: false
     }
   }

   _onMomentumScrollEnd(e, state, context) {
   // you can get `state` and `this`(ref to swiper's context) from params
   console.log(state, context.state);
   console.log('index:--- ', state.index);
   console.log('state:- ', this.state);
   if(state.index == 0){
     this.setState({
       firstTab: true,
       secondTab: false,
       thirdTab: false
     });
   }
   else if(state.index == 1){
     this.setState({
       firstTab: false,
       secondTab: true,
       thirdTab: false
     });
   }
   else if(state.index == 2){
     this.setState({
       firstTab: false,
       secondTab: false,
       thirdTab: true
     });
   }
   else{
     this.setState({
       firstTab: true,
       secondTab: false,
       thirdTab: false
     });
   }
 }

  render() {
    return (
      <View>
        <Swiper style={styles.wrapper} height={200} horizontal={true} onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)} >
          <View style={styles.slide1}>
            <Text style={styles.text}>Start A Habbit</Text>
            <Text style={styles.smalltext}>Popular</Text>
          </View>

          <View style={styles.slide2}>
            <Text style={styles.text}>Start A Habbit</Text>
            <Text style={styles.smalltext}>Diet</Text>
          </View>

          <View style={styles.slide3}>
            <Text style={styles.text}>Start A Habbit</Text>
            <Text style={styles.smalltext}>Fitness</Text>
          </View>
        </Swiper>

        { (this.state.firstTab == true) && (this.state.secondTab == false) && (this.state.thirdTab == false) ? <View style={{ backgroundColor: 'red' }}><Text>Popular Stuff</Text></View> : undefined}
        { (this.state.firstTab == false) && (this.state.secondTab == true) && (this.state.thirdTab == false) ? <View style={{ backgroundColor: 'green' }}><Text>Diet Stuff</Text></View> : undefined}
        { (this.state.firstTab == false) && (this.state.secondTab == false) && (this.state.thirdTab == true) ? <View style={{ backgroundColor: 'yellow' }}><Text>Fitness Stuff</Text></View> : undefined}

      </View>
    )
  }
}



module.exports = BeFitSuggestion;
