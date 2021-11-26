import React, { useState } from 'react';
import { Text,FlatList} from 'react-native';
import Slider from '@react-native-community/slider';
import Background from '../../LoginComponents/Background';
import { View } from '../../Themed';
import styles from './styles';


interface SleepDurationProps {
  sleepDuration: {
      id: string;
      title : string;
      item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number;
      }};
  }

const SleepDuration = () => {
  //const {sleepDuration } = props;
  const [range, setRange] = useState('50%');
  const [sliding, setSliding] = useState('Inactive');
  return (
    <Background>
        <Text style = {styles.root} >{range}</Text>
        <Text style = {styles.root} >{sliding}</Text>
        
        <Slider
  style={{width: 200, height: 40}}
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
  thumbTintColor = 'tomato'
/>
          {/* <Slider
          style={{width: 250, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor = 'tomato'
           value={.5}
          // //onValueChange={value => setRange(parseInt(value * 100)+'%')}
          onSlidingStart={() => setSliding('Sliding')}
          onSlidingComplete={() => setSliding('Inactive')}
          /> */}
     
    </Background>
  );
};



export default SleepDuration;
