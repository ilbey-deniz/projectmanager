import ProjectDetail from '../components/projectDetail' 
import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    FlatList,
    StyleSheet
  } from 'react-native';




const DATA = require('../components/projectsList.json');

function ProjectsScreen() {
    
    return (
      <View>
        <ImageBackground source={require('../views/arkaplan_1.jpg')} style={{width: 415, height: 700}}>
          <FlatList 
            data= {DATA}
            renderItem= {({item}) => {
              return (
              <Text>{item.name} - {<ProjectDetail />}</Text>
              );
            }}  
          >
          </FlatList>
        </ImageBackground>
      </View>
    );
  }
  export default ProjectsScreen;

