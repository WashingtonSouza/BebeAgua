import React, {Component} from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgImage}>
          <View style={styles.infoArea}>
            <View></View>
            <View></View>
            <View></View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingTop:20
  },
  bgImage:{
    flex:1,
    width:null
  }, 
  infoArea:{
    flex:1,
    flexDirection:'row'
  }
});
