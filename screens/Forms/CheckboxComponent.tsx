import React from "react";
import {
  StyleSheet, 
  Dimensions,
  View,Text
} from "react-native";
import { Button, Checkbox, List } from "react-native-paper";
import { theme } from "../../components/LoginComponents/theme";



export default class CheckboxComponent extends React.Component{
    
  constructor(props) {
    super(props);
    
    this.state = {
      data: props.data,
    };

    this.getSelectedOptions = this.getSelectedOptions.bind(this);

  }
  componentDidMount(){
     
  }

  onChecked = (id) => {
    const Data = this.state.data;
    Data.checked=!this.state.data.checked;
    this.setState({data:Data});
   
  }

  getSelectedOptions(){
    var keys = this.state.data.map((t)=>t.key)
    var checks = this.state.data.map((t)=>t.checked)
    let Selected = []
    for(let i=0;i<checks.length;i++){
      if(checks[i]==true){
        Selected.push(keys[i])
      }
    }
    debugger;
    alert(Selected);
  }

  

  render() {
    return (
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',paddingHorizontal:20,width:'50%'}}>
        <Checkbox.Android color={theme.colors.primary} status={this.state.data.checked ? 'checked' : 'unchecked'} onPress={()=>{this.onChecked(this.state.data.id)}}/>
        <Text>{this.state.data.key}</Text>
      </View>
    );
}
}

