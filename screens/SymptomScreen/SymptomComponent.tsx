import React, { useRef } from "react";
import {
  StyleSheet, 
  Dimensions,
  View, Text
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';


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
  handleOnPress (){
    
    this.props.navigation.navigate("Symptom Info", {
      symptom: this.state.symptom,
    });
   
  }
  
 

  render() {
    return (
      <TouchableOpacity
      onPress={() => this.handleOnPress()}
      >
        <View style={{display:'flex',flexDirection:'row',padding:10,alignItems:'center',justifyContent:'space-between',borderWidth: 2, borderColor:"#93A5B9", backgroundColor:"#F5F5F5",height:50,borderRadius:10, margin:5}}>
          <Text style={{fontSize:16,fontWeight:'700'}}>{this.state.symptom.title}</Text>
          <Icon name="keyboard-arrow-right" size={25}/>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    
    justifyContent: "space-between",
  },
  
});
