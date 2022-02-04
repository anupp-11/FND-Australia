

import React, { useState } from 'react';
import { Text,TextInput, Image} from 'react-native';

import { View } from '../../Themed';
import styles from './styles';
import Header from '../../LoginComponents/Header';
import Slider from 'react-native-custom-slider';
import { theme } from '../../LoginComponents/theme';
import Paragraph from '../../LoginComponents/Paragraph';
import { saveDataToDevice } from '../../../service/DailyLogsService';



const StressLevel = () => {
  const [value, setValue] = useState(0);
  const [stressLevelText, setStressLevelText] = useState("");

  const changeValue = async (value,) => {
    setValue(value);
    await saveDataToDevice(value,"STRESS_LEVEL_VALUE")
  };

  const changeText = async (value,) => {
    setStressLevelText(value);
    await saveDataToDevice(value,"STRESS_LEVEL_TEXT")
  };
  
  return (
    <View style = {styles.page}>
        <Paragraph> Stress Level </Paragraph>
        <View style= {styles.imgContainer}>
          <Image
              style={styles.image}
              source={require('../../../assets/images/StressLevel.png')}
            />
         
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',backgroundColor: 'transparent'}}>
             <Text style = {styles.centerText}>{value}</Text>
          </View>
        </View>
        <View style = {{paddingVertical:20}}>
        <Slider
            value={value}
            minimumValue={0}
            maximumValue={10}
            step = {1}
            onValueChange={(value) => changeValue(value)}
            thumbStyle={{ justifyContent: 'center', alignItems: 'center', width: 30 }}
            trackStyle={{height: 20, borderRadius:10}}
            maximumTrackTintColor = {'#6C6C6C'}
            minimumTrackTintColor = {theme.colors.primary}
            customThumb={
                <View
                    style={{
                        width: 30,
                        height: 30,
                        overflow: 'hidden',
                        borderRadius: 15,
                        borderColor:'white',
                        borderWidth:2,
                        backgroundColor: "#599FB9" 
                    }}
                />
            }
            style={{width: '100%', height: 40}}
        />
        </View>
        
       
        <TextInput
          value={stressLevelText}
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



export default StressLevel;


