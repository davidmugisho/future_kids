import { Redirect } from 'expo-router';
import react from 'react';
import { Link } from 'expo-router';
import { View ,Text,  StyleSheet, Pressable} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';





export default function resetPasswordVerification () {

  const handleClose = () => {
    
    console.log("Close button pressed");
  }
    return(
  <>
      <Pressable style={styles.closeButton} onPress={handleClose}>
      <Entypo name="arrow-left" size={25} color="#6C7275" />
      </Pressable>

      <View style={styles.container}>
        <Text style={styles.text}>Verify your account</Text>
        <Text style={styles.text1}>Enter verification code sent to{' '}
          <Text style={{color:'blue'}}>mail@gmail.com</Text>
        </Text>
        <Pressable style={styles.inputContainer}>
          <Text style={styles.buttonText}>Verification code</Text>
        </Pressable>
        <View style={styles.buttonContainer}>s
            <Link href="/set_new_password">
              <Text style={styles.buttonText1}>Continue</Text>
            </Link>
          </View>
          <Text style={styles.text2}>Haven’t got the code? Resend code</Text>
      </View>
      </>
      
  );
};
const styles = StyleSheet.create({

    container:{
    width: 311, 
    height: 368, 
    marginTop: 180,
    marginLeft: 32, 
    gap: 32, 
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 16, 
    },
    text:{
    fontSize:45,
    lineHeight: 48,
    fontWeight: '700',
    color: '#141718',
    },
    text1: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 24,
      color: '#141718',
      fontFamily: 'Inter',
    },
    inputContainer: {
      // flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent:'center',
      borderRadius: 12,
      paddingHorizontal: 12,
      width: 311,
      height: 60,
      backgroundColor: '#F3F5F7',
    },
    text2:{
      fontSize:14,
      lineHeight:24,
      fontWeight:500,
      fontFamily:'Inter',
      letterSpacing:0.12,
      color:'#141718'
    },
    buttonText1:{
      color: '#FEFEFE',
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 24,
      fontFamily: 'Inter',
      letterSpacing: 0.24,
    },
    buttonContainer:{
      backgroundColor: '#020A3C',
      width: 311,
      height: 60,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText:{
      fontFamily:'Inter',
      fontWeight:500,
      fontSize:14,
      lineHeight:24,
      letterSpacing:0.12,
      color:'#6C7275'

    },
    closeButton:{
      position: 'absolute',
      top: 95,
      left: 50,
      width: 18.67,
      height: 18.67,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#6C7275'
      // position: 'absolute',
      // top: 15, // Distance from the top of the page
      // left: 15, // Distance from the left edge
      // width: 40, // Increased width for better accessibility
      // height: 40, // Increased height for better accessibility
      // justifyContent: 'center',
      // alignItems: 'center',
      // zIndex: 1, // Ensure it's above other elements
    }

  });