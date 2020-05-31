import React from 'react';
import { Text, SafeAreaView, StyleSheet  } from 'react-native';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Page content</Text>
    </SafeAreaView>
    
  ) 

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});