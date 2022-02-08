import React, { useRef } from "react";
import {
  StyleSheet, 
  Dimensions,
  View, Text, ScrollView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from "../../components/LoginComponents/theme";


let width = Dimensions.get("screen").width / 2;

export default class SymptomInfoComponent extends React.Component{
    
  constructor(props) {
    super(props);
    
    debugger;
    this.state = {
      //symptom: props.symptom,
    };
    debugger;

  }
  componentDidMount(){
     
  }

 
  render() {
    return (
      <ScrollView >
        <View style={{padding:10}}>
          <Text style={{fontSize:18,fontWeight:'700',color:theme.colors.primary}}>{this.props.route.params.symptom.title}:</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom.detail}</Text>
          <Text style={{fontSize:16,textAlign: 'justify'}}>{this.props.route.params.symptom.detail2}</Text>

          {(this.props.route.params.symptom.S1)?(<Text style={{marginTop:10,fontSize:18,fontWeight:'600',paddingHorizontal:10,color:theme.colors.primary}}>{this.props.route.params.symptom?.S1}</Text>):(<View></View>)}
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom?.S1P1}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom?.S1P2}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom?.S1P3}</Text>

          {(this.props.route.params.symptom.S2)?(<Text style={{marginTop:10,fontSize:18,fontWeight:'600',paddingHorizontal:10,color:theme.colors.primary}}>{this.props.route.params.symptom?.S2}</Text>):(<View></View>)}
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom?.S2P1}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom?.S2P2}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom?.S2P3}</Text>

          <Text style={{marginTop:10,fontSize:18,fontWeight:'600',paddingHorizontal:10,color:theme.colors.primary}}>{this.props.route.params.symptom?.S3}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom?.S3P1}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom?.S3P2}</Text>


          <Text style={{marginTop:10,fontSize:18,fontWeight:'600',paddingHorizontal:10,color:theme.colors.primary}}>{this.props.route.params.symptom?.S4}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom?.S4P1}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom?.S4P2}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom?.S4P3}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.symptom?.S4P4}</Text>


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
