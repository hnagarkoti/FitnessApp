import React, { Component } from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Dimensions
} from 'react-native';
var window = Dimensions.get('window');

var OUTPUT = [{
  image: "http://watchfit.com/wp-content/uploads/2014/12/Women%E2%80%99s-chest-workout-for-perkier-boobs_02.jpg",
  title: "ARMS",
  sub: [{
      image: "https://2nlsnb2fe1ed2nm0us28io0z-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/12-exercises-with-fitball-to-strengthen-the-muscles-of-your-buttocks-3.jpg",
      title: "FORE ARM"
    },{
      image: "http://www.fitnessdigital.co.uk/images/categorias/guide/fitballs-03.jpg",
      title: "TRICEPS"
    },{
      image: "http://previews.123rf.com/images/undrey/undrey1511/undrey151100020/48212291-Fit-woman-exercising-with-medicine-ball-workout-out-arms-Exercise-training-triceps-and-biceps-doing--Stock-Photo.jpg",
      title: "BICEPS AND TRICEPS"
    },{
      image: "https://s-media-cache-ak0.pinimg.com/originals/e8/6d/bb/e86dbb5d14bca7693c7562aa10f68e0a.jpg",
      title: "TRICEPS WITH SHOULDERS"
    }]
},
{
  image: "https://s-media-cache-ak0.pinimg.com/736x/61/1a/73/611a73f9ccb5d07967f29f98eb982cff.jpg",
  title: "CORE",
  sub: [{
      image: "http://us.123rf.com/450wm/wavebreakmediamicro/wavebreakmediamicro1507/wavebreakmediamicro150712393/42329550-vista-lateral-de-um-casal-muscular-que-faz-o-exerc%C3%ADcio-abdominal-bola.jpg",
      title: "STOMACH"
    },{
      image: "http://www.bodybuilding.com/images/2016/june/5-core-workouts-for-a-tight-midsection-v2-1-640xh.jpg",
      title: "ABS"
    },{
      image: "http://www.bicycling.com/sites/bicycling.com/files/styles/slideshow-desktop/public/plank-variations.jpg?itok=kGL6zxcs",
      title: "ABDOMEN"
    }]
},
{
  image: "http://previews.123rf.com/images/dolgachov/dolgachov1404/dolgachov140403414/27872512-fitness-home-and-diet-concept-smiling-teenage-girl-doing-exercise-for-legs-and-buttocks-on-floor-at--Stock-Photo.jpg",
  title: "LEGS",
  sub: [{
      image: "http://www.bodybuilding.com/images/2016/june/5-leg-workouts-for-mass-v2-2-640xh.jpg",
      title: "THIGHS"
    },{
      image: "http://www.bodybuilding.com/images/2016/june/10-best-muscle-building-leg-exercises-header-v2-830x467.jpg",
      title: "UPPER THIGHS"
    },{
      image: "http://healthyceleb.com/wp-content/uploads/2015/02/Squats-legs.jpg",
      title: "THIGHS 2"
    },{
      image: "http://www.askthetrainer.com/wp-content/uploads/2011/11/best-leg-exercises.jpg",
      title: "THIGHS 3"
    }]
},
{
  image: "http://www.menshealth.com.sg/sites/default/files/Boost%20Your%20Stamina%20And%20Power%20Up%20Your%20Strength_0.jpg",
  title: "STRENGTH",
  sub: [{
      image: "http://www.madestrength.com/strength-809x404.jpg",
      title: "FORE ARM"
    },{
      image: "http://www.technogym.com/media/immagini/065_7633_01_pure_strength_big.jpg",
      title: "TRICEPS"
    },{
      image: "http://dchealthperformance.com.au/wp-content/uploads/2014/05/160294540.jpg",
      title: "BICEPS AND TRICEPS"
    },,{
      image: "http://dchealthperformance.com.au/wp-content/uploads/2014/05/160294540.jpg",
      title: "SHOULDER BICEPS BACK"
    },{
      image: "http://generalfitness.tripod.com/muscular_strength.jpg",
      title: "UPPER BACK"
    }]
}]

class ExerciseList extends Component {
  constructor(){
    super();
    this.state = {
      dataSource: OUTPUT
    }
  }
  render(){
    let that = this;
    return(
        <ScrollView>
          <View style={styles.mainContainer}>
          {
            this.state.dataSource.map(function(item, i){
              return(
                <ScrollView horizontal={true}>
                <View style={{  flexDirection: 'row', justifyContent: 'center',alignItems: 'center' }} key={i + 'First'}>
                  <Image source={{uri: item.image}} style={styles.thumbnail}>
                    <Text style={styles.text}>{item.title}</Text>
                  </Image>
                </View>
                {
                  item.sub.map(function(subItem, j){
                    return(
                      <View style={{  flexDirection: 'row', justifyContent: 'center',alignItems: 'center' }} key={j + "sub"}>
                        <Image source={{uri: subItem.image}} style={styles.thumbnail}>
                          <Text style={styles.text}>{subItem.title}</Text>
                        </Image>
                      </View>
                    )
                  })
                }
                </ScrollView>
              )
            })
          }
          </View>
        </ScrollView>
    )
  }
}
var styles = StyleSheet.create({
  mainContainer: {
    // borderRadius: 2,
    // borderColor: 'red',
    // borderWidth: 2,
    width: window.width
  },
  thumbnail: {
    width: window.width,
    height: window.height/3,
  },
  listView: {
    paddingTop: 0,
    backgroundColor: '#F5FCFF',
  },
  text: {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    fontSize: 30,
    paddingTop: 90,
    paddingBottom: 90
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});

module.exports = ExerciseList;
