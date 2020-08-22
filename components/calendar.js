import React from 'react';
import {
    View,
    Text,
    ImageBackground,
  } from 'react-native';


function CalendarScreen() {
    return (
      <View>
        <ImageBackground source={require('./View/arkaplan_2.jpg')} style={{width: 415, height: 700}}>
      
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Calendar</Text>
          </View>
        </ImageBackground>
        </View>
    );
  }
  export default CalendarScreen;