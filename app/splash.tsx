import { Text, View,  StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const  PlaceholderImage = require('../assets/images/hometsx.png')


export default function SplashScreen() {
  return (
   
    <View style={styles.container}>

      <Image source={PlaceholderImage} style={styles.image}/>
       <View style={styles.TopViewheader}>
        <Text style={styles.Topheader}>Skip</Text>
      </View>
      
      <Text style={styles.text} > Welcome TO {'\n'}Future Kid</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 218,
    height: 218,
    borderRadius: 18,
  },
  text: {
    color: '#141718',
    fontSize:50,
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'Inter',
    lineHeight:75,
    letterSpacing:0.64,
  },
  Topheader:{
    fontFamily:'Inter',
    fontSize:16,
    fontWeight:600,
    lineHeight:24,
    letterSpacing:0.5,
    color:'#141718',

  },
  TopViewheader:{
    top:60,
    width:65,
    height:40,
    position:'absolute',
    left:24,
    borderRadius:12,
    backgroundColor: '#f3f5f7',
    alignItems:'center',
    justifyContent:'center',
    paddingRight:16,
    paddingLeft:16,
    paddingTop:8,
    paddingBottom:8,
    

  }
});