
// import { Redirect } from 'expo-router';
// import React, { useState } from 'react';
// import { Link } from 'expo-router';
// import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
// import FontAwesome from '@expo/vector-icons/FontAwesome';

// export default function PhoneSignScreen() {
//   const [phoneNumber, setPhoneNumber] = useState(''); // State to handle phone number input

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <Text style={styles.text}>Your Phone Number</Text>
//       <Text style={styles.text1}>Provide your phone number to sign up</Text>

//       <View style={styles.inputContainer}>
//         <FontAwesome name="phone" size={24} style={styles.icon} />
//         {/* <Text style={styles.buttontext}>Phone number</Text> */}
//         <TextInput
//           style={styles.input}
//           placeholder=" phone number"
//           keyboardType="phone-pad"
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Link href="/verifyphone">
//           <Text style={styles.buttonText1}>Continue</Text>
//         </Link>
//       </View>

//       <Text>
//         Have an account?{' '}
//         <Text style={{ color: 'red' }}>Sign in</Text>
//       </Text>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: 311,
//     height: 368,
//     marginTop: 180,
//     marginLeft: 32,
//     gap: 32,
//     backgroundColor: '#EFEFEF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     width: 311,
//     height: 60,
//     backgroundColor: '#F3F5F7',
//   },
//   icon: {
//     marginRight: 8,
//     color: '#6C7275',
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: '#141718',
//     fontFamily: 'Inter',
//   },
//   buttonContainer: {
//     backgroundColor: '#020A3C',
//     width: 311,
//     height: 60,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText1: {
//     color: '#FEFEFE',
//     fontSize: 16,
//     fontWeight: '600',
//     lineHeight: 24,
//     fontFamily: 'Inter',
//     letterSpacing: 0.24,
//   },
//   text: {
//     fontSize: 40,
//     lineHeight: 48,
//     fontWeight: '700',
//     color: '#141718',
//   },
//   text1: {
//     fontSize: 14,
//     fontWeight: '500',
//     lineHeight: 24,
//     color: '#141718',
//     fontFamily: 'Inter',
//   },
//   buttontext:{
//           fontSize:14,
//           fontWeight:500,
//           lineHeight:24,
//           fontFamily:'Inter',
//           color:'#6C7275'
    
//         },
// });
import { Redirect } from 'expo-router'; // Corrected line
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


export default function PhoneSignUpScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.text}>Your Phone Number</Text>
      <Text style={styles.text1}>Provide your phone number to sign up</Text>

      {/* Input with phone icon */}
      <Pressable style={styles.inputContainer}>
        <FontAwesome name="phone" size={24} color="#000000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </Pressable>

      <Pressable style={styles.button}>
        <Link href="/verifyphone">
          <Text style={styles.buttonText}>Continue</Text>
        </Link>
      </Pressable>
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
    fontSize: 16,
    color: '#6C7275',
    textAlign: 'center',
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
});
