import React, { Component } from 'react';
import ReactNative from 'react-native';
let {
  ListView,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Dimensions,
  ToastAndroid
} = ReactNative;
import InvertibleScrollView from 'react-native-invertible-scroll-view';
var {width, height} = Dimensions.get('window');
class InvertedScrollComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this._data = [];
    var d = new Date();
    this._data.push(this.getWeek(d));
    this.state = {
      weekValues: this.getWeek(d),
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
      offset: 0
    };
  }

  componentDidMount(){
    // this._data.push(this.getWeek(d));
    var data = this.state.weekValues;
    var len = data.length;
    for(var i=0; i< len; i++){
      this._data.push(data[i]);

      var rows = this._data;
      var rowIds = rows.map((row, index) => index).reverse();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(rows, rowIds),
      });
    }

    // var rows = data;
    // var rowIds = rows.map((row, index) => index).reverse();
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(rows, rowIds),
    // });

  }

  render() {
    // var offset = this.state.offset + 1;

    console.log('offset val:-- ', this.state.offset);
    return (
      <View style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 2, flex: 1, flexDirection: 'column',}}>
        <View style={{ borderColor: 'red', borderStyle: 'solid', borderWidth: 2}}>
            <View style={{ flex: 1, height: height/10, width: width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderColor: 'black', borderStyle: 'solid', borderWidth: 2 }}>

            {(this.state.offset %7)  == 0 ? <TouchableHighlight onPress={this._onPressPreviousWeek.bind(this)}><View style={{backgroundColor: 'gray', height: height/10, width: width/10, justifyContent: 'center', alignItems: 'center'}}><Text style={{ alignContent: 'flex-end', color: 'red' }}> > </Text></View></TouchableHighlight> : undefined }

            <ListView
              renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
              dataSource={this.state.dataSource}
              renderHeader={this._renderHeader.bind(this)}
              renderRow={this._renderRow.bind(this)}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />


          </View>
        </View>
        <View style={{}}>
        <Text>Hello </Text>
        </View>
      </View>

    );
  }

  _renderHeader() {
    return (
      <TouchableHighlight
        onPress={this._onPress.bind(this)}>
        <View style={{backgroundColor: 'gray', height: height/10, width: width/10, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ alignContent: 'flex-end' }}> > </Text>
        </View>
      </TouchableHighlight>
    );
  }

  _renderFooter() {
    return (
      <TouchableHighlight
        onPress={this._onPressPreviousWeek.bind(this)}>
        <View style={{backgroundColor: 'gray', height: height/10, width: width/10, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ alignContent: 'flex-end', color: 'red' }}> > </Text>
        </View>
      </TouchableHighlight>
    );
  }

  _renderRow(row) {
    // return <Text key={row} style={styles.row}>{row}</Text>
    // console.log('len:------------ ',this.state.weekValues.length);
    console.log('row changed:- ', row);
    console.log('row length:--- ', row.length);
    console.log('data array:-- ', this.state._data);
    return (
      // {this.state.weekValues.map((val) => (
      // {row.getDayName == 'Sat' ?
       <View>
          <View style={{alignSelf: 'auto', width: width/10, }}>
              <View style={{ alignSelf: 'center', backgroundColor: 'gray', borderRadius: 5, width: 10, height: 10 }}></View>
              <Text style={{alignSelf: 'center'}}>{row.getDayName}</Text>
          </View>
        </View>
        // : undefined }

      // ))}



      );
  }

  _onPress() {
    // this._data.push(`${new Date}`);
    // var rows = this._data;
    ToastAndroid.show('Future Dates cannot be showed.',ToastAndroid.SHORT);
    // It's important to keep row IDs consistent to avoid extra rendering. You
    // may need to reverse the list of row IDs so the so that the inversion
    // will order the rows correctly.
    // var rowIds = rows.map((row, index) => index).reverse();
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(rows, rowIds),
    // });
  }

  _onPressPreviousWeek() {
      var oneWeekAgo = this.getLastSunday(new Date());
      var newSundayDate = new Date(oneWeekAgo.setDate(oneWeekAgo.getDate() - 7));
      console.log('newSundayDate:-- ', newSundayDate);
      var newPreviousWeekData = this.getWeek(newSundayDate);
      console.log('output:-- ', newPreviousWeekData);
      var data = newPreviousWeekData;
      console.log('data:-- ', data[0]);

      for(var i=0; i< data.length; i++){
        this._data.push(data[i]);
        var rows = this._data;
        var rowIds = rows.map((row, index) => index).reverse();

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(rows, rowIds),
        });
      }

  }

  getLastSunday(d) {
     d = new Date(d);
     var day = d.getDay(),
         diff = d.getDate() - day; // adjust when day is sunday
     return new Date(d.setDate(diff));
   }

  getWeek(d1){
    var out = [];
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    for(var i=0; i< 7; i++){
      if(i==0){
        d = new Date(d1);
        var day = d.getDay(),
        diff = d.getDate() - day;
        var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }else if( i== 1){
         d = new Date(d1);
         var day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
         var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }else if( i== 2){
         d = new Date(d1);
         var day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -5: 2); // adjust when day is sunday
         var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }else if( i== 3){
         d = new Date(d1);
         var day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -4: 3); // adjust when day is sunday
         var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }else if( i== 4){
         d = new Date(d1);
         var day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -3: 4); // adjust when day is sunday
         var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }else if( i== 5){
         d = new Date(d1);
         var day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -2: 5); // adjust when day is sunday
         var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }else if( i== 6){
         d = new Date(d1);
         var day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -1: 6); // adjust when day is sunday
         var val = new Date(d.setDate(diff));
        var obj = {
          getDate: val.getDate(),
          getDayName: days[val.getDay()],
          getFullDate: d,
          getFullYear: d.getFullYear(),
          getMonth: d.getMonth() + 1
        }
        out.push(obj);
      }
    }
    return out;
  };


}

let styles = StyleSheet.create({

});
module.exports = InvertedScrollComponent;
