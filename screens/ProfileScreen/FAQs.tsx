import React from 'react';
import {
  FlatList,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import FAQComponent from './FAQComponent';
const FAQS=require('./../../data/faqs.json');


export default class SymptomScreen extends React.Component {
  
  constructor(props: any,) {
    super(props);
   
    this.state = {
      isProcessing: true,
      questions: FAQS
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