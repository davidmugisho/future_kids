import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      {/* Small Circle Loader */}
      <View style={styles.circle}>
        <ActivityIndicator size="small" color="#0084FF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',      // Center horizontally
    backgroundColor: '#FFFFFF', // Optional: Background color
  },
  circle: {
    width: 24, // Width of the circle
    height: 24, // Height of the circle
    borderRadius: 20, // Makes it a circle
    backgroundColor: '#0084FF00', // Transparent circle background
    justifyContent: 'center', // Center the loader inside the circle
    alignItems: 'center',
    borderColor: '#0084FF', // Circle border color
    borderWidth: 2, // Optional: Adds a border to the circle
  },
});
