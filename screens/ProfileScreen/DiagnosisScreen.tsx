import React from 'react';
import {View,Image, SafeAreaView, ScrollView} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import { theme } from '../../components/LoginComponents/theme';
import styles from './styles';


export default class DiagnosisScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentDidMount = async () => {
   
  };
  
  render(){
    return (
      <ScrollView style={styles.container}>
  
        <Text style={{fontSize:18, color: theme.colors.primary,fontWeight:'600',paddingHorizontal:10,textAlign: 'justify'}}>
          How is FND Diagnosed?
        </Text>
        <Text style={{fontSize:16,lineHeight: 25,fontWeight:'600',paddingHorizontal:10,paddingVertical:5,textAlign: 'justify'}}>
            FND is diagnosed through positive signs. Functional symptoms tend to be distractible, 
            inconsistent and variable. Positive signs, such as a Hoover sign is used for leg weakness and 
            a tremor entrainment test for functional tremors.
        </Text>
        <Text style={{fontSize:16,lineHeight: 25,fontWeight:'600',paddingHorizontal:10,paddingVertical:5,textAlign: 'justify'}}>
          People may undergo a series of tests such as a MRI, CT scan, lumbar puncture, v-EEG and 
          blood tests to rule in, or rule out, any co-morbid and/or treatable conditions. Typically, these 
          scans will be negative and positive signs are used to rule in a diagnosis of FND.
        </Text>

        <Text style={{fontSize:18, color: theme.colors.primary,fontWeight:'600',paddingHorizontal:10,textAlign: 'justify'}}>
          What is a Hoover Sign?
        </Text>

        <Text style={{fontSize:16,lineHeight: 25,fontWeight:'600',paddingHorizontal:10,paddingVertical:5,textAlign: 'justify'}}>
          A Hoover sign is used to identify functional leg weakness. With a Hoover sign a person may 
          have significant leg weakness in one leg when trying to consciously move the weaker leg, but 
          this strength may temporarily return, when a person attempts to move their good leg. This 
          indicates that the nerves controlling leg movement are intact, but cannot always be accessed 
          during movement.
        </Text>
        
    </ScrollView>
    );
  }
  
};


