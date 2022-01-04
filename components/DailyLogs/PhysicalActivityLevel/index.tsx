import React, { useState } from 'react';
import { View, Image, TextInput, FlatList } from 'react-native';
import RadioButton from './RadioButton';
import styles from '../Mood/styles';
import Paragraph from '../../LoginComponents/Paragraph';



const PhysicalActivityLevel = () => {

 

  const [option, setOption] = useState(null);
  const data = [
    { value: 'Low' },
    { value: 'Medium' },
    { value: 'High' },
  ];
  const [level, setLevel] = useState('Low');
  const onPress =  () => {
    console.log("Button Pressed = " + level);
  }
  return (
    <View style = {{backgroundColor:'white', borderRadius: 10, padding:10, marginBottom:20}}>
        <Paragraph> Physical Activity Level </Paragraph>
        
        <Image
          style={{height: 150, width : '100%', borderRadius:10, marginBottom: 20 }}
          source={require('../../../assets/images/PAL.png')}
        />
        <View style={{display:'flex',flexDirection:'row'}}>
          <RadioButton data={data} onSelect={(value) => setOption(value)} />
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



export default PhysicalActivityLevel;
