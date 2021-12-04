

import React, { useState } from 'react';
import { Text,FlatList} from 'react-native';
//import Slider from '@react-native-community/slider';
import Background from '../../LoginComponents/Background';
import { View } from '../../Themed';
import styles from './styles';
import Header from '../../LoginComponents/Header';
import Slider from 'react-native-custom-slider';
import { theme } from '../../LoginComponents/theme';
//import Slider from "react-native-slider";


const SleepDuration = () => {
  const [value, setValue] = useState(0);
  return (
    <View style = {styles.page}>
        <Header> Sleep Quality </Header>
        <View style = {{paddingHorizontal:20}}>
        <Slider
            value={value}
            minimumValue={0}
            maximumValue={10}
            step = {1}
            onValueChange={(value) => setValue(value)}
            thumbStyle={{ justifyContent: 'center', alignItems: 'center', width: 25 }}
            customThumb={
                <View
                    style={{
                        width: 35,
                        height: 20,
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
     
    </View>
  );

};



export default SleepDuration;


