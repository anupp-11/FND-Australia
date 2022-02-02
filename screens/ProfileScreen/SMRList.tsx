import React from 'react';
import {
  FlatList,
} from 'react-native';
import { Appbar } from 'react-native-paper';
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
          createdAt:"2022-01-31",
          dateOfSeizure:"2022-01-31",
          timeOfSeizure: "5:45 PM",
          whatDoingSeizureStarted:"string",
          howFeelingSeizureStarted: ["string","string"],
          howFeelingSeizureStartedText: "string",
          actionsTaken: ["string","string"],
          actionsTakenText: "string",
          seizurePresent : ["string","string"],
          seizurePresentText : "string",
          seizureResolve : "string",
          feelAfterSeizure : ["string","string"],
          feelAfterSeizureText : "string",
          emergencyService : "string",
        },
        {
          createdAt:"2022-01-31",
          dateOfSeizure:"2022-01-31",
          timeOfSeizure: "6:51 PM",
          whatDoingSeizureStarted:"string",
          howFeelingSeizureStarted: ["string","string"],
          howFeelingSeizureStartedText: "string",
          actionsTaken: ["string","string"],
          actionsTakenText: "string",
          seizurePresent : ["string","string"],
          seizurePresentText : "string",
          seizureResolve : "string",
          feelAfterSeizure : ["string","string"],
          feelAfterSeizureText : "string",
          emergencyService : "string",
        },
      ]
     
    };
   
  }

   renderItem = ({ item }) => <SMRComponent form={item} navigation={this.props.navigation} />;
 
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