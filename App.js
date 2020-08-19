import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Deneme from './components/Deneme';
import {
  Button,
  Alert, 
  View,
  Text,
  TextInput,
} from 'react-native';

const Tab = createBottomTabNavigator();


function ProjectsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Projects</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, alignItems: 'bottom', justifyContent: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}

function Calender() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calender</Text>
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

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
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
