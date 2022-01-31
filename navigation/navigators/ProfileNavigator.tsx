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
import SMPForm from "../../screens/Forms/SMPForm";
import SymptomMonitoringRecordScreen from "../../screens/Forms/SymptomMonitoringRecordScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import AppSettingScreen from "../../screens/ProfileScreen/AppSettingScreen";
import DiagnosisScreen from "../../screens/ProfileScreen/DiagnosisScreen";
import DonationScreen from "../../screens/ProfileScreen/DonationScreen";
import ExerciseScreen from "../../screens/ProfileScreen/ExerciseScreen";
import FAQs from "../../screens/ProfileScreen/FAQs";
import ManageProfileScreen from "../../screens/ProfileScreen/ManageProfileScreen";
import MusicScreen from "../../screens/ProfileScreen/MusicScreen";
import MWBSScreen from "../../screens/ProfileScreen/MWBSScreen";
import StoryScreen from "../../screens/ProfileScreen/Stories";
import StoryInfoComponent from "../../screens/ProfileScreen/StoryInfoComponent";
import UsefulLinksScreen from "../../screens/ProfileScreen/UsefulLinksScreen";

import { ProfileTabParamList } from "../../types";

const ProfileStack = createStackNavigator<ProfileTabParamList>();

export default function ProfileNavigator() {
  const navigation = useNavigation();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile Screen"
        component={ProfileScreen}
        
      />
      <ProfileStack.Screen
        name="Seizure Monitoring Record"
        component={SymptomMonitoringRecordScreen}
      />
      <ProfileStack.Screen
        name="Functional Seizure Information"
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
      <ProfileStack.Screen
        name="FAQs"
        component={FAQs}
      />
       <ProfileStack.Screen
        name="My Seizure Management Plan"
        component={SMPForm}
      />
      <ProfileStack.Screen
        name="App Setting"
        component={AppSettingScreen}
      />
      
      <ProfileStack.Screen
        name="Stories"
        component={StoryScreen}
      />
      <ProfileStack.Screen
        name="Exercise"
        component={ExerciseScreen}
      />
      <ProfileStack.Screen
        name="Soothing Music"
        component={MusicScreen}
      />
      <ProfileStack.Screen
        name="Story"
        component={StoryInfoComponent}
      />
      <ProfileStack.Screen
        name="Diagnosis"
        component={DiagnosisScreen}
      />
     
      
    </ProfileStack.Navigator>
  );
}
