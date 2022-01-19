import React from 'react';
import {
  FlatList,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import FAQComponent from './FAQComponent';



export default class SymptomScreen extends React.Component {
  
  constructor(props: any,) {
    super(props);
   
    this.state = {
      isProcessing: true,
      questions: [
        {
          question:"What is FND?",
          answer:"Functional Neurological Disorder involves a variety of motor, sensory and/or cognitive symptoms that arise due to a dysfunction in the way the nervous system functions. There is a disorder in the way the body sends and receives neural messages, in the absence of structural damage to the nervous system."
        },
        {
          question:"Does this mean it’s just in my head?",
          answer:"FND is a real condition, and the symptoms are involuntary. People are not making up the symptoms. Research shows that the brains of people with FND are different to those who are feigning symptoms, and also function differently to healthy control."
        },
        {
          question:"Will this kill me?",
          answer:"On its’ own FND is not a lethal condition, however some people may also have other comorbid conditions that can reduce a person’s overall lifespan. Managing risk of injury and complications during functional seizures is important to keep people safe."
        },
        

      ],
      

    };
   
  }

  renderItem = ({ item }) => <FAQComponent question={item} navigation={this.props.navigation} />;
  
  render() {
    return (
        <FlatList
              //initialNumToRender={7}
              showsVerticalScrollIndicator={false}
              data={this.state.questions}
              renderItem={this.renderItem}
              horizontal={false}
              style={{
                width: "100%",
               marginTop: 10,
              }}
             />
     );
  }
};