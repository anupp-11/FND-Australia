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
import { Card, Paragraph, Title } from 'react-native-paper';
import WebView from 'react-native-webview';



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
              FND Australia
            </Text>

            <Text style = {styles.name}>
              <Text style = {{color : theme.colors.secondary}}>
                Welcome 
              </Text>
              {" "}
              <Text style = {{color : theme.colors.primary}}>
                  Sohit ! 
              </Text>
            </Text>
           
            </View>
            <View style={{padding:10}}>
              <Card>
                <Card.Cover source={require('../../assets/images/post1img.png')} style={{flex:1, width:'100%', resizeMode:"cover" }} />
                <Card.Content>
                  <Title style={{marginTop:10}}>Know more about recovery</Title>
                </Card.Content>
              </Card>
            </View>
            
            <View style={{padding:10}}>
              <Card>
                <Card.Cover source={require('../../assets/images/Upcoming-Events.jpg')} style={{flex:1, width:'100%', resizeMode:"cover" }} />
                <Card.Content>
                  <Title style={{marginTop:10}}>Upcoming Events</Title>
                </Card.Content>
              </Card>
            </View>
            {/* <WebView
              source={{uri: 'https://fndaus.org.au/news-and-events/'}}
              style={{width:'100%', height:600}}
            /> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
