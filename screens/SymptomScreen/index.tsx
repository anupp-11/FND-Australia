import React from 'react';
import {
  FlatList,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import SymptomComponent from './SymptomComponent';
const SYMPTOMS=require('./../../data/symptoms.json');


export default class SymptomScreen extends React.Component {
  
  constructor(props: any,) {
    super(props);
   
    this.state = {
      isProcessing: true,
      symptoms:SYMPTOMS
     
    };
   
  }

  renderItem = ({ item }) => <SymptomComponent symptom={item} navigation={this.props.navigation} />;
  headerComponent = () =>{
    return(
      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.Content title="Symptoms"/>
    </Appbar.Header>
    );
  }
  render() {
    return (
        <FlatList
              ListHeaderComponent = {this.headerComponent()}
              //initialNumToRender={7}
              showsVerticalScrollIndicator={false}
              data={this.state.symptoms}
              renderItem={this.renderItem}
              horizontal={false}
              style={{
                width: "100%",
                marginTop: 35,
              }}
             />
     );
  }
};