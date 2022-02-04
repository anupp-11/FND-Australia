
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import SymptomScreen from '../screens/SymptomScreen';
import MediaScreen from '../screens/MediaScreen';

import { theme } from '../components/LoginComponents/theme';
import ProfileNavigator from './navigators/ProfileNavigator';
import HomeNavigator from './navigators/HomeNavigator';
import SymptomNavigator from './navigators/SymptomNavigator';


const Tab = createBottomTabNavigator();

// create a component
const BottomTabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        
        activeTintColor: "white",
        inactiveTintColor: theme.colors.secondary,
        style: {
          backgroundColor: theme.colors.primary,
          //paddingBottom: 3
        }
      }}>
      <Tab.Screen
        component={ HomeNavigator }
        name="BHome"
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="home" color={color} size={20} />
          ),
        }}
      />

       <Tab.Screen
        name="Symptom"
        component={SymptomNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FAIcons name="user-md" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Media"
        component={MediaScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="personal-video" color={color} size={20} />
          ),
        }}
      />
    
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="menu" color={color} size={20} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
};

export default BottomTabNav;
