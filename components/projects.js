import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    FlatList,
    StyleSheet
  } from 'react-native';


function ProjectsScreen() {
    
    return (
      <View>
        <ImageBackground source={require('./View/arkaplan_1.jpg')} style={{width: 415, height: 700}}>
          <Text>Projets</Text>
        </ImageBackground>
      </View>
    );
  }
  export default ProjectsScreen;