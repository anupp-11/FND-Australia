import React from 'react';
import {
  FlatList,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import DailyLogComponent from './DailyLogComponent';
import SMPComponent from './SMPComponent';
import SMRComponent from './SMRComponent';
const SYMPTOMS=require('./../../data/symptoms.json');


export default class SMRList extends React.Component {
  
  constructor(props: any,) {
    super(props);
   
    this.state = {
      isProcessing: true,
      symptoms:SYMPTOMS,
      forms : [
        {
          date : new Date().toDateString(),
          recordedTime : new Date().toLocaleTimeString(),
          createdAt:"2022-01-31",
          mood:"2",
          moodText:"I was happy today",
          sleepQuality:"5",
          sleepQualityText:"My Sleep was enough.",
          stressLevel:6,
          stressLevelText:"Mid Stress Level",
          physicalWellbeingRating:5,
          physicalWellbeingRatingText:"Mid ratings",
          sleepDuration:"5 Hr 15 Min",
          sleepDurationText:"Sound",
          physicalActivityLevel:"low",
          physicalActivityLevelText:"I slept all day.",
          goalAchievement:"I completed my daily achievement.",
          
        },
        {
          createdAt:"2022-01-31",
          mood:"3",
          moodText:"I was happy today",
          sleepQuality:"10",
          sleepQualityText:"My Sleep was enough.",
          stressLevel:"6",
          stressLevelText:"Mid Stress Level",
          physicalWellbeingRating:"5",
          physicalWellbeingRatingText:"Mid ratings",
          sleepDuration:"5 Hr 15 Min",
          sleepDurationText:"Sound",
          physicalActivityLevel:"low",
          physicalActivityLevelText:"I slept all day.",
          goalAchievement:"I completed my daily achievement.",
        },
        {
          createdAt:"2022-01-31",
          mood:"5",
          moodText:"I was happy today",
          sleepQuality:"10",
          sleepQualityText:"My Sleep was enough.",
          stressLevel:"6",
          stressLevelText:"Mid Stress Level",
          physicalWellbeingRating:"5",
          physicalWellbeingRatingText:"Mid ratings",
          sleepDuration:"5 Hr 15 Min",
          sleepDurationText:"Sound",
          physicalActivityLevel:"low",
          physicalActivityLevelText:"I slept all day.",
          goalAchievement:"I completed my daily achievement.",
        },
      ]
     
    };
   
  }

   renderItem = ({ item }) => <DailyLogComponent form={item} navigation={this.props.navigation} />;
 
  render() {
    return (
        <FlatList
              
              showsVerticalScrollIndicator={false}
              data={this.state.forms}
              renderItem={this.renderItem}
              horizontal={false}
              style={{
                width: "100%",
               
              }}
             />
     );
  }
};