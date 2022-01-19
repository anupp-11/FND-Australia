import React from "react";
import {
  StyleSheet, 
  Dimensions,
  View,
  ScrollView
} from "react-native";
import { List } from "react-native-paper";



export default class FAQComponent extends React.Component{
    
  constructor(props) {
    super(props);
    
    debugger;
    this.state = {
      question: props.question,
    };

  }
  componentDidMount(){
     
  }
  
 

  render() {
    return (
        <ScrollView>
          <View style={{borderWidth: 2, borderColor:"#93A5B9", backgroundColor:"#F5F5F5",borderRadius:10, margin:5}}>
          <List.Accordion
            title={this.state.question.question}
            titleStyle={{color:'black'}}
            titleNumberOfLines= {10}
            >
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              marginHorizontal:10
            }}
          />
            <List.Item title={this.state.question.answer} titleNumberOfLines={10} />
          </List.Accordion>
        </View>
        </ScrollView>
   
    );
  }
}


const styles = StyleSheet.create({
  row: {
    
    justifyContent: "space-between",
  },
  
});
