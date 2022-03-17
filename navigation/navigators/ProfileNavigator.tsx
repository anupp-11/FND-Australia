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
import DailyLogInfoComponent from "../../screens/ProfileScreen/DailyLogInfoComponent";
import DailyLogList from "../../screens/ProfileScreen/DailyLogList";
import DiagnosisScreen from "../../screens/ProfileScreen/DiagnosisScreen";
import DonationScreen from "../../screens/ProfileScreen/DonationScreen";
import ExerciseScreen from "../../screens/ProfileScreen/ExerciseScreen";
import FAQs from "../../screens/ProfileScreen/FAQs";
import FilledFormScreen from "../../screens/ProfileScreen/FilledFormScreen";
import ManageProfileScreen from "../../screens/ProfileScreen/ManageProfileScreen";
import MusicScreen from "../../screens/ProfileScreen/MusicScreen";
import MWBSScreen from "../../screens/ProfileScreen/MWBSScreen";
import SMPInfoComponent from "../../screens/ProfileScreen/SMPInfoComponent";
import SMPList from "../../screens/ProfileScreen/SMPList";
import SMRInfoComponent from "../../screens/ProfileScreen/SMRInfoComponent";
import SMRList from "../../screens/ProfileScreen/SMRList";
import StoryScreen from "../../screens/ProfileScreen/Stories";
import StoryInfoComponent from "../../screens/ProfileScreen/StoryInfoComponent";
import UsefulLinksScreen from "../../screens/ProfileScreen/UsefulLinksScreen";
import ReferenceScreen from "../../screens/ProfileScreen/ReferenceScreen";

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
       <ProfileStack.Screen
        name="My Records"
        component={FilledFormScreen}
      />
      <ProfileStack.Screen
        name="Seizure Management Plan"
        component={SMPList}
      />
      <ProfileStack.Screen
        name="Form Info"
        component={SMPInfoComponent}
      />
       <ProfileStack.Screen
        name="Seizure Monitoring Records"
        component={SMRList}
      />
      <ProfileStack.Screen
        name="Form Information"
        component={SMRInfoComponent}
      />
       <ProfileStack.Screen
        name="My Daily Logs"
        component={DailyLogList}
      />
       <ProfileStack.Screen
        name="Daily Log"
        component={DailyLogInfoComponent}
      />

      <ProfileStack.Screen
        name="References"
        component={ReferenceScreen}
      />
      
    </ProfileStack.Navigator>
  );
}
