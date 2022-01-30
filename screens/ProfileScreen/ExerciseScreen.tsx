import React from 'react';
import {View,Image, SafeAreaView, ScrollView} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import styles from './styles';


export default class ExerciseScreen extends React.Component {
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
  
      
        <Text style={{fontSize:16,lineHeight: 25,fontWeight:'600',paddingHorizontal:10,paddingVertical:5,textAlign: 'justify'}}>Movement is important to maintain wellbeing. Exercise in FND, needs to be graded to meet 
          the needs of the person. People should work within their personal tolerance limits. Doing 
          too much exercise, can place the person at risk of relapse, and doing too little, places the 
          person at risk of physical and functional decline.
          </Text>
        <Text style={{fontSize:16,lineHeight: 25,fontWeight:'600',paddingHorizontal:10,paddingVertical:5,textAlign: 'justify'}}>Many people in FND, will have lost their automatic movements. Physical movements such as 
          walking, standing, getting out of a chair and sitting in a chair, once so effortless, become 
          challenging and difficult. People are unable to tap into their normal automatic movement 
          pathways. When attention is diverted into a different task, people with FND, can often access 
          normal movement pathways. For example, people might be able to walk while balancing an 
          object on their head, while singing or tapping, but not able to walk while focusing on the task 
          at hand.</Text>
        <Text style={{fontSize:16,lineHeight: 25,fontWeight:'600',paddingHorizontal:10,paddingVertical:5,textAlign: 'justify'}}>The ability to access normal movement while distracted, is a diagnostic sign of FND, and is 
          also used in treatment, to facilitate normal movement.</Text>
        <Text style={{fontSize:16,lineHeight: 25,fontWeight:'600',paddingHorizontal:10,paddingVertical:5,textAlign: 'justify'}}>When people experience functional movement disorder, they should work with their health 
          practitioner, to design a movement program that meets their specific and individual needs.</Text>
        <Text style={{fontSize:16,lineHeight: 25,fontWeight:'600',paddingHorizontal:10,paddingVertical:5,textAlign: 'justify'}}>Physical activities that can support wellbeing in FND include hydrotherapy, trauma sensitive 
          yoga, tai chi and qigong. Mind-body activities promote deep breathing, quietness of the mind 
          and overall wellbeing. These activities need to be tailored to the person’s capabilities, so 
          seeking the advice of the treating practitioner, can ensure the program supports the person’s 
          wellbeing and is graded to meet the person’s capabilities.</Text>
    </ScrollView>
    );
  }
  
};


