import { Redirect } from 'expo-router';
import react from 'react';
import { Link } from 'expo-router';
import { View ,Text,  StyleSheet, Pressable} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


// export const unstable_settings = {
//   headerShown: false, // This removes the header for this screen
// };

export default function phoneSignScreen () {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Your Phone number</Text>
        <Text style={styles.text1}>Provide your phone number to sign up</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttontext}>Phone number</Text>
        </Pressable>
        <View style={styles.buttonContainer}>
            <Link href="/verifyphone" style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Link>
          </View>
          <Text>Have an account? Sign in</Text>
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
    button:{
      borderRadius: 12,
      padding : 20,
      width:311,
      height:56,
      gap: 12,
      backgroundColor:'#F3F5F7'
    },
    buttontext:{

    },
    buttonContainer:{

    },
    buttonText:{

    },
    text:{
      fontSize:40,
      lineHeight:48,
      fontWeight:700,
      color:'#141718'
    },
    text1:{
      fontSize:14,
      fontWeight: 500,
      lineHeight:24,
      color:'#141718',
      fontFamily:'Inter'
    
    }
      

  });