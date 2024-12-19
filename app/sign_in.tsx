import { Redirect } from 'expo-router';
import react from 'react';
import { Link } from 'expo-router';
import { View ,Text,  StyleSheet, Pressable, Image} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


// export const unstable_settings = {
//   headerShown: false, // This removes the header for this screen
// };

export default function signinScreen () {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Sign into your account</Text>
        <Text style={styles.text2}>
        Sign in for a better experience</Text>
        <Pressable style={styles.button}>
          <Link href={"/Sign_in_phone"}>
          <FontAwesome name="phone" color="#000000" size={24} style={styles.icon}/>
          <Text style={styles.buttontext}>Sign in with a phone number</Text>
          </Link>
        </Pressable>

        <Pressable style={styles.button}>
        <Image
        source={require('../assets/images/googleloogo.jpg')}
        style={styles.googleIcon}
      />
          <Text style={styles.buttontext}>Sign in with Google</Text>
        </Pressable>

        <Pressable style={styles.button}>
        <Link href={"/Sign_in_email"}>
          <FontAwesome name="envelope" color="#000000" size={24} style={styles.icon}/>
          <Text style={styles.buttontext}>Sign in with email</Text>
          </Link>
        </Pressable>
      </View>
  );
};
const styles = StyleSheet.create({
    
    container:{
        
        width: 311, // Fixed width
        height: 368, // Hug height
        marginTop: 180, // Top offset
        marginLeft: 32, // Left offset 
        gap: 32, // Vertical gap (spacing between children)
        backgroundColor: '#EFEFEF', // Optional: Background color
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
        borderRadius: 16, // Optional: Rounded corners  
    },
    text:{
        color:'#141718',
        width: 311,
        height: 40,
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 26,
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
    googleIcon: {
      width: 24,  
      height: 24, 
      marginRight: 12,
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