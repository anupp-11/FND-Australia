

import React, { useState } from 'react';
import { Image, Text,TextInput} from 'react-native';
//import Slider from '@react-native-community/slider';
import Background from '../../LoginComponents/Background';
import { View } from '../../Themed';
import styles from './styles';
import Header from '../../LoginComponents/Header';
import Slider from 'react-native-custom-slider';
import { theme } from '../../LoginComponents/theme';
import Paragraph from '../../LoginComponents/Paragraph';


const PhysicalHealthRating = () => {
  const [value, setValue] = useState(0);
  return (
    <View style = {styles.page}>
        <Paragraph> Physical Wellbeing Rating</Paragraph>
        <View style= {styles.imgContainer}>
          <Image
              style={styles.image}
              source={require('../../../assets/images/PWR.png')}
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
            onValueChange={(value) => setValue(value)}
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
                        backgroundColor: "#9316E4" 
                    }}
                />
            }
            style={{width: '100%', height: 40}}
        />
        </View>
        
            
            
   
        {/* <View style = {styles.container}>
          <View style = {{display : 'flex',flexDirection : 'row',alignItems: "center",justifyContent: "center",}}>
            <Text style = {{fontSize: 18,fontWeight:'700', zIndex: 1, color: 'white'}}>0</Text>
            <View style = {{height: 35, width:35,borderRadius:20, backgroundColor: theme.colors.secondary, position: 'absolute'}}></View>
          </View>
          
          <View style = {{display : 'flex',flexDirection : 'row',alignItems: "center",justifyContent: "center",}}>
            <Text style = {{fontSize: 18,fontWeight:'700', zIndex: 1, color: 'white'}}>10</Text>
            <View style = {{height: 35, width:35,borderRadius:20, backgroundColor: theme.colors.secondary, position: 'absolute'}}></View>
          </View>
        </View>
        <View style = {styles.Txtcontainer}>
          <Text>Bad</Text>
          <Text>Good</Text>
        </View> */}
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



export default PhysicalHealthRating;


