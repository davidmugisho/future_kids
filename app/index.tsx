import { Text, View,  StyleSheet } from 'react-native';

import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Future kid</Text>
    <Link href="/splash" style={styles.Button}>
    next
    </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020A3C',
    alignItems: 'center',
    justifyContent: 'center',
    gap:11,
  },
  text: {
    color: '#fff',
    fontSize:20,
    top:320,
  },
  Button:{
    fontSize:15,   
    textDecorationLine:'underline',
    color:'#FFFFFF',
     top:350,
     left: 'auto'
  }
}
);
