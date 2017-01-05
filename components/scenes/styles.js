import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

var window = Dimensions.get('window');
var len = (window.width / 2) - 35;

var heightOfProduct = window.height - 30;
const Styles = StyleSheet.create({

  // Hemant
  buttonTextOfSharePage: {
    fontFamily: 'Helvetica',
    fontWeight: '100',
    fontSize: 15,
    color: 'blue',
    alignSelf: 'center'
  },
  gridViewImageProductPage: {
    // height: window.height,
    flex: 1,
    marginTop: 35,
    alignItems: 'center',
    flexDirection: 'column',
  },
  gridViewImage: {
    flex: 1,
    margin:10,
    alignItems: 'center',
    flexDirection: 'column',
    //  borderColor: '#880088', borderStyle: 'solid', borderWidth: 2, // For Testing..
  },
  gridViewtitle: {
    fontSize: 16,
    marginBottom:30,
    width: 130,
    textAlign: 'center',
    fontFamily: 'Cochin',
  },
  gridViewtitle1: {
    fontSize: 14,
    marginBottom:30,
    width: 130,
    textAlign: 'center',
    fontFamily: 'Cochin',
  },
  gridViewthumbnail: {
    width: 130,
    height: 130,
  },
  gridlistView: {
    paddingTop: 40,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  sharePagePinkBar: {
    backgroundColor: 'pink',
    height: 80,
    marginTop: 5,
    width: window.width
  },
  tabbarInBottomBar: {
    backgroundColor: 'gray',
    marginTop: 0
  },
  tabViewInBottomBar: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerOfHomeContent: {
    width: window.width
  },

  profileView: {
    marginTop: 20,
    marginLeft: len,
    marginBottom: 30,
  },
  ProfileContenttxt: {
    marginLeft: len
  },

  activityTabViewInProfileContent: {
    width: window.width,
    height: window.height,
    backgroundColor: '#d8d8ff'
  },
  favouriteTabViewInProfileContent: {
    width: window.width,
    height: window.height,
    backgroundColor: '#d3d3d9'
  },
  alertTabViewInProfileContent: {
    width: window.width,
    height: window.height,
    backgroundColor: '#d3d3d9'
  },
  clearMarginTopFavourite: {
    marginTop: 40,
  },
  textFavourite: {
    color: 'red'
  },
  textCategory: {
    color: 'red'
  },
  containerOfProduct: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    flex: 1,
  },
  mainContainer:{
    flexDirection: 'column',
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor:'#fff'
    // borderColor: '#880088', borderStyle: 'solid', borderWidth: 2, // For Testing..
  },
  avatarContainerimageTabViewProduct: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  pdfTabView: {
    backgroundColor: 'white',
    height: window.height
  },
  pdfTabViewText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: window.height/2.5,
    marginLeft: window.width/2.5,
    // backgroundColor: '#F0F8FF',
    // flexDirection: 'row',
  },
  imageTabView: {
    backgroundColor: 'green'
  },
  iteminShare: {
    margin: 10,
  },
  imgInShare: {
    margin: 10,
    width: window.width,
    height: 600,
  },
  textInShare: {
    fontSize: 14,
    textAlign: 'left',
    margin: 10,
    color: '#656656'
  },
  cardInShare: {
    height: 400,
    width: 360
  },
  headerOfWelcomeDrawer: {
    paddingTop: 16
  },
  textOfWelcomeDrawer: {
    marginTop: 20
  },
  // containerOfPassword: {
  //   justifyContent: 'center',
  //   // marginTop: 50,
  //   padding: 20,
  //   backgroundColor: '#ffffff',
  // },
  buttonTextOfPassword: {
    fontSize: 14,
    color: 'white',
    alignSelf: 'center'
  },
  buttonOfPassword: {
    height: 40,
    width: 100,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  cancelbuttonOfPassword: {
    height: 40,
    width: 100,
    backgroundColor: '#FE1001',
    borderColor: '#FE1001',
    borderWidth: 1,
    // flexDirection: 'row',
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  containerOfEmail: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonTextOfEmail: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  buttonOfEmail: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  cancelbuttonOfEmail: {
    height: 36,
    backgroundColor: '#FE1001',
    borderColor: '#FE1001',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  cardOfImageSlider: {

    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  textOfImageSlider: {
    fontSize: 20,
  },
  noMoreCardsTextOfImageSlider: {
    fontSize: 22,
  },
  mainContentOfAboutUs: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 20,
  },
  txtOfAboutUs: {
    // marginTop: 30,
    // fontSize: 18
  },
  txt1OfAboutUs: {
    marginTop: 5,
    fontSize: 18
  },
  //Hemant

  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  clearMarginTop: {
    marginTop: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12
  },
  gallerycontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  listView: {
    paddingTop: 50,
    paddingLeft: 5,
    backgroundColor: '#F5FCFF',
  },
  galleryMarginTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 10,
  },
  logincontainer: {
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  },
  formInput: {
    borderStyle: 'solid',
    borderColor: '#B9AAAA',
    borderWidth: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginbutton: {
    padding: 10,
    backgroundColor: '#ED1C26',
    borderColor: '#555555',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    fontFamily: 'Helvetica',
    fontWeight: '100',
    fontSize: 15,
    color: '#ffffff',
    alignSelf: 'center'
  },
  error: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'auto',
    borderColor: '#880088', borderStyle: 'solid', borderWidth: 2, // For Testing..
  },
  viewitem: {
    marginTop: 40,
  },
  categoryview: {
    margin: 3,
    width: 320,
    height: 3
  },

  viewimg: {
    width: 320,
    height: 500,
  },
  viewwelcome: {
    fontSize: 12,
    textAlign: 'left',
    margin: 10,
    color: '#656656'
  },

  // mr
  loginContainer_mr: {
    padding: 50,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo_mr: {
    margin: 100,
    marginTop: 40,
    marginBottom: 60,
  },
  inputBox_mr: {
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  inputBoxOtp_mr: {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    letterSpacing: 10,
  },
  btnCircle_mr: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F44336',
    position: 'relative',
    bottom: 68,
    left: 110
  },
  buttonTextOfPassword: {
    fontSize: 25,
    color: 'white',
    lineHeight: 50,
    textAlign: 'center',
    margin: 10,
    marginTop: 15,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

 appIcon: {
   width:100,
   height:100
   },
   drawer:{

    width:50

   }

});

module.exports = Styles;
