import React, {Component} from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgImage}>
          <View style={styles.infoArea}>

            <View style={styles.area}>
               <Text style={styles.areaTitulo}>Meta</Text>
               <Text style={styles.areaDado}>2000 ml</Text>
            </View>

            <View style={styles.area}>
               <Text style={styles.areaTitulo}>Consumido</Text>
               <Text style={styles.areaDado}>1200 ml</Text>
            </View>

            <View style={styles.area}>
               <Text style={styles.areaTitulo}>Status</Text>
               <Text style={styles.areaDado}>Bom</Text>
            </View>

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
    flexDirection:'row',
    paddingTop: 50
  },
  area:{
     flex:1,
     alignItems:'center'
  },
  areaTitulo:{
     color:'#45b2fc'
  },
  areaDado:{
     color:'#2b4274',
     fontSize:15,
     alignItems: 'center',
     fontWeight:'bold'
  }
});
