
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground } from 'react-native';

const LogInPage = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={require('../views/arkaplan_1.jpg')} style={{width: 415, height: 700}}>
      <Button
        onPress={() => navigation.navigate('MainPage')}
        title="asdda"
      />
    
     </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

  export default LogInPage;