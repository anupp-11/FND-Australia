import React, { useState } from 'react';
import { View, Image, TextInput, FlatList } from 'react-native';
import RadioButton from './RadioButton';
import styles from '../Mood/styles';
import Paragraph from '../../LoginComponents/Paragraph';
import { saveDataToDevice } from '../../../service/DailyLogsService';



const PhysicalActivityLevel = () => {

  const [textValue, setTextValue] = useState("");
  const [option, setOption] = useState('Medium');
  const data = [
    { value: 'Low' },
    { value: 'Medium' },
    { value: 'High' },
  ];
  const changeValue = async (value) => {
    setOption(value);
    await saveDataToDevice(value,"PAL_VALUE")
  };

  const changeText = async (value) => {
    setTextValue(value);
    await saveDataToDevice(value,"PAL_TEXT")
  };
 


 
  return (
    <View style = {{backgroundColor:'white', borderRadius: 10, padding:10, marginBottom:20}}>
        <Paragraph> Physical Activity Level </Paragraph>
        
        <Image
          style={{height: 150, width : '100%', borderRadius:10, marginBottom: 20 }}
          source={require('../../../assets/images/PAL.png')}
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



export default PhysicalActivityLevel;
