import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Deneme from './components/Deneme';
import {
  Button,
  Alert, 
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const Tab = createMaterialTopTabNavigator();
const image = './components/View/A.png' ;


function ProjectsScreen() {
  return (
    <View>
      <ImageBackground source={require('./components/View/A.jpg')} style={{width: 415, height: 700}}>
    
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Projects</Text>
        </View>
      </ImageBackground>
      </View>
  );
}

function Settings() {
  return (
    <View>
      <ImageBackground source={require('./components/View/A.jpg')} style={{width: 415, height: 700}}>
    
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Settings</Text>
        </View>
      </ImageBackground>
      </View>
  );
}

function Calender() {
  return (
    <View>
      <ImageBackground source={require('./components/View/A.jpg')} style={{width: 415, height: 700}}>
    
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Calendar</Text>
        </View>
      </ImageBackground>
      </View>
  );
}



function App(){
  return (
    <NavigationContainer>{
      
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Projects') {
            iconName = focused
              ? "md-bar-chart"
              : "md-bar-chart-outline";
          }else if (route.name === 'Calender') {
            iconName = focused
              ? "md-calendar"
              : "md-calendar-outline";
          }else if (route.name === 'Settings') {
            iconName = focused
              ? "md-person"
              : "md-person-outline";
          } 

          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      
      tabBarPosition= {'bottom'}

      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: 'true'

      }}
      >
        <Tab.Screen name="Projects" component={ProjectsScreen} />
        <Tab.Screen name="Calender" component={Calender} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    }</NavigationContainer>
  );
};

export default App;
