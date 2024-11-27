import { Text, View,  StyleSheet,  } from 'react-native';
import { Image } from 'expo-image';

import { Link } from 'expo-router';

const PlaceholderImage = require('../assets/images/hometsx.png')
export default function Index() {
  return (
    <View style={styles.container}>
     <Image source={PlaceholderImage} style={styles.Image}/>
      <Text style={styles.text}>Future kid</Text>
    <Link href="/splash" style={styles.Button}>
    next
    </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020A3C',
    alignItems: 'center',
    justifyContent: 'center',
    gap:11,
  },
  text: {
    color: '#fff',
    fontSize:30,
    top:320,
    fontWeight:'bold'
  },
  Button:{
    fontSize:15,   
    textDecorationLine:'underline',
    color:'#FFFFFF',
     top:350,
     left: 'auto'
  },
  Image:{
    width: 218,
    height: 218,
    borderRadius: 18,
    resizeMode:'contain'
    // borderWidth: 10,
    // borderColor: '#cc1818', // Adds a visible black border
    // backgroundColor:'#fff',
    // opacity: 50, // Fully opaque
  }
}
);
