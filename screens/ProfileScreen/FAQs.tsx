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
          question:"I've just been diagnosed and all I've been given is this website!",
          answer:"Answer for this question is i don't know what it is."
        },
        {
          question:"COVID-19, the COVID-19 vaccine and FND. What do we know?",
          answer:"Answer for this question is i don't know what it is."
        },
        {
          question:"Can people with FND have changes to the structure of their brain too?",
          answer:"Answer for this question is i don't know what it is."
        },
        {
          question:"How reliable are the clinical Signs of FND?",
          answer:"Answer for this question is i don't know what it is."
        },
        {
          question:"Where can I find a healthcare professional interested in FND?",
          answer:"Answer for this question is i don't know what it is."
        },
        {
          question:"Isn't FND just a name for something when doctors don't know what it is?",
          answer:"Answer for this question is i don't know what it is."
        },

      ],
      

    };
   
  }

  renderItem = ({ item }) => <FAQComponent question={item} navigation={this.props.navigation} />;
  
  render() {
    return (
        <FlatList
              initialNumToRender={7}
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