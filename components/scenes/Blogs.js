'use strict';

var React = require('react');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight
} = require('react-native');

// import { Card, Button, Avatar, Drawer, Divider, Subheader, COLOR, TYPO } from 'react-native-material-design';
// import Spinner from '../core/Spinner';
// import { mApi } from '../../libs/Api';
// import Link from '../core/Link';
// import ButtonLink from '../core/ButtonLink';
// import styles from './styles';
// import NavBar from '../core/NavBar';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import TabBar from '../core/TabBar';
import { goto, goBack } from '../../libs/routerUtils';
// import { ProfileTabBar, HomePageTabBar } from './tabIcons';

var _ = require('lodash');
var {width, height} = Dimensions.get('window');

// var IMAGE_URLS = _.flatten(_.times(5, () => {return ['http://www.123dentist.com/wp-content/uploads/2012/07/oral-health-care-and-pregnancy.jpg',
//  'http://www.dailydosemd.com/wp-content/uploads/2012/11/marathon-646.jpg',
//  'http://cdn-media-1.lifehack.org/wp-content/files/2014/08/cobrastretch.jpg',
//  'http://www.pacific.edu/Images/administration/finance/hr/healthy-heart.jpg',
//  'http://www.ecolab.com/~/media/Ecolab/Ecolab%20Home/Images/Markets/FandB/Food%20Processing/producemarket.jpg',

//  'https://i.ytimg.com/vi/xwRhKzydhJ0/maxresdefault.jpg',
//  'http://sharein.org/wp-content/uploads/2014/11/Lose-Belly-Fat1.jpg'
//  ]}));

var IMAGE_URLS = [{
  image: 'http://www.123dentist.com/wp-content/uploads/2012/07/oral-health-care-and-pregnancy.jpg',
  text: 'A Brief Guide to Pregnancy',
  month: 'August',
  id: 1
},{
  image: 'http://www.dailydosemd.com/wp-content/uploads/2012/11/marathon-646.jpg',
  text: 'Want To Prepare For Marathon',
  month: 'May',
  id: 2
},{
  image: 'http://cdn-media-1.lifehack.org/wp-content/files/2014/08/cobrastretch.jpg',
  text: 'Tired From Back Pain',
  month: 'July',
  id: 3
},{
  image: 'http://www.pacific.edu/Images/administration/finance/hr/healthy-heart.jpg',
  text: 'Get Rid Of Heart Diseases',
  id: 4
},{
  image: 'http://www.ecolab.com/~/media/Ecolab/Ecolab%20Home/Images/Markets/FandB/Food%20Processing/producemarket.jpg',
  text: 'Eat Healthy Be Healthy',
  month: 'August',
  id: 5
},{
  image: 'https://i.ytimg.com/vi/xwRhKzydhJ0/maxresdefault.jpg',
  text: 'Be A Yoga Master',
  month: 'August',
  id: 6
},{
  image: 'http://sharein.org/wp-content/uploads/2014/11/Lose-Belly-Fat1.jpg',
  text: 'Reduce Weight',
  month: 'August',
  id: 7
},{
  image: 'dummyImage',
  text: 'More',
  month: '',
  id: 8
}]

var IMAGES_PER_ROW = 2

var Blogs = React.createClass({

  getInitialState() {
    return {
      currentScreenWidth: width,
      currentScreenHeight: height
    }
  },

  handleRotation(event) {
    var layout = event.nativeEvent.layout
    this.setState({currentScreenWidth: layout.width, currentScreenHeight: layout.height })
  },

  calculatedSize() {
    var size = this.state.currentScreenWidth / IMAGES_PER_ROW
    return {width: size, height: size}
  },

  goToBlogPage(blog){
    console.log('goToBlogPage',blog.id);
    goto( this.context.store, 'Blog', { 'blogId': blog.id });
  },

  renderRow(images) {
    return images.map((uri, index) => {
      return (
        <View>
        <TouchableHighlight onPress={ () => this.goToBlogPage(uri) } >
          <Image style={[styles.image, this.calculatedSize()]} source={{uri: uri.image}} >
            <Text style={styles.mainText}>
            {uri.text}
            </Text>
          </Image>
        </TouchableHighlight>
        </View>
      )
    })
  },

  renderImagesInGroupsOf(count) {
    return _.chunk(IMAGE_URLS, IMAGES_PER_ROW).map((imagesForRow, i) => {
      return (
            <View style={styles.row}>
              {this.renderRow(imagesForRow)}
            </View>
      )
    })
  },

  render: function() {
    return (
      <ScrollView onLayout={this.handleRotation} contentContainerStyle={styles.scrollView}>
        {this.renderImagesInGroupsOf(IMAGES_PER_ROW)}
      </ScrollView>
    );
  }
});

Blogs.contextTypes = {
  openDrawer: React.PropTypes.func,
  store: React.PropTypes.object.isRequired,
};

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    margin: 2
  },
  mainText: {
    fontSize : 23,
    color: 'black'
  }
});

module.exports = Blogs;
