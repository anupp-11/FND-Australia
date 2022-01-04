
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen';
import MediaScreen from '../screens/MediaScreen';

import { theme } from '../components/LoginComponents/theme';
import ProfileNavigator from './navigators/ProfileNavigator';
import HomeNavigator from './navigators/HomeNavigator';


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
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="home" color={color} size={20} />
          ),
        }}
      />

       <Tab.Screen
        name="Explore"
        component={ExploreScreen}
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
            <Feather name="user" color={color} size={20} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
};

//make this component available to the app
export default BottomTabNav;
