import React, {Component} from 'react';
import { StyleSheet, ImageBackground, View, Text, Button } from 'react-native';

export default class App extends Component {

   constructor(props){
      super(props);
      this.state = {Consumido:0, status:'ruim', pcp:'0'};
      this.addCopo = this.addCopo.bind(this);
   }

   addCopo(){
      let s = this.state;
      s.Consumido += 200;
      this.setState(s);

      this.atualizar();
   }

   atualizar(){
      let s = this.state;
      s.pcp = Math.floor(((s.Consumido/2000)*100));
      s.status = s.pcp >= 100 ? "Bom" : "Ruim";
      this.setState(s);
   }
   
   render() {
      return (
         <View style={styles.body}>
            <ImageBackground source={require('./images/waterbg.png')} style={styles.bgImage}>
                  <View>

                     <View style={styles.infoArea}>
                        <View style={styles.area}>
                           <Text style={styles.areaTitulo}>Meta</Text>
                           <Text style={styles.areaDado}>2000 ml</Text>
                        </View>
                        <View style={styles.area}>
                           <Text style={styles.areaTitulo}>Consumido</Text>
                           <Text style={styles.areaDado}>{this.state.Consumido}ml</Text>
                        </View>
                        <View style={styles.area}>
                           <Text style={styles.areaTitulo}>Status</Text>
                           <Text style={styles.areaDado}>{this.state.status}</Text>
                        </View>                  
                     </View>

                     <View>
                        <View style={styles.pctArea}>
                           <Text style={styles.pctTexto}>{this.state.pcp}%</Text>
                        </View>
                        <View style={styles.btnArea}>
                           <Button title="Beber um copo" onPress={this.addCopo}/>
                        </View>
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
    paddingTop: 70
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
     fontWeight:'bold',
     alignItems:'center'
  },
  pctArea:{
     marginTop: 120,
     alignItems:'center'
  },
  pctTexto:{
     fontSize:70,
     color:'#FFFFFF',
     fontWeight: 'bold',
     backgroundColor:'transparent'
  },
  btnArea:{
     marginTop:30,
     alignItems:'center'
  }
});
