import { Text, View,  StyleSheet, Button } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';


const  PlaceholderImage = require('../assets/images/hometsx.png')


export default function SplashScreen() {
  return (
    
    <View style={styles.container}>

      <Image source={PlaceholderImage} style={styles.image}/>
      <View style={styles.TopViewheader}>
      <Text style={styles.Topheader}>Skip</Text>
      </View>

      <Text style={styles.text} > Welcome TO {'\n'}Future Kid</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.textButtonContainer}>Bring your ideas to life. Fund projects, support causes, and join a community of backers</Text>
        <Link href="/splash" style={styles.button}>
        <View style={styles.textWrapper}>
          <Text style={styles.buttonText}>Get Started</Text>
        </View>
      </Link>
      </View>
    
    </View>
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingBottom: 40,
  },
  image:{
    width: 218,
    height: 218,
    resizeMode:'contain',

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


  },
  buttonContainer:{
    width:'100%',
    // height:50,
    // backgroundColor:'red',
    padding: 20,
    paddingBottom:50,
    alignItems:'center',
    justifyContent:'center',
  },
  textButtonContainer:{
    fontSize: 17,
    fontFamily: 'Karla',
    color: '#6C7275',
    // marginBottom: 10,
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 50,
  },
  buttonText:{
    color: 'white', // Text color
    fontSize: 16, // Adjust font size as needed
    fontWeight: 'bold', // Make text bold
  },
  button:{
    width: 311, // Fixed width
    height: 56, // Hug height
    backgroundColor: 'blue', // Button background color
    borderRadius: 12, // Rounded corners
    paddingTop: 16,
    paddingRight: 24,
    paddingBottom: 16,
    paddingLeft: 24, // Padding values
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    textDecorationLine: 'none',
  },
  textWrapper:{
    justifyContent: 'center',
    alignItems: 'center',

  },

});