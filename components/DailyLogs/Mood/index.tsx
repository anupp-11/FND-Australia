import React, { useState } from 'react';
import {Image, Text,FlatList} from 'react-native';
import Slider from '@react-native-community/slider';
import Background from '../../LoginComponents/Background';
import { View } from '../../Themed';
import styles from './styles';
import Header from '../../LoginComponents/Header';


const Mood = () => {

  return (
    <View style = {{backgroundColor:'white', borderRadius: 10, padding:10, marginBottom:20}}>
        <Header> Mood Monitor </Header>
        <View style = {{display:'flex', flexDirection : 'row', justifyContent:'space-around', marginTop: 10, marginBottom:20}}>
          <View style={{height:50, width:50}}>
            <Image source={require('../../../assets/emojis/vhappy.png')} style={{height:50, width: 50}} />
          </View>
          <View style={{height:50, width:50,}}>
          <Image source={require('../../../assets/emojis/happy.png')} style={{height:50, width: 50}} />
          </View>
          <View style={{height:50, width:50,}}>
          <Image source={require('../../../assets/emojis/numb.png')} style={{height:50, width: 50}} />
          </View>
          <View style={{height:50, width:50, }}>
          <Image source={require('../../../assets/emojis/angry.png')} style={{height:50, width: 50}} />
          </View>
          <View style={{height:50, width:50, }}>
          <Image source={require('../../../assets/emojis/sad.png')} style={{height:50, width: 50}} />
          </View>
          
        </View>
    </View>
  );
};



export default Mood;
