// import { Redirect } from 'expo-router';
// import react from 'react';
// import { useState } from 'react';
// import { Link } from 'expo-router';
// import { View ,Text,  StyleSheet, Pressable, KeyboardAvoidingView, Platform} from 'react-native';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { TextInput } from 'react-native';


// // export const unstable_settings = {
// //   headerShown: false, // This removes the header for this screen
// // };

// export default function phoneSignScreen () {
//   const [phoneNumber, setPhoneNumber] = useState(''); // State to handle phone number input

//     return(
//       <KeyboardAvoidingView style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       >
//         <Text style={styles.text}>Your Phone number</Text>
//         <Text style={styles.text1}>Provide your phone number to sign up</Text>

//         <TextInput style={styles.button}>
//         <FontAwesome name="phone" color="#000000" size={24} style={styles.icon}/>
//           {/* <Text style={styles.buttontext}>Phone number</Text> */}
//           style={styles.input}
//           placeholder="Enter your phone number"
//           keyboardType="phone-pad"
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//         </TextInput>

//         <View style={styles.buttonContainer}>
//             <Link href="/verifyphone" >
//               <Text style={styles.buttonText1}>Continue</Text>
//             </Link>
//           </View>
//           <Text>Have an account?{' '} 
//             <Text style={{color:'red'}}>Sign in</Text>
//           </Text>
//       </KeyboardAvoidingView>
//   );
// };
// const styles = StyleSheet.create({
//     container:{
//     width: 311, // Fixed width
//     height: 368, // Hug height
//     marginTop: 180, // Top offset
//     marginLeft: 32, // Left offset
//     gap: 32, // Vertical gap (spacing between children)
//     backgroundColor: '#EFEFEF', // Optional: Background color
//     justifyContent: 'center', // Center items vertically
//     alignItems: 'center', // Center items horizontally
//     borderRadius: 16, // Optional: Rounded corners
//     },
//     button:{
//       borderRadius: 14,
//       padding : 20,
//       width:311,
//       height:60,
//       gap: 12,
//       backgroundColor:'#F3F5F7',
//       flexDirection: 'row', 
//       alignItems: 'flex-start', 
//       // justifyContent: 'center',
//     },
//     buttontext:{
//       fontSize:14,
//       fontWeight:500,
//       lineHeight:24,
//       fontFamily:'Inter',
//       color:'#6C7275'

//     },
//     buttonContainer:{
//       backgroundColor:'#020A3C',
//       width:311,
//       height:60,
//       borderRadius:12,
//       paddingTop:16,
//       paddingRight:24,
//       paddingBottom:16,
//       paddingLeft:24,
//       gap:8,
//       justifyContent:'center',
//       alignItems:'center'
    

//     },
//     buttonText1:{
//       color:'#FEFEFE',
//       fontSize:16,
//       fontWeight:600,
//       lineHeight:24,
//       fontFamily:'Inter',
//       letterSpacing:0.24,
//     },
//     text:{
//       fontSize:40,
//       lineHeight:48,
//       fontWeight:700,
//       color:'#141718'
//     },
//     text1:{
//       fontSize:14,
//       fontWeight: 500,
//       lineHeight:24,
//       color:'#141718',
//       fontFamily:'Inter'
//     },
//     icon:{
//       marginRight: 8,
//       color:'#6c7275',
//  },
//  input:{
//   flex: 1,
//     fontSize: 16,
//     color: '#141718',
//     fontFamily: 'Inter'
//  }

//   });

import { Redirect } from 'expo-router';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function PhoneSignScreen() {
  const [phoneNumber, setPhoneNumber] = useState(''); // State to handle phone number input

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.text}>Your Phone Number</Text>
      <Text style={styles.text1}>Provide your phone number to sign up</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="phone" size={24} style={styles.icon} />
        {/* <Text style={styles.buttontext}>Phone number</Text> */}
        <TextInput
          style={styles.input}
          placeholder=" phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Link href="/verifyphone">
          <Text style={styles.buttonText1}>Continue</Text>
        </Link>
      </View>

      <Text>
        Have an account?{' '}
        <Text style={{ color: 'red' }}>Sign in</Text>
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 12,
    width: 311,
    height: 60,
    backgroundColor: '#F3F5F7',
  },
  icon: {
    marginRight: 8,
    color: '#6C7275',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#141718',
    fontFamily: 'Inter',
  },
  buttonContainer: {
    backgroundColor: '#020A3C',
    width: 311,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText1: {
    color: '#FEFEFE',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: 'Inter',
    letterSpacing: 0.24,
  },
  text: {
    fontSize: 40,
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
  buttontext:{
          fontSize:14,
          fontWeight:500,
          lineHeight:24,
          fontFamily:'Inter',
          color:'#6C7275'
    
        },
});
