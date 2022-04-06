import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View,
} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import styles from './styles';

const ServicesScreen = () => {
  const navigation = useNavigation();



  const handelOnPress=()=>{
    navigation.navigate("News Detail"); 
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover style={{height:130}} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title titleStyle={{ fontSize:16 }} title="Family"/>
      </Card>
      <Card style={styles.card}>
        <Card.Cover style={{height:130}} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title titleStyle={{ fontSize:16 }} title="Young People"/>
      </Card>
      <Card style={styles.card}>
        <Card.Cover style={{height:130}} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title titleStyle={{ fontSize:16 }} title="Seniors"/>
      </Card>
      <Card style={styles.card}>
        <Card.Cover style={{height:130}} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title titleStyle={{ fontSize:16 }} title="Community"/>
      </Card>
    </View>
  );
};

export default ServicesScreen;
