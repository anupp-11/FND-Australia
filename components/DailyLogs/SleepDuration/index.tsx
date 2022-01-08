import React, { useState } from 'react';
import {Image, Text,FlatList, TextInput} from 'react-native';
import { View } from '../../Themed';
import Paragraph from '../../LoginComponents/Paragraph';
import styles from './styles';
//import DurationPicker from 'react-duration-picker';
// import RNDurationPicker from 'react-native-duration-picker';
export default function SleepDuration  ()  {


  return (
    <View style = {{backgroundColor:'white', borderRadius: 10, padding:10, marginBottom:20}}>
        <Paragraph> Sleep Duration </Paragraph>
        <Image
            style={{height: 150, width : '100%', borderRadius:10, marginBottom: 20 }}
            source={require('../../../assets/images/SleepDuration.png')}
          />
        <View style = {{display : 'flex', alignItems:'center', marginBottom: 10}}>
        {/* <DurationPicker
          onChange={onChange}
          initialDuration={{ hours: 1, minutes: 0, seconds: 13 }}
          //noSeconds={true}
        /> */}
          {/* <NumericInput 
              value={duration} 
              onChange={value => setDuration({duration})} 
              onLimitReached={(isMax,msg) => console.log(isMax,msg)}
              totalWidth={240} 
              totalHeight={50} 
              iconSize={25}
              step={1.5}
              valueType='real'
              rounded 
              textColor= {theme.colors.primary} 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor= {theme.colors.primary}
            leftButtonBackgroundColor={theme.colors.primary}/> */}
        </View>
        <TextInput
          style={[
            styles.input,{
              height:100,
              paddingVertical:10,
              textAlignVertical:'top'
            },
          ]}
          multiline={true}
          placeholder={'Type Here'}
          />
        
    </View>
  );
};

