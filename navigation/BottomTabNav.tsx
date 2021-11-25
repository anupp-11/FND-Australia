//import liraries
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import OfferScreen from '../screens/OfferScreen';
// import ShoppingCartScreen from '../../src/screens/ShoppingCartScreen';
// import ExploreScreen from '../screens/ExploreScreen';
// import ProfileScreen from '../screens/ProfileScreen';
import Feather from 'react-native-vector-icons/Feather';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
//import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

// create a component
const BottomTabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#40BFFF',
        inactiveTintColor: '#9098B1',
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

      {/* <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="search" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ShoppingCartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="shopping-cart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Offer"
        component={OfferScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="tag" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="user" color={color} size={20} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

//make this component available to the app
export default BottomTabNav;
