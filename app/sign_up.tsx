import { Redirect } from 'expo-router';
import react from 'react';
import { Link } from 'expo-router';
import { View ,Text,  StyleSheet, Pressable, Image} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';




export default function SignupScreen () {
    return(
      <View style={styles.container}>
          <View style={styles.handle}></View>
        <Text style={styles.text}>Set up your account</Text>
        <Text style={styles.text2}>
          Create your account for a better{'\n'}experience
        </Text>
        <Pressable style={styles.button}>
          <Link href={"/phoneSign_up"}>
          <FontAwesome name="phone" color="#000000" size={24} style={styles.icon}/>
          <Text style={styles.buttontext}>Sign up with a phone number</Text>
          </Link>
        </Pressable>

        <Pressable style={styles.button}>
        <Image
        source={require('../assets/images/googleloogo.jpg')}
        style={styles.googleIcon}
      />
          {/* <FontAwesome name="google" color="#000000" size={24} style={styles.icon}/> */}
          <Text style={styles.buttontext}>Sign up with Google</Text>
        </Pressable>

        <Pressable style={styles.button}>
        <Link href={"/emailSign_up"}>
          <FontAwesome name="phone" color="#000000" size={24}  style={styles.icon}/>
          <Text style={styles.buttontext}>Sign up with email</Text>
          </Link>
        </Pressable>
        <Text style={styles.textsign}>Have an account? Sign in{' '}
          <Link href={'/sign_in'}>
          <Text style={{color :'red'}}>Sign in</Text>
          </Link>
        </Text>
      </View>
  );
};
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
    handle: {
      width: 70, 
      height: 8, 
      borderRadius: 5, 
      backgroundColor: '#E0E0E0', 
      marginBottom: 20, 
    },
    text: {
      color: '#141718',
      width: 311,
      height: 40,
      fontFamily: 'Inter',
      fontWeight: '900',
      fontSize: 26,
      lineHeight: 40,
      letterSpacing: -0.48,
      textAlign: 'center',
    },
    text2: {
      tintColor: '#6C7275',
      width: 311,
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: -0.48,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#E8ECEF',
      borderRadius: 15,
      width: 311,
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      marginBottom: 5, 
    },
    buttontext: {
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Inter',
      letterSpacing: -0.48,
      color: '#141718',
      marginLeft: 8, 
    },
    icon: {
      marginRight: 12, 
    },
    googleIcon: {
      width: 24,  
      height: 24, 
      marginRight: 12,
    },
    textsign: {
      paddingHorizontal: 16,
      width: 325,
      height: 36,
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 500,
    },
})