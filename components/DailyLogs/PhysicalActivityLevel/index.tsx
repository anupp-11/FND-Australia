import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';


import Header from '../../LoginComponents/Header';
import NumericInput from 'react-native-numeric-input';
import { theme } from '../../LoginComponents/theme';
import { Button, Chip } from 'react-native-paper';
import RadioButton from './RadioButton';

const PhysicalActivityLevel = () => {

  
  const [option, setOption] = useState(null);
  const data = [
    { value: 'Low' },
    { value: 'Medium' },
    { value: 'High' },
  ];
  const [level, setLevel] = useState('Low');
  const onPress =  () => {
    console.log("Butotn Pressed = " + level);
  }
  return (
    <View style = {{backgroundColor:'white', borderRadius: 10, padding:10, marginBottom:20}}>
        <Header> Physical Activity Level </Header>
        
        {/* <Button mode="contained" style = {{borderRadius:12, margin:5}} color= "red" onPress={() => setLevel("Low")} > Low </Button>
        <Button mode="contained" style = {{borderRadius:12, margin:5}} color= "yellow" onPress={() => setLevel("Medium")} > Medium </Button>
        <Button mode="contained" style = {{borderRadius:12, margin:5}} color= "green" onPress={() => setLevel("High")} > High </Button> */}
        <RadioButton data={data} onSelect={(value) => setOption(value)} />
        {/* <Text> Your option: {option}</Text> */}
        
        
        
    </View>
  );
};



export default PhysicalActivityLevel;
