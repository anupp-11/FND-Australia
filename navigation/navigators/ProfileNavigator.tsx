import { Ionicons } from "@expo/vector-icons";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import React from "react";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import { PRIMARY_COLOR, PRIMARY_WHITE_COLOR } from "../../constants/Colors";
import DailyLogsScreen from "../../screens/DailyLogsScreen";
import SeizureMgmtPlanScreen from "../../screens/Forms/SeizureMgmtPlanScreen";
import SymptomMonitoringRecordScreen from "../../screens/Forms/SymptomMonitoringRecordScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import DonationScreen from "../../screens/ProfileScreen/DonationScreen";
import ManageProfileScreen from "../../screens/ProfileScreen/ManageProfileScreen";
import MWBSScreen from "../../screens/ProfileScreen/MWBSScreen";
import UsefulLinksScreen from "../../screens/ProfileScreen/UsefulLinksScreen";

import { ProfileTabParamList } from "../../types";

const ProfileStack = createStackNavigator<ProfileTabParamList>();

export default function ProfileNavigator() {
  const navigation = useNavigation();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        
      />
      <ProfileStack.Screen
        name="SMRScreen"
        component={SymptomMonitoringRecordScreen}
      />
      <ProfileStack.Screen
        name="SMPScreen"
        component={SeizureMgmtPlanScreen}
      />
      <ProfileStack.Screen
        name="Manage Profile"
        component={ManageProfileScreen}
      />
       <ProfileStack.Screen
        name="My Wellbeing Strategies"
        component={MWBSScreen}
      />
      <ProfileStack.Screen
        name="Daily Logs"
        component={DailyLogsScreen}
      />
      <ProfileStack.Screen
        name="Useful Links"
        component={UsefulLinksScreen}
      />
      <ProfileStack.Screen
        name="Donation"
        component={DonationScreen}
      />
    </ProfileStack.Navigator>
  );
}
