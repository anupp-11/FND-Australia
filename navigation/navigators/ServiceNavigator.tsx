import { Ionicons } from "@expo/vector-icons";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import React from "react";
import NewsComponent from "../../components/NewsComponent/NewsComponent";
import ServicesScreen from "../../screens/HomeScreen/ServicesScreen";

const ServiceStack = createStackNavigator();

export default function ServiceNavigator() {
  const navigation = useNavigation();
  return (
    <ServiceStack.Navigator>
      <ServiceStack.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          headerBackTitleVisible: false,
        }} 
      />
      <ServiceStack.Screen
        name="News Detail"
        component={NewsComponent}
        options={{
          headerBackTitleVisible: false,
        }} 
      />
      
    </ServiceStack.Navigator>
  );
}
