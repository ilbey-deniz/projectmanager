import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProjectsScreen from './src/screens/projects';
import CalendarScreen from './src/screens/calendar';
import SettingsScreen from './src/screens/settings';

const Tab = createMaterialTopTabNavigator();

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
          }else if (route.name === 'Calendar') {
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
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    }</NavigationContainer>
  );
};

export default App;
