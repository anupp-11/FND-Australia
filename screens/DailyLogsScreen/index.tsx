import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator,
  
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import { clearDailyLogs, getDataFromDevice } from '../../service/DailyLogsService';
import { DailyLogModel } from '../../models/BaseModel';
import { getUserFromDevice } from '../../service/AccountService';
import { dailyLogsAdd } from '../../service/FormService';


const content = [
  <Mood/>,
  <SleepDuration/>,
  <SleepQuality/>,
  <PhysicalHealthRating/>,
  <PhysicalActivityLevel/>,
  <StressLevel/>, 
  <GoalAchievement/>,
];


const DailyLogsScreen = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const [isProcessing, setisProcessing ] = React.useState<boolean>(false);

  const onSubmit = async () =>{

    setisProcessing(true);
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
    const dateTime = new Date;
    const SLEEP_DURATION_VALUE = `${SLEEP_DURATION_HOUR}Hr ${SLEEP_DURATION_MIN}Min`
    const user = await getUserFromDevice();
    const dailyLogData = new DailyLogModel(
      user,
      dateTime,
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
      await clearDailyLogs();
      setisProcessing(false);
      debugger;
      if(response?.isError){
        Alert.alert(response.message);

      }
      else{
        Alert.alert(
          "Successful",
          "Your Daily Log has been submitted.",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressedd"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
        navigation.dispatch(
          StackActions.replace('Home',{
          })
        );
      }
    } catch (error) {
      setisProcessing(false);
      await clearDailyLogs();
      console.log(error);
      Alert.alert("Failed",error.message);
    }

  }
  return (
    <View style={{ marginVertical: 80, marginHorizontal: 20 }}>
      {isProcessing ==true ? (
        <View style={{
          position:'absolute',
          top:'50%',
          marginLeft:'auto',
          marginRight:'auto',
          left:0,
          right:0,
          zIndex: 1
          }}>
        <ActivityIndicator size="large" color={theme.colors.primary}/> 
        </View>):(<View></View>)}
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


