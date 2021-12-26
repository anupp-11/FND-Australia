

import React, { useState } from 'react';
import { Text,TextInput, Image} from 'react-native';

import { View } from '../../Themed';
import styles from './styles';
import Header from '../../LoginComponents/Header';
import Slider from 'react-native-custom-slider';
import { theme } from '../../LoginComponents/theme';
import Paragraph from '../../LoginComponents/Paragraph';



const StressLevel = () => {
  const [value, setValue] = useState(0);
  return (
    <View style = {styles.page}>
        <Paragraph> Stress Level </Paragraph>
        <Image
            style={{height: 150, width : '100%', borderRadius:10, marginBottom: 20 }}
            source={require('../../../assets/images/StressLevel.png')}
          />
        <View style = {{paddingHorizontal:20}}>
        <Slider
            value={value}
            minimumValue={0}
            maximumValue={10}
            step = {1}
            onValueChange={(value) => setValue(value)}
            thumbStyle={{ justifyContent: 'center', alignItems: 'center', width: 25 }}
            // minimumTrackTintColor = "yellow"
            // maximumTrackTintColor = "red"
            trackStyle={{height: 20}}
            customThumb={
                <View
                    style={{
                        width: 35,
                        height: 30,
                        overflow: 'hidden',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        backgroundColor: theme.colors.primary 
                    }}
                />
            }
            style={{width: '100%', height: 40}}
        />
        </View>
        
        <View style = {styles.container}>
          <View style = {{display : 'flex',flexDirection : 'row',alignItems: "center",justifyContent: "center",}}>
            <Text style = {{fontSize: 18,fontWeight:'700', zIndex: 1, color: 'white'}}>0</Text>
            <View style = {{height: 35, width:35,borderRadius:20, backgroundColor: theme.colors.secondary, position: 'absolute'}}></View>
          </View>
          <View style = {{display : 'flex',flexDirection : 'row',alignItems: "center",justifyContent: "center",}}>
            <Text style = {{fontSize: 18,fontWeight:'700', zIndex: 1, color: 'white'}}>{value}</Text>
            <View style = {{height: 35, width:35,borderRadius:20, backgroundColor: theme.colors.primary, position: 'absolute'}}></View>
          </View>
          <View style = {{display : 'flex',flexDirection : 'row',alignItems: "center",justifyContent: "center",}}>
            <Text style = {{fontSize: 18,fontWeight:'700', zIndex: 1, color: 'white'}}>10</Text>
            <View style = {{height: 35, width:35,borderRadius:20, backgroundColor: theme.colors.secondary, position: 'absolute'}}></View>
          </View>
        </View>
        <View style = {styles.Txtcontainer}>
          <Text>Bad</Text>
          <Text>Good</Text>
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



export default StressLevel;


