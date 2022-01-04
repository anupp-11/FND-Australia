import React from "react";
import {
  StyleSheet, 
  Dimensions,
  View
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
        <View style={{borderWidth: 2, borderColor:"#93A5B9", backgroundColor:"#F5F5F5",borderRadius:10, margin:5}}>
          <List.Accordion
            title={this.state.question.question}
            titleStyle={{color:'black'}}
            titleNumberOfLines= {5}
            >
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              marginHorizontal:10
            }}
          />
            <List.Item title={this.state.question.answer} titleNumberOfLines={5} />
          </List.Accordion>
        </View>
   
    );
  }
}


const styles = StyleSheet.create({
  row: {
    
    justifyContent: "space-between",
  },
  
});
