import { Redirect } from 'expo-router';
import react from 'react';
import { Link } from 'expo-router';
import { View ,Text,  StyleSheet, Pressable} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


// export const unstable_settings = {
//   headerShown: false, // This removes the header for this screen
// };

export default function setPasswordNumber () {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Set your password</Text>
        <Text style={styles.text1}>Set the password for your account</Text>
        <Pressable style={styles.inputContainer}>
          <Text style={styles.buttonText}>Password</Text>
        </Pressable>

        <Pressable style={styles.inputContainer1}>
          <Text style={styles.buttonText}>Confirm Password</Text>
        </Pressable>

        <View style={styles.buttonContainer}>
            <Link href="/white">
              <Text style={styles.buttonText1}>Submit</Text>
            </Link>
          </View>
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
        // flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'center',
        borderRadius: 12,
        paddingHorizontal: 12,
        width: 311,
        height: 60,
        backgroundColor: '#F3F5F7',
    },
    inputContainer1:{
        // flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'center',
        borderRadius: 12,
        paddingHorizontal: 12,
        width: 311,
        height: 60,
        backgroundColor: '#F3F5F7',

    },
    buttonText1:{
      color: '#FEFEFE',
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 24,
      fontFamily: 'Inter',
      letterSpacing: 0.24,
    }
  });