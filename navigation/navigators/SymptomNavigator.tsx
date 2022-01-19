import { useNavigation, CommonActions } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import React from "react";
import DailyLogsScreen from "../../screens/DailyLogsScreen";
import ExploreScreen from "../../screens/SymptomScreen";
import HomeScreen from "../../screens/HomeScreen";
import {  SymptomTabParamList } from "../../types";
import SymptomInfoComponent from "../../screens/SymptomScreen/SymptomInfoComponent";

const SymptomStack = createStackNavigator<SymptomTabParamList>();

export default function SymptomNavigator() {
  const navigation = useNavigation();
  return (
    <SymptomStack.Navigator>
      <SymptomStack.Screen
        name="SymptomScreen"
        component={ExploreScreen}
        options = {{
          headerShown: false
        }}
        
      />
      <SymptomStack.Screen
        name="SymptomInfo"
        component={SymptomInfoComponent}
       
      />
      
    </SymptomStack.Navigator>
  );
}