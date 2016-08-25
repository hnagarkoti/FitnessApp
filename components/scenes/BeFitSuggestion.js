'use strict'

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
var _ = require('lodash');
var {width, height} = Dimensions.get('window');

var IMAGES_PER_ROW = 3;
var TabData = {
	"popular": [{
		"id": 1,
		"img": "https://s-media-cache-ak0.pinimg.com/736x/d2/6c/51/d26c511a38b62ec9a2faf464b798e755.jpg",
		"headerText": "Popular 1"
	}, {
		"id": 2,
		"img": "http://www.medicalnewstoday.com/content/images/articles/309/309741/a-woman-eating-a-block-of-dark-chocolate.jpg",
		"headerText": "Popular 2"
	}, {
		"id": 3,
		"img": "https://s-media-cache-ak0.pinimg.com/736x/d2/6c/51/d26c511a38b62ec9a2faf464b798e755.jpg",
		"headerText": "Popular 3"
	}, {
		"id": 4,
		"img": "http://www.popsci.com/sites/popsci.com/files/styles/large_1x_/public/sony-smartwatch3.jpg?itok=mUPK08QY",
		"headerText": "Popular 4"
	}, {
		"id": 5,
		"img": "http://www.medicalnewstoday.com/content/images/articles/309/309741/a-woman-eating-a-block-of-dark-chocolate.jpg",
		"headerText": "Popular 5"
	}, {
		"id": 6,
		"img": "http://www.popsci.com/sites/popsci.com/files/styles/large_1x_/public/sony-smartwatch3.jpg?itok=mUPK08QY",
		"headerText": "Popular 6"
	}, {
		"id": 7,
		"img": "http://www.top10homeremedies.com/wp-content/uploads/2014/10/healthy-snacks-opt.jpg",
		"headerText": "Popular 7"
	}, {
		"id": 8,
		"img": "http://www.medicalnewstoday.com/content/images/articles/309/309741/a-woman-eating-a-block-of-dark-chocolate.jpg",
		"headerText": "Popular 8"
	}, {
		"id": 9,
		"img": "http://www.top10homeremedies.com/wp-content/uploads/2014/10/healthy-snacks-opt.jpg",
		"headerText": "Popular 9"
	}],
	"fitness": [{
		"id": 1,
		"img": "http://www.medicalnewstoday.com/content/images/articles/309/309741/a-woman-eating-a-block-of-dark-chocolate.jpg",
		"headerText": "Fitness 1"
	}, {
		"id": 2,
		"img": "http://www.medicalnewstoday.com/content/images/articles/309/309741/a-woman-eating-a-block-of-dark-chocolate.jpg",
		"headerText": "Fitness 2"
	}, {
		"id": 3,
		"img": "http://www.medicalnewstoday.com/content/images/articles/309/309741/a-woman-eating-a-block-of-dark-chocolate.jpg",
		"headerText": "Fitness 3"
	}],
	"diet": [{
		"id": 1,
		"img": "http://www.medicalnewstoday.com/content/images/articles/309/309741/a-woman-eating-a-block-of-dark-chocolate.jpg",
		"headerText": "Diet 1"
	}, {
		"id": 2,
		"img": "https://s-media-cache-ak0.pinimg.com/736x/d2/6c/51/d26c511a38b62ec9a2faf464b798e755.jpg",
		"headerText": "Diet 2"
	}, {
		"id": 3,
		"img": "https://s-media-cache-ak0.pinimg.com/736x/d2/6c/51/d26c511a38b62ec9a2faf464b798e755.jpg",
		"headerText": "Diet 3"
	}]
}


class BeFitSuggestion extends React.Component {

   constructor(){
     super();
     this.state = {
       firstTab: true,
       secondTab: false,
       thirdTab: false,
       result: TabData
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
      <View style={{flex: 1}}>
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

        { (this.state.firstTab == true) && (this.state.secondTab == false) && (this.state.thirdTab == false) ? <PopularTab data={this.state.result.popular} /> : undefined}
        { (this.state.firstTab == false) && (this.state.secondTab == true) && (this.state.thirdTab == false) ? <PopularTab data={this.state.result.diet} /> : undefined}
        { (this.state.firstTab == false) && (this.state.secondTab == false) && (this.state.thirdTab == true) ? <PopularTab data={this.state.result.fitness} /> : undefined}

      </View>
    )
  }
}

class PopularTab extends Component {
  constructor(){
    super();
    console.log('porps val:--- ', this.props);
    this.state = {
      currentScreenWidth: width,
      currentScreenHeight: height
    }
  };

  calculatedSize() {
    var size = this.state.currentScreenWidth / IMAGES_PER_ROW
    return {width: size, height: size}
  };

  renderRow(data) {
    return data.map((val, index) => {
      console.log('val ', val, 'imag:-- ', val.img);
      return (
        <View>
          <Image style={[styles.image, this.calculatedSize()]} source={{uri: val.img}}>

          </Image>
          <Text style={styles.subCategoryText}>
            {val.headerText}
          </Text>
        </View>
      )
    })
  }

  renderImagesInGroupsOf(count) {
    var that = this;
    return _.chunk(that.props.data, IMAGES_PER_ROW).map((imagesForRow, i) => {
      return (
            <View style={styles.row}>
              {this.renderRow(imagesForRow)}
            </View>
      )
    })
  };
  render() {
    return (
      <ScrollView>
        {this.renderImagesInGroupsOf(IMAGES_PER_ROW)}
      </ScrollView>
    );
  }
}

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
  subCategoryText :{
    color: 'black',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding : 5
  },
  smalltext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  // image: {
  //   flex: 1,
  // },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    margin: 2,
    borderRadius: 70,
    width: 140,
    height: 140
  },
  mainText: {
    fontSize : 23,
    color: 'black'
  }
})

module.exports = BeFitSuggestion;
