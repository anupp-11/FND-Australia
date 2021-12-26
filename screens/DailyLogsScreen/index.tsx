import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './styles';
import { theme } from '../../components/LoginComponents/theme';
import SleepDuration from '../../components/DailyLogs/SleepDuration';
import Mood from '../../components/DailyLogs/Mood';
import SleepQuality from '../../components/DailyLogs/Sleep/index';
import PhysicalHealthRating from '../../components/DailyLogs/PhysicalHealthRating';
import PhysicalActivityLevel from '../../components/DailyLogs/PhysicalActivityLevel';
import StressLevel from '../../components/DailyLogs/StressLevel';
import GoalAchievement from '../../components/DailyLogs/GoalAchievement';
import Stepper from "react-native-stepper-ui";

const content = [
  <Mood/>,
  <SleepQuality/>,
  <StressLevel/>,
  <PhysicalHealthRating/>,
  <SleepDuration/>,
  <PhysicalActivityLevel/>,
  <GoalAchievement/>,
];

const DailyLogsScreen = ({searchValue}: {searchValue: string}) => {
  const [active, setActive] = useState(0);
  console.log(searchValue);
  return (
    <View style={{ marginVertical: 80, marginHorizontal: 20 }}>
      <Stepper
        active={active}
        content={content}
        onNext={() => setActive((p) => p + 1)}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => Alert.alert("Finish")}
      />
    </View>
  );
};

export default DailyLogsScreen;
