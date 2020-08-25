import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    FlatList,
    StyleSheet
  } from 'react-native';


const DATA = require('./projectsList.json');

function ProjectsScreen() {
    
    return (
      <View>
        <ImageBackground source={require('./View/arkaplan_1.jpg')} style={{width: 415, height: 700}}>
          <FlatList 
          data= {DATA}
          renderItem= {({item}) => {
            return (
            <Text>{item.name}</Text>
            );
          }}  
          >

          </FlatList>
        </ImageBackground>
      </View>
    );
  }
  export default ProjectsScreen;