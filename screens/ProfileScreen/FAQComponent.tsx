import React from "react";
import {
  StyleSheet, 
  Text,
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
            {(this.state.question.points)?(<List.Item style ={{ marginTop:-20 }} title={this.state.question.points} titleNumberOfLines={10} />):(<View></View>)}
            {(this.state.question.p1)?(<List.Item style ={{ marginTop:-20 }} title={this.state.question.p1} titleNumberOfLines={10} />):(<View></View>)}
            {(this.state.question.p2)?(<List.Item style ={{ marginTop:-20 }} title={this.state.question.p2} titleNumberOfLines={10} />):(<View></View>)}
            {(this.state.question.p3)?(<List.Item style ={{ marginTop:-20 }} title={this.state.question.p3} titleNumberOfLines={10} />):(<View></View>)}
            {(this.state.question.p4)?(<List.Item style ={{ marginTop:-20 }} title={this.state.question.p4} titleNumberOfLines={10} />):(<View></View>)}
            {(this.state.question.p5)?(<List.Item style ={{ marginTop:-20 }} title={this.state.question.p5} titleNumberOfLines={10} />):(<View></View>)}
            {(this.state.question.p6)?(<List.Item style ={{ marginTop:-20 }} title={this.state.question.p6} titleNumberOfLines={10} />):(<View></View>)}
            {(this.state.question.p7)?(<List.Item style ={{ marginTop:-20 }} title={this.state.question.p7} titleNumberOfLines={10} />):(<View></View>)}
            
            <List.Item style ={{ marginTop:-20 }} title={this.state.question.answer1} titleNumberOfLines={10} />
            <List.Item style ={{ marginTop:-20 }} title={this.state.question.answer2} titleNumberOfLines={10} />
            <List.Item style ={{ marginTop:-20 }} title={this.state.question.answer3} titleNumberOfLines={10} />
            <List.Item style ={{ marginTop:-20 }} title={this.state.question.answer4} titleNumberOfLines={10} />
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
