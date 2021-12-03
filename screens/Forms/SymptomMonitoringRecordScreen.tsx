import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/LoginComponents/Button';

import styles from './styles';
//import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { theme } from '../../components/LoginComponents/theme';



const _onSMRPressed = () => {

}

const SymptomMonitoringRecordScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

    <View style={{flex: 1}}>
        <Text>smr</Text>
      </View>
  </SafeAreaView>
  );
};

export default SymptomMonitoringRecordScreen;

