import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
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
import { StackActions, useNavigation } from '@react-navigation/native';
import { getDataFromDevice } from '../../service/DailyLogsService';
import { DailyLogModel } from '../../models/BaseModel';
import { getUserFromDevice } from '../../service/AccountService';
import { dailyLogsAdd } from '../../service/FormService';


const content = [
  <Mood/>,
  <SleepQuality/>,
  <StressLevel/>,
  <PhysicalHealthRating/>,
  <SleepDuration/>,
  <PhysicalActivityLevel/>,
  <GoalAchievement/>,
];


const DailyLogsScreen = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  
  const onSubmit = async () =>{
    const MOOD_VALUE = await getDataFromDevice("MOOD_VALUE");
    const MOOD_TEXT = await getDataFromDevice("MOOD_TEXT");
    const SLEEP_QUALITY_VALUE = await getDataFromDevice("SLEEP_QUALITY_VALUE");
    const SLEEP_QUALITY_TEXT = await getDataFromDevice("SLEEP_QUALITY_TEXT");
    const STRESS_LEVEL_VALUE = await getDataFromDevice("STRESS_LEVEL_VALUE");
    const STRESS_LEVEL_TEXT= await getDataFromDevice("STRESS_LEVEL_TEXT");
    const PWR_VALUE = await getDataFromDevice("PWR_VALUE");
    const PWR_TEXT = await getDataFromDevice("PWR_TEXT");
    const SLEEP_DURATION_HOUR = await getDataFromDevice("SLEEP_DURATION_HOUR");
    const SLEEP_DURATION_MIN = await getDataFromDevice("SLEEP_DURATION_MIN");
    const SLEEP_DURATION_TEXT = await getDataFromDevice("SLEEP_DURATION_TEXT");
    const PAL_VALUE = await getDataFromDevice("PAL_VALUE");
    const PAL_TEXT = await getDataFromDevice("PAL_TEXT");
    const DA_TEXT = await getDataFromDevice("DA_TEXT");
    const SLEEP_DURATION_VALUE = `${SLEEP_DURATION_HOUR}Hr ${SLEEP_DURATION_MIN}Min`
    const user = await getUserFromDevice();
    const dailyLogData = new DailyLogModel(
      user,
      MOOD_VALUE,
      MOOD_TEXT,
      SLEEP_QUALITY_VALUE?.toString(),
      SLEEP_QUALITY_TEXT,
      STRESS_LEVEL_VALUE?.toString(),
      STRESS_LEVEL_TEXT,
      PWR_VALUE?.toString(),
      PWR_TEXT,
      SLEEP_DURATION_VALUE,
      SLEEP_DURATION_TEXT,
      PAL_VALUE,
      PAL_TEXT,
      DA_TEXT
    ) 

    try {
      const response = await dailyLogsAdd(dailyLogData);
      //setisProcessing(false);
      debugger;
      if(response?.isError){
        //setErrorMessage(response.message);
        Alert.alert(response.message);
        //navigation.navigate('Register');
      }
      else{
        Alert.alert(
          "Successful",
          "Your Daily Log Has been Submitted.",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressedd"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
        //Alert.alert("Daily Log Submitted Successfully.");
        navigation.dispatch(
          StackActions.replace('Home',{
          })
        );
        //this.props.navigation.navigate('Home');
      }
    } catch (error) {
      //setisProcessing(false);
      console.log(error);
      Alert.alert("Failed",error.message);
    }

  }
  return (
    <View style={{ marginVertical: 80, marginHorizontal: 20 }}>
      <Stepper
        active={active}
        content={content}
        onNext={() => setActive((p) => p + 1)}
        onBack={() => setActive((p) => p - 1)}
        onFinish={onSubmit}
        buttonStyle={{backgroundColor: theme.colors.primary,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}
        stepStyle={{backgroundColor: theme.colors.primary,}}
      />
    </View>
  );
};

export default DailyLogsScreen;


