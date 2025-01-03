import React, { useState } from 'react';
import { View, StyleSheet, Text , KeyboardAvoidingView, Platform, Pressable, TextInput} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';




export default function resetPasswordSigninPhone() {
    const [phoneNumber , setPhoneNumber] = useState('');

    const handleClose = () => {
        // Implement the functionality for the close button (e.g., navigation back)
        console.log("Close button pressed");
      }
  return (
   <KeyboardAvoidingView style={styles.container}
   behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
    <Pressable style={styles.closeButton} onPress={handleClose}>
        <Entypo name="cross" size={25} color="#6c7275"/>

    </Pressable>
    <Text style={styles.text}>Reset your password</Text>
    <Pressable style={styles.inputContainer}>
        <TextInput 
         style={styles.input}
         placeholder="Phone number or email"
         placeholderTextColor="#888" 
         keyboardType="phone-pad"
         value={phoneNumber}
         onChangeText={setPhoneNumber}
        />

    </Pressable>
    <Pressable style={styles.button}>
            <Link href="/reset_password_verification">
              <Text style={styles.buttonText}>Continue</Text>
            </Link>
          </Pressable>
          <Text style={styles.text2}>
          <Text>Remember password? {"  "} 

          </Text>
          <Link href={"/Sign_in_phone"} style={[ {color:'red'} ]}> Sign in </Link>
          </Text>

   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
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
  text:{
    fontSize: 45,
    fontWeight: 700,
    color: '#141718',
    marginBottom: 10,
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F5F7',
    borderRadius: 15,
    width: 311,
    height: 56,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  input:{
    flex: 1,
    fontSize: 16,
    color: '#141718',
  },
  button:{
    backgroundColor: '#020A3C',
    width: 311,
    height: 56,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2:{
    paddingTop: 20
  }
 
  
});
