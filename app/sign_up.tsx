import { Redirect } from 'expo-router';
import react from 'react';
import { Link } from 'expo-router';
import { View ,Text,  StyleSheet, Pressable} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


// export const unstable_settings = {
//   headerShown: false, // This removes the header for this screen
// };

export default function SignupScreen () {
    return(
      <View style={styles.container}>
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
          <FontAwesome name="google" color="#000000" size={24} style={styles.icon}/>
          <Text style={styles.buttontext}>Sign up with Google</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <FontAwesome name="phone" color="#000000" size={24} style={styles.icon}/>
          <Text style={styles.buttontext}>Sign up with email</Text>
        </Pressable>
        <Text style={styles.textsign}>Have an account? Sign in</Text>
      </View>
  );y
};
const styles = StyleSheet.create({
    
    container:{
        // width: 375,
        height: 494,
        // top: 1158,
        // left: 1048,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingTop: 10,
        paddingRight: 32,
        paddingBottom: 5,
        paddingLeft: 32,
        gap: 32,
        backgroundColor: '#FEFEFE', 
        justifyContent: 'center',
        alignItems: 'center',
          
    },
    text:{
        color:'#141718',
        width: 311,
        height: 40,
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 24,
        lineHeight: 40,
        letterSpacing: -0.48, // -2% letter spacing (24 * -2% = -0.48)
        textAlign: 'center', 
    },
    text2:{
        tintColor:'#6C7275',
        width: 311,
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize:16,
        lineHeight: 24,
        letterSpacing: -0.48, 
        textAlign: 'center',
    },
    button:{
    backgroundColor: '#E8ECEF',
    borderRadius: 15,
    width: 311,
    height: 56,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 16,
    gap: 8,

    },
    buttontext:{
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter',
    letterSpacing: -0.48,
    color: '#141718',
    marginLeft: 8,
    },
    icon:{
         marginRight: 8,
    },
    textsign:{
    paddingHorizontal: 16,
        width: 325,
        height:36,
        fontSize: 14,
        lineHeight:24,
        fontWeight:500,


    }

})