import React, { useState } from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Card,
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  TextInput,
  RadioButton,Paragraph
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../../components/LoginComponents/Button';
import { theme } from '../../components/LoginComponents/theme';
import { ScrollView } from 'react-native-gesture-handler';
import Background from '../../components/LoginComponents/Background';
import Header from '../../components/LoginComponents/Header';
//import Paragraph from '../../components/LoginComponents/Paragraph';




const SeizureMgmtPlanScreen = () => {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [feel, setFeel] = React.useState('Stressed');
  const [action, setAction] = React.useState('Keep Calm');
  const [how, setHow] = React.useState('Black');
  const [feelAfter, setFeelAfter] = React.useState('Tired');
  const [service, setService] = React.useState('Yes');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

 


  const _onSMRPressed = () => {

  }

  const navigation = useNavigation();
  return (
    <SafeAreaView >
      <ScrollView>
        <Header> My Seizure Management Plan </Header>
        <View style = {{paddingHorizontal:10}}>
          <Paragraph style = {{fontSize:14,marginBottom:10}}>Functional Neurological Disorder (FND) is a condition that results in neurological symptoms such as functional seizures, paralysis, gait disorder, sensory issues, involuntary movements, problems with speech and swallowing, and bowel and bladder issues. Pain and chronic fatigue often co-exist with these symptoms.</Paragraph>
          <Paragraph style = {{fontSize:14,marginBottom:10}}>FND is as disabling and distressing as similar neurological diseases such as Epilepsy, Multiple Sclerosis, Parkinson and Stroke. For many people FND is a life-long condition that they will have to manage long term.</Paragraph>
          <Paragraph style = {{fontSize:14,marginBottom:10}}>Functional Seizures unlike epilepsy are not due to abnormal electrical activity in the brain. Medications used to treat epilepsy may be unhelpful for people with FND, unless the person also has epilepsy. FND results from a problem with the functioning of the nervous system. Functional seizures may present similar to epileptic seizures, although they are generally longer in duration. While functional seizures can look like epileptic seizures the attacks themselves are not harmful for the brain. People may experience epilepsy and functional seizures.</Paragraph>
          <Paragraph style = {{fontSize:14,marginBottom:10}}>Functional seizures are known by many different terms including dissociative attacks, dissociative seizures, non-epileptic seizures, non-epileptic attack disorder, functional non epileptic seizures and FND attacks. Please use the term you are most comfortable with.</Paragraph>
          <Paragraph style = {{fontSize:14}}>For people with functional seizures, a Seizure management plan may be helpful so others know how to best support the person. NOTE: A seizure management plan is very individual, what helps one person, may not help another person with the same condition.</Paragraph>
        </View>
        <Background>
          <Button mode="contained" onPress={() => <SeizureMonitoringRecord/>}>
            Record Your Seizure
          </Button>
        </Background>
      </ScrollView>
    </SafeAreaView>
  );
};
const SeizureMonitoringRecord = () => {
  return(
    <SafeAreaView>
      <Text>Form Yeta</Text>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  questions:{
    fontSize: 16,
    fontWeight : '700'
  },
  card :{
    margin: 10,
    
  },
  parent:{
    display:"flex",
    flexDirection: 'row',
    justifyContent:'space-between',
    marginRight: 20,
    paddingHorizontal:10
   //backgroundColor: 'red'
  }
  ,child:{
    //marginRight: 40
  },
  radio:{display:'flex', flexDirection:'row',alignItems:'center'}

});

export default SeizureMgmtPlanScreen;

