
import { Redirect } from 'expo-router'; 
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Pressable, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';



export default function emailSign_upScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => {
    // Implement the functionality for the close button (e.g., navigation back)
    console.log("Close button pressed");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Pressable style={styles.closeButton} onPress={handleClose}>
        <Entypo name="cross" size={25} color="#6C7275" />
      </Pressable>
      <Text style={styles.text}>Your email address</Text>
      <Text style={styles.text1}>Provide your email number to sign up</Text>

      {/* Input with phone icon */}
      <Pressable style={styles.inputContainer}>
        <FontAwesome name="envelope" size={24} color="#6C7275" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="email  address"
          placeholderTextColor="#888" 
          keyboardType="default"
          value={email}
          onChangeText={setEmail}
        />
      </Pressable>

      <Pressable style={styles.button}>
        <Link href="/verifyEmail">
          <Text style={styles.buttonText}>Continue</Text>
        </Link>
      </Pressable>
      <Text style={styles.text2}>Have an account? {'   '}
        <Link href={"/Sign_in_email"}>
        <Text style={{color:'red'}}>Sign in</Text>
        </Link>
      </Text>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#141718',
    marginBottom: 10,
  },
  text1: {
    fontSize: 14,
    color: '#141817',
    fontWeight:500,
    // textAlign: 'center',
    letterSpacing:-0.24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F5F7',
    borderRadius: 15,
    width: 311,
    height: 56,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#141718',
  },
  button: {
    backgroundColor: '#020A3C',
    width: 311,
    height: 56,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton:{
      position: 'absolute',
      top: 95,
      left: 50,
      width: 18.67,
      height: 18.67,
      justifyContent: 'center',
      alignItems: 'center',
    
  },
  text2:{
  fontSize:14,
  lineHeight:24,
  fontWeight:500,
  fontFamily:'Inter',
  letterSpacing:0.12,
  color:'#141718',
  padding:20,
},
});
