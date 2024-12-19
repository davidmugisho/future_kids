import { Redirect } from 'expo-router';
import react from 'react';
import { Link } from 'expo-router';

import React, { useState } from 'react';

import { View ,Text,  StyleSheet,TextInput, Pressable, KeyboardAvoidingView, Platform} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';



// export const unstable_settings = {
//   headerShown: false, // This removes the header for this screen
// };

export default function setPasswordNumber () {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');


  const handleClose = () => {
    console.log("Close button pressed");
  }
    return(
      <>
       <Pressable style={styles.closeButton} onPress={handleClose}>
      <Entypo name="arrow-left" size={25} color="#6C7275" />
      </Pressable>
      <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
>
        <Text style={styles.text}>Set your password</Text>
        <Text style={styles.text1}>Set the password for your account</Text>
        <Pressable style={styles.inputContainer}>
          {/* <Text style={styles.buttonText}>Password</Text> */}
          <FontAwesome name="lock" size={24} color="#6C7275" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888" 
          keyboardType="default"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        </Pressable>

        <Pressable style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="#6C7275" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888" 
          keyboardType="default"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
          {/* <Text style={styles.buttonText}>Confirm Password</Text> */}
        </Pressable>

        <View style={styles.buttonContainer}>
            <Link href="/loading">
              <Text style={styles.buttonText1}>Submit</Text>
            </Link>
          </View>
      </KeyboardAvoidingView>
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
    padding:20,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: '#141718',
    },

    icon: {
      marginRight: 10,
    },
    text:{
      fontSize:45,
      lineHeight: 48,
      fontWeight: '700',
      color: '#141718',
    },
    text1:{
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 24,
      color: '#141718',
      fontFamily: 'Inter',
    },
    button:{

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
    inputContainer:{
        alignItems: 'center',
        // justifyContent:'center',
        borderRadius: 12,
        paddingHorizontal: 16,
        width: 311,
        height: 60,
        backgroundColor: '#F3F5F7',
        marginBottom: -0.5,
        flexDirection:'row',

    },
    // inputContainer1:{
    //     alignItems: 'flex-start',
    //     justifyContent:'center',
    //     borderRadius: 12,
    //     paddingHorizontal: 12,
    //     width: 311,
    //     height: 60,
    //     backgroundColor: '#F3F5F7',

    // },
    buttonText1:{
      color: '#FEFEFE',
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 24,
      fontFamily: 'Inter',
      letterSpacing: 0.24,
    },
    closeButton:{
      position: 'absolute',
      top: 95,
      left: 50,
      width: 18.67,
      height: 18.67,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });