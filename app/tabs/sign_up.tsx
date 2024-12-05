import { Redirect } from 'expo-router';
import react from 'react';
import { View ,Text,  StyleSheet, Pressable} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function SignupScreen () {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Set up your account</Text>
        <Text style={styles.text2}>
          Create your account for a better{'\n'}experience
        </Text>
        <Pressable style={styles.button}>
          <FontAwesome name="phone" color="#000000" size={24} style={styles.icon}/>
          <Text style={styles.buttontext}>Sign up with a phone number</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <FontAwesome name="google" color="#000000" size={24} style={styles.icon}/>
          <Text style={styles.buttontext}>Sign up with Google</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <FontAwesome name="phone" color="#000000" size={24} style={styles.icon}/>
          <Text style={styles.buttontext}>Sign up with email</Text>
        </Pressable>
      </View>
  );
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
        paddingBottom: 60,
        paddingLeft: 32,
        gap: 32,
        // backgroundColor: '#FEFEFE', // You can change this as needed
        backgroundColor:'#140606',
          justifyContent: 'center',
          alignItems: 'center',
          
    },
    text:{
        color: '#d31212',
        // color:'#141718'
        width: 311,
        height: 40,
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 40,
        letterSpacing: -0.48, // -2% letter spacing (24 * -2% = -0.48)
        textAlign: 'center', //
    },
    text2:{
        color: '#d31212',
        // tintColor:'#6C7275'
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
    borderRadius: 12,
    width: 311,
    height: 56,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 16,
    gap: 8,
    },
    buttontext:{
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter',
    letterSpacing: -0.48,
    color: '#141718',
    marginLeft: 8,
    },
    icon:{
         marginRight: 8,
    }

})