
import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue", flex: 0.3,
    //yaraaaaa
    
  }
});

function App(){
  return (
      <View style ={styles.container}>
          <Text> merhaba </Text>
          <Text> merhabana merhaba kardeş </Text>
      
      </View>
  );
};

export default App;
