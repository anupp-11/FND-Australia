import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../../screens/HomeScreen/index";
import ContactUsScreen from "../../screens/HomeScreen/ContactUsScreen";
import FollowUsScreen from "../../screens/HomeScreen/FollowUsScreen";
import NewsScreen from "../../screens/HomeScreen/NewsScreen";
import NewsNavigator from "./NewsNavigator";
import ServiceNavigator from "./ServiceNavigator";



const HomeStack = createStackNavigator();

export default function  HomeNavigator() {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options = {{
            headerShown: false
          }}
      />

    <HomeStack.Screen
        name="ContactUs"
        component={ContactUsScreen}
        
        options={{
          headerBackTitleVisible: false,
        }} 
    />

    <HomeStack.Screen
        name="FollowUs"
        component={FollowUsScreen}
        options={{
          headerBackTitleVisible: false,
        }} 
    />
    <HomeStack.Screen
        name="News"
        component={NewsNavigator}
        options={{
          headerShown: false,
        }} 
    />
    <HomeStack.Screen
        name="Services"
        component={ServiceNavigator}
        options={{
          headerShown: false,
        }} 
    />
    </HomeStack.Navigator>
  );
}
