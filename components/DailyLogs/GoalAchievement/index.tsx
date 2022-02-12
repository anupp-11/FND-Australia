import React, { useState } from 'react';
import Paragraph from '../../LoginComponents/Paragraph';
import { Image, TextInput, View } from 'react-native';
import styles from './styles';
import { saveDataToDevice } from '../../../service/DailyLogsService';
const GoalAchievement = () => {

  const [textValue, setTextValue] = useState("");

  const changeText = async (value) => {
    setTextValue(value);
    await saveDataToDevice(value,"DA_TEXT")
  };
  return (
    <View style = {{backgroundColor:'white', borderRadius: 10, padding:10, marginBottom:20}}>
         <Paragraph> Daily Achievement </Paragraph>
        
        <Image
          style={{height: 150, width : '100%', borderRadius:10, marginBottom: 20 }}
          source={require('../../../assets/images/GA.png')}
        />
        <TextInput
        returnKeyType="next"
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



export default GoalAchievement;
