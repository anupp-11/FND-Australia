import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import DurationPicker from 'react-duration-picker';

import Header from '../../LoginComponents/Header';
import RadioButton from './RadioButton';
import styles from '../Mood/styles';



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



export default PhysicalActivityLevel;
