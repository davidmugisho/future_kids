
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';

// Placeholder image
const PlaceholderImage = require('../assets/images/hometsx.png');

const EllipseWithCircles: React.FC = () => (
  <View style={styles.ellipseContainer}>
    <View style={[styles.circle, styles.redCircle]} />
    <View style={[styles.circle, styles.blueBorderCircle]} />
    <View style={[styles.circle, styles.blueBorderCircle]} />
  </View>
);

export default function SplashScreen() {
  return (

    <View style={styles.container}>
      {/* Skip Header */}
      <View style={styles.TopViewheader}>
        <Text style={styles.Topheader}>Skip</Text>
      </View>

      {/* Main Content */}
      <Image source={PlaceholderImage} style={styles.image} />
      <Text style={styles.text}>Welcome to {'\n'}Future Kid</Text>
      <Text style={styles.textButtonContainer}>
        Bring your ideas to life. Fund projects, {'\n'}
        support causes, and join a community {'\n'}
        of backers
      </Text>

      {/* Ellipse */}
      <EllipseWithCircles />

      {/* Button */}
      <View style={styles.buttonContainer}>
        <Link href="/splash" style={styles.button}>

            <Text style={styles.buttonText}>Get Started</Text>

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
  TopViewheader: {
    top: 60,
    width: 65,
    height: 40,
    position: 'absolute',
    left: 24,
    borderRadius: 12,
    backgroundColor: '#f3f5f7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  Topheader: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: '#141718',
  },
  image: {
    width: 218,
    height: 218,
    resizeMode: 'contain',
    marginTop:200,
    marginBottom:70,
  },
  text: {
    color: '#141718',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inter',
    lineHeight: 65,
    letterSpacing: 0.64,
    marginBottom:20,
  },
  textButtonContainer: {
    fontSize: 17,
    fontFamily: 'Karla',
    color: '#6C7275',
    marginTop:20,
    alignItems:'center',
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 30,
  },
  ellipseContainer: {
    width: 65,
    height: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  redCircle: {
    backgroundColor: '#3AB6FF',
  },
  blueBorderCircle: {
    borderWidth: 1.5,
    borderColor: '#6c7275',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, 
  },
  button: {
    width: 311,
    height: 56,
    backgroundColor: '#020A3c',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: 'none',
    padding:0,
  },
  buttonText: {
    color: '#FEFEFE',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    textAlign: 'center',
    includeFontPadding:false,
    lineHeight: 55,
    
  },

});
