import React, { useRef } from "react";
import {
  StyleSheet, 
  Dimensions,
  View, Text
} from "react-native";
import { List } from "react-native-paper";
import YoutubePlayer, { getYoutubeMeta } from "react-native-youtube-iframe";


let width = Dimensions.get("screen").width / 2;

export default class SymptomComponent extends React.Component{
    
  constructor(props) {
    super(props);
    
    debugger;
    this.state = {
      symptom: props.symptom,
    };

  }
  componentDidMount(){
     
  }
  
 

  render() {
    return (
        <View style={{borderWidth: 2, borderColor:"#93A5B9", backgroundColor:"#F5F5F5",borderRadius:10, margin:5}}>
          <List.Accordion
            title={this.state.symptom.title}
            titleStyle={{color:'black'}}>
               <View
                  style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                    marginHorizontal:10
                  }}
                />
            <List.Item title={this.state.symptom.detail} />
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
