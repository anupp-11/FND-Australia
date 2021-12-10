import React, { useState } from 'react';

import { View } from '../../Themed';

import Header from '../../LoginComponents/Header';
import NumericInput from 'react-native-numeric-input';
import { theme } from '../../LoginComponents/theme';

const GoalAchievement = () => {

  

  const [duration, setDuration] = useState('1');
  const onChangee =  () => {}
  return (
    <View style = {{backgroundColor:'white', borderRadius: 10, padding:10, marginBottom:20}}>
        <Header>Goal Achievement </Header>
        <View style = {{display : 'flex', alignItems:'center', marginBottom: 10}}>
         
        </View>
        
        
    </View>
  );
};



export default GoalAchievement;
