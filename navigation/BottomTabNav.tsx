
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen';
import MediaScreen from '../screens/MediaScreen';

import { theme } from '../components/LoginComponents/theme';


const Tab = createBottomTabNavigator();

// create a component
const BottomTabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.secondary,
      }}>
      <Tab.Screen
        component={ HomeScreen }
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
            <Feather name="search" color={color} size={20} />
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
      />{/*
      <Tab.Screen
        name="Offer"
        component={OfferScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="tag" color={color} size={20} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
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
