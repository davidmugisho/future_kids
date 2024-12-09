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
        <Text></Text>
        <Text></Text>
        <Pressable style={styles.button}>
          <FontAwesome name="google" color="#000000" size={24} style={styles.icon}/>
          <Text style={styles.buttontext}>Sign up with Google</Text>
        </Pressable>
        <View style={styles.buttonContainer}>
            {/* <Link href="/sign_up" style={styles.button}> */}
              <Text style={styles.buttonText}>Get Started</Text>
            {/* </Link> */}
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
    button:{

    },
    buttontext:{

    },
    buttonContainer:{

    },
    buttonText:{

    }

  });