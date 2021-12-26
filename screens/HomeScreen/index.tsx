import React from 'react';
import {
  View,
  Text,
  ScrollView,
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
import Button from '../../components/LoginComponents/Button';

import { useNavigation } from '@react-navigation/native';
import Background from '../../components/LoginComponents/Background';



const HomeScreen = ({searchValue}: {searchValue: string}) => {
  const navigation = useNavigation();
  const onButtonPress = () => {
    navigation.navigate('DailyLogsScreen');
  };
  
  return (
    <View  >
      <ScrollView>
          <View style = {styles.container}>
          
            <Text style = {styles.header}>
              My FND Australia
            </Text>

            <Text style = {styles.name}>
              <Text style = {{color : theme.colors.secondary}}>
                Welcome 
              </Text>
              {" "}
              <Text style = {{color : theme.colors.primary}}>
                  Anup ! 
              </Text>
            </Text>

            <Text style = {{marginTop: 10 ,color : theme.colors.secondary, fontSize : 20, fontWeight: '600', }}>
              How are you feeling today?
            </Text>

            </View>
            <Background>
              <Button  mode="contained" onPress={onButtonPress}>
                Daily Logs
              </Button>
            </Background>
            
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
