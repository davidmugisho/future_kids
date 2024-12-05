import { Redirect } from 'expo-router';
import reacte from 'react';
import { View ,Text,  StyleSheet} from 'react-native';

export default function SignupScreen () {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>HELLO</Text>
        <Text style={styles.text}>HELLO</Text>

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
        width: 311,
        height: 40,
        fontFamily: 'Inter', // Make sure you have this font available
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 40,
        letterSpacing: -0.48, // -2% letter spacing (24 * -2% = -0.48)
        textAlign: 'center', // Aligns text in the center
    }
    // container2:{
    //     width: 375,
    //     height: 494,
    //     top: 1158,
    //     left: 1048,
    //     paddingTop: 10,
    //     paddingRight: 32,
    //     paddingBottom: 60,
    //     paddingLeft: 32,
    //     gap: 32,
    //     backgroundColor:'#df1111',
    // }
})