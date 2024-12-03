
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { BlurView } from 'expo-blur';
import { ImageBackground } from 'react-native';

const PlaceholderImage = require('../assets/images/onboarding1.png');
const BlurBackgroundImage = require('../assets/images/blurimage.jpeg');

const EllipseWithCircles: React.FC = () => (
  <View style={styles.ellipseContainer}>
    <View style={[styles.circle, styles.redCircle]} />
    <View style={[styles.circle, styles.blueBorderCircle]} />
    <Link href="/onboarding2">
      <View style={[styles.circle, styles.blueBorderCircle2]} />
    </Link>
  </View>
);

export default function Onboarding1Screen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.TopViewheader}>
        <Text style={styles.Topheader}>Skip</Text>
      </View>

      <Image source={PlaceholderImage} style={styles.image} />

      <Text style={styles.text}>Discover Inspiring{'\n'}Future Kid</Text>

      <ImageBackground source={BlurBackgroundImage} style={styles.blurimage}>
        <View style={styles.backgroundOverlay} />
        <BlurView intensity={128} tint={'light'} style={styles.blurContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.textButtonContainer}>
              Explore campaigns in various,{'\n'}
              categories and find the causes you’re{'\n'}
              passionate about.
            </Text>

            <EllipseWithCircles />

            <View style={styles.buttonContainer}>
              <Link href="/" style={styles.button}>
                <Text style={styles.buttonText}>Explore now</Text>
              </Link>
            </View>
          </View>
        </BlurView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 20,
    paddingTop:60,
  },
  TopViewheader: {
    position: 'absolute',
    top: 40,
    left: 24,
    width: 70,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#f3f5f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Topheader: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#141718',
  },
  image: {
    width: 218,
    height: 218,
    resizeMode: 'contain',
    marginTop: 100,
    marginBottom: 95,

  },
  text: {
    color: '#141718',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inter',
    lineHeight: 55,
    letterSpacing: 0.64,
    marginVertical: 15,
  },
  textButtonContainer: {
    fontSize: 17,
    fontFamily: 'Karla',
    color: '#6C7275',
    marginVertical: 20,
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 30,
  },
  ellipseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 65,
    marginVertical: 20,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  redCircle: {
    borderColor: '#6c7275',
    borderWidth: 1.5,
  },
  blueBorderCircle: {
    backgroundColor: '#3AB6FF',
  },
  blueBorderCircle2: {
    borderColor: '#6c7275',
    borderWidth: 1.5,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
    includeFontPadding: false,
    lineHeight: 55,
  },
  blurContainer: {
    width: 538,
    height: 250,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  blurimage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

