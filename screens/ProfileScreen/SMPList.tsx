import React from 'react';
import {
  FlatList,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import SMPComponent from './SMPComponent';
const SYMPTOMS=require('./../../data/symptoms.json');


export default class SMPList extends React.Component {
  
  constructor(props: any,) {
    super(props);
   
    this.state = {
      isProcessing: true,
      symptoms:SYMPTOMS,
      forms : [
        {
          createdAt: "2022-01-31",
          dateOfBirth: "2019-01-03",
          dateOfPlan: "2019-01-03",
          onMedication:"string",
          medication: "string",
          medicalConditions: ["ABC","BCD"],
          medicalHistory: "string",
          warningSigns: ["ABC","BCD"],
          warningSignText: "string",
          seizureType : "string",
          seizureTypeText : "string",
          seizurePresent : ["ABC","BCD"],
          seizurePresentText : "string",
          durationOfSeizure : "string",
          frequencyOfSeizure : "string",
          assistanceRequired : ["ABC","BCD"],
          assistanceRequiredText : "string",
          notDo : ["ABC","BCD"],
          notDoText : "string",
          needAfterSeizure : "string",
          needAfterSeizureText : "string",
          ambulanceNeeded : ["ABC","BCD"],
          ambulanceNeededText : "string",

        },
        {
          createdAt: "2022-01-31",
          dateOfBirth: "2019-01-03",
          dateOfPlan: "2019-01-03",
          onMedication:"string",
          medication: "string",
          medicalConditions: ["ABC","BCD"],
          medicalHistory: "string",
          warningSigns: ["ABC","BCD"],
          warningSignText: "string",
          seizureType : "string",
          seizureTypeText : "string",
          seizurePresent : ["ABC","BCD"],
          seizurePresentText : "string",
          durationOfSeizure : "string",
          frequencyOfSeizure : "string",
          assistanceRequired : ["ABC","BCD"],
          assistanceRequiredText : "string",
          notDo : ["ABC","BCD"],
          notDoText : "string",
          needAfterSeizure : "string",
          needAfterSeizureText : "string",
          ambulanceNeeded : ["ABC","BCD"],
          ambulanceNeededText : "string",
        }
      ]
     
    };
   
  }

   renderItem = ({ item }) => <SMPComponent form={item} navigation={this.props.navigation} />;
 
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