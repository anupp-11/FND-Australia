import React, { useState } from 'react';
import {Image, Text,FlatList, TextInput} from 'react-native';
import Slider from '@react-native-community/slider';
import Background from '../../LoginComponents/Background';
import { View } from '../../Themed';
import styles from './styles';
import Header from '../../LoginComponents/Header';
import Paragraph from '../../LoginComponents/Paragraph';
import { TouchableRipple } from 'react-native-paper';
import { saveDataToDevice } from '../../../service/DailyLogsService';
import RadioButton from './RadioButton';


const Mood = () => {

  
  const [option, setOption] = useState("1");
  const [textValue, setTextValue] = useState("");

  const data = [
    { value: '5'},
    { value: '4'},
    { value: '3'},
    { value: '2'},
    { value: '1'}
  ];

  const changeValue = async (value) => {
    setOption(value);
    await saveDataToDevice(value,"MOOD_VALUE")
  };

  const changeText = async (value) => {
    setTextValue(value);
    await saveDataToDevice(value,"MOOD_TEXT")
  };
 

  return (
    <View style = {{backgroundColor:'white', borderRadius: 10, padding:10, marginBottom:20}}>
        <Paragraph> Mood Monitor </Paragraph>
        
          <Image
            style={{height: 150, width : '100%', borderRadius:10, marginBottom: 20 }}
            source={require('../../../assets/images/Mood.png')}
          />
        
    

        <View style={{display:'flex',flexDirection:'row'}}>
          <RadioButton data={data} onSelect={(value) => changeValue(value)} />
        </View>
        <TextInput
          value={textValue}
          onChangeText={text => changeText(text)}
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


export default Mood;

