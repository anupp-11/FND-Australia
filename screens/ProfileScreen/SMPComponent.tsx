import React, { useRef } from "react";
import {
  StyleSheet, 
  Dimensions,
  View, Text
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from "../../components/LoginComponents/theme";


let width = Dimensions.get("screen").width / 2;

export default class SMPComponent extends React.Component{
    
  constructor(props) {
    super(props);
    
    debugger;
    this.state = {
      form: props.form,
    };

  }
  componentDidMount(){
     
  }
  handleOnPress (){
    
    this.props.navigation.navigate("Form Info", {
      form: this.state.form,
    });
   
  }
  
 

  render() {
    return (
      <TouchableOpacity
      onPress={() => this.handleOnPress()}
      >
        <View style={{display:'flex',flexDirection:'row',padding:10,alignItems:'center',justifyContent:'space-between',borderWidth: 2, borderColor:"#93A5B9", backgroundColor:"#F5F5F5",height:60,borderRadius:10, margin:5}}>
          <View style={styles.col}>
            <Text>Recorded At: </Text>
            <Text style={{fontSize:16,fontWeight:'700'}}>{this.state.form.createdAt}</Text>
          </View>
          
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
  col: {
    display:'flex',
    flexDirection:'column',
    marginVertical:5
  },
  title:{
    fontSize:16,
    fontWeight:'700',
    color: theme.colors.primary
  },
  data:{
    fontSize:16,
    fontWeight:'600',
  }
  
});
