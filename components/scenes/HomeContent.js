'use strict';

import React, { Component } from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { mApi } from '../../libs/Api';
import { goto, goBack } from '../../libs/routerUtils';
import GridView from 'react-native-grid-view';

let OUTPUT = [{
			"id": 1,
			"image": "http://i.dailymail.co.uk/i/pix/2012/08/06/article-2184469-14696DA3000005DC-824_634x639.jpg",
			"title": "STRENGTH",
      "desc": "I am description"
    },
    {
  		"id": 1,
  		"image": "https://legionathletics.com/wp-content/uploads/2015/10/fasted-cardio-definition.jpg",
  		"title": "CARDIO",
      "desc": "I am description"
  	},
    {
      "id": 1,
      "image": "http://www.howtoincreasebreastsizefast.com/wp-content/uploads/2014/06/How-to-Increase-Breast-Size-With-Yoga-Exercises.jpeg",
      "title": "YOGA",
      "desc": "I am description"
    },
    {
      "id": 1,
      "image": "http://zemiweb.com/wp-content/uploads/2015/03/Yoga-Exercises-for-Weight-Loss-1.jpg",
      "title": "STRETCHING",
      "desc": "I am description"
    }];

var ITEMS_PER_ROW = 2;
class Exercise extends Component {
  _onPressImage(){
    console.log('image pressed');
    goto(this.context.store, 'ExerciseList', {}, true );
  }
  render() {
      return (
        <View style={styles.movie} >
          <TouchableHighlight onPress={ (this._onPressImage.bind(this)) }>
            <Image source={{uri: this.props.mainCategory.image}} style={styles.thumbnail}>
              <Text style={{textAlign: 'center', paddingTop: 120, paddingBottom: 130, backgroundColor: 'rgba(0, 0, 0, 0.4)', color: 'white', fontSize: 15, alignItems: 'center', justifyContent: 'center'}}>{this.props.mainCategory.title}</Text>
            </Image>
          </TouchableHighlight>
        </View>
      );
  }
}
Exercise.contextTypes = {
  store: React.PropTypes.object.isRequired
}

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null,
      loaded: false,
    }
  }

  componentDidMount() {
    this.fetchData();
  }
  _onPressButton(){

  }

  fetchData() {
    let that = this;
    // mApi.getCategories()
    //   .then(function(result) {
    //     console.log('result:- ',result);
        that.setState({
          dataSource: OUTPUT,
          loaded: true
        });
      // });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ScrollView>
      <View style={styles.mainContainer}>
      <GridView
        items={this.state.dataSource}
        itemsPerRow={ITEMS_PER_ROW}
        renderItem={this.renderItem}
        style={styles.listView}
      />
      <View>
      <TouchableHighlight style={ { backgroundColor: '#000', height: 80 } } onPress={ (this._onPressButton.bind(this)) } underlayColor="#99d9f4">
          <View style={{ backgroundColor: '#3d3d29', flexDirection: 'column' }}>
            <View style={{ height: 80, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'  } } >
              <Text style={{ textAlign: 'center', color: 'white',flexDirection: 'column', fontSize: 9 } }>
                CREATE A
              </Text>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 15 } }>
                CUSTOM WORKOUT
              </Text>
            </View>
          </View>
      </TouchableHighlight>
      </View>
      </View>
      </ScrollView>
    );
  }

  renderLoadingView() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 15}}>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderItem(item) {
      return <Exercise mainCategory={item} />
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    // borderRadius: 2,
    // borderColor: 'red',
    // borderWidth: 2
  },
  movie: {
    height: 250,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    // borderRadius: 2,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  title: {
    fontSize: 10,
    marginBottom: 8,
    width: 90,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 180,
    height: 250,
  },
  listView: {
    paddingTop: 0,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = HomeContent;
