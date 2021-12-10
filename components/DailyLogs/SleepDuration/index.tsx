import React, { useState } from 'react';
import {Image, Text,FlatList} from 'react-native';
import { View } from '../../Themed';

import Header from '../../LoginComponents/Header';
import NumericInput from 'react-native-numeric-input';
import { theme } from '../../LoginComponents/theme';
import Paragraph from '../../LoginComponents/Paragraph';

const SleepDuration = () => {

  

  const [duration, setDuration] = useState('1');
  const onChangee =  () => {}
  return (
    <View style = {{backgroundColor:'white', borderRadius: 10, padding:10, marginBottom:20}}>
        <Paragraph> Sleep Duration </Paragraph>
        <Image
            style={{height: 150, width : '100%', borderRadius:10, marginBottom: 20 }}
            source={require('../../../assets/images/SleepDuration.png')}
          />
        <View style = {{display : 'flex', alignItems:'center', marginBottom: 10}}>
          <NumericInput 
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
            leftButtonBackgroundColor={theme.colors.primary}/>
        </View>
        
        
    </View>
  );
};



export default SleepDuration;
