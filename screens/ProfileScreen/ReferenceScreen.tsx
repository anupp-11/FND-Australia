import React from 'react';
import {View,Image, SafeAreaView, Linking,ScrollView} from 'react-native';
import {
  Text, Button
} from 'react-native-paper';
import styles from './styles';
// import Button from '../../components/LoginComponents/Button';


export default class ReferenceScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentDidMount = async () => {
   
  };
  
  render(){
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
        <View style={{padding:20}}>
          <Text style={{fontSize:16, fontWeight:'700', marginBottom:10}}>References</Text>
          <Text style={{fontSize:14, fontWeight:'600', marginBottom:10,lineHeight: 25,textAlign: 'justify',paddingLeft:10}}>
            Bakvis, P., Roelofs, K., Kuyk, J., Edelbroek, P. M., Swinkels, W. A., & Spinhoven, P. (2009). Trauma, stress, and preconscious threat processing in patients with psychogenic nonepileptic seizures. Epilepsia, 50(5), 1001-1011. Gilmour, G. S., Nielsen, G., Teodoro, T., Yogarajah, M., Coebergh, J. A., Dilley, M. D., . . . Edwards, M. J. (2020). Management of functional neurological disorder. Journal of neurology, 267(7), 2164. Kozlowska, K., Scher, S., & Helgeland, H. (2020). Functional Somatic Symptoms in Children and Adolescents: A Stress-System Approach to Assessment and Treatment: Springer Nature.
          </Text>
          <Text style={{fontSize:14, fontWeight:'700', marginBottom:10,lineHeight: 25,textAlign: 'justify'}}>
            Reuber, M. (2019) Dissociative (non-epileptic) seizures: tackling common challenges after the diagnosis. Practical Neurology v. 19:332-341.
          </Text>
          
        </View>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />
        <View style={{padding:20}}>
          <Text style={{fontSize:16, fontWeight:'700', marginBottom:10}}>Links</Text>
          <Text style={{fontSize:14, fontWeight:'600', marginBottom:10,lineHeight: 25,textAlign: 'justify',paddingLeft:10,color:'blue'}}  onPress={() => Linking.openURL('https://pn.bmj.com/content/practneurol/19/4/332.full.pdf')} >
            Practical Neurology v. 19:332-341.
          </Text>
          <Text style={{fontSize:14, fontWeight:'600', marginBottom:10,lineHeight: 25,textAlign: 'justify',paddingLeft:10,color:'blue'}}  onPress={() => Linking.openURL('https://www.neurosymptoms.org/blackoutsattacks/4594357995')} >
            Blackouts and Attacks: A Systematic Review.
          </Text>
          <Text style={{fontSize:14, fontWeight:'600', marginBottom:10,lineHeight: 25,textAlign: 'justify',paddingLeft:10,color:'blue'}}  onPress={() => Linking.openURL('https://www.neurosymptoms.org/attack-treatment/4594358034')} >
            Attack Treatment: A Systematic Review.
          </Text>
          <Text style={{fontSize:14, fontWeight:'600', marginBottom:10,lineHeight: 25,textAlign: 'justify',paddingLeft:10,color:'blue'}}  onPress={() => Linking.openURL('http://neurosymptoms.org/download/i/mark_dl/u/4013612269/4635615201/CODES%20information%20leaflet%20for%20Neurologists%20with%20copyright%20info%20(1).pdf')} >
            CODES information leaflet for Neurologists.
          </Text>
          <Text style={{fontSize:14, fontWeight:'600', marginBottom:10,lineHeight: 25,textAlign: 'justify',paddingLeft:10}}>
            The seizure management plan was prepared by Dr. Katherine Gill, FND Australia Support Services Inc. with input and feedback by FND specialist neurologists, Professor Jon Stone and Dr Alex Lehn.  People living with functional seizures, from the FND Australia Support Services network also provided input and feedback.
          </Text> 
        </View>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />
        <View style={{padding:20}}>
        <Text style={{fontSize:16, fontWeight:'700', marginBottom:10}}>Disclaimer</Text>
          <Text style={{fontSize:14, fontWeight:'600',lineHeight: 25,textAlign: 'justify',paddingLeft:10}}>
            This app is intended to be used as a guide to assist patients with FND, prepare a management plan with their treatment team, about how bystanders and carers can best support the individual with FND.
          </Text>
          <Text style={{fontSize:14, fontWeight:'700', marginBottom:10,lineHeight: 25,textAlign: 'justify',paddingLeft:10}}>
            This app should never replace or serve as medical advice or instruction. 
          </Text>
          <Text style={{fontSize:14, fontWeight:'700', marginBottom:10,lineHeight: 25,textAlign: 'center',paddingLeft:10}}>
            All health issues and concerns should be discussed with the treating medical professional.
          </Text>
          <Text style={{fontSize:14, fontWeight:'700', marginBottom:10,lineHeight: 25,textAlign: 'center',paddingLeft:10}}>
          In the event of an emergency please call 000 (In Australia)
          </Text>
        </View>
    </SafeAreaView>
      </ScrollView>
    );
  }
  
};


