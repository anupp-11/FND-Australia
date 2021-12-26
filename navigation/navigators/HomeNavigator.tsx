import { useNavigation, CommonActions } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import React from "react";
import DailyLogsScreen from "../../screens/DailyLogsScreen";
import HomeScreen from "../../screens/HomeScreen";
import { HomeTabParamList } from "../../types";

const HomeStack = createStackNavigator<HomeTabParamList>();

export default function HomeNavigator() {
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
        name="DailyLogsScreen"
        component={DailyLogsScreen}
       
      />
      
    </HomeStack.Navigator>
  );
}
