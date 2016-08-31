import React, { Component } from 'react';
import { View, Text, ScrollView,TouchableHighlight, StyleSheet,TextInput } from 'react-native';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');

class FLogin extends Component {


	render(){
		var _this = this;
		return(
			<View style={styles.mainContainer}>
  <FBLogin style={{ marginBottom: 10, }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={
					function(data){
          console.log("Logged in!");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.setState({ user : null });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
          _this.setState({ user : null });
        }}
        onError={function(data){
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={function(){
          console.log("User cancelled.");
        }}
        onPermissionsMissing={function(data){
          console.log("Check permissions!");
          console.log(data);
        }}
      />
     </View>
			)
	}
	}

const styles=StyleSheet.create({
	mainContainer: {
    justifyContent: 'center',
    flex: 2
    
    // borderStyle: 'solid', borderWidth: 2, borderColor: '#dabe00ff',
  }
})
module.exports = FLogin;
