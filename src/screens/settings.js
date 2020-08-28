import React from 'react';
import {
    View,
    Text,
    ImageBackground,
  } from 'react-native';


function SettingsScreen() {
    return (
      <View>
        <ImageBackground source={require('../views/arkaplan_3.jpg')} style={{width: 415, height: 700}}>
      
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings</Text>
          </View>
        </ImageBackground>
        </View>
    );
  }
  export default SettingsScreen;