import React from 'react';
import {
  FlatList,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { getUserFromDevice } from '../../service/AccountService';
import { getSmpForm, getSmrForm } from '../../service/FormService';
import SMPComponent from './SMPComponent';
const SYMPTOMS=require('./../../data/symptoms.json');


export default class SMPList extends React.Component {
  
  constructor(props: any,) {
    super(props);
   
    this.state = {
      isProcessing: true,
      symptoms:SYMPTOMS,
      forms : []
     
    };
   
  }
  componentDidMount = async () => {
    const user = await getUserFromDevice();
    const smpResponse = await getSmpForm(user?.id);
    this.setState({forms : smpResponse});
    this.setState({smrLength : smpResponse.length});
    debugger;
  };
  

   renderItem = ({ item }) => <SMPComponent form={item} navigation={this.props.navigation} />;
 
  render() {
    return (
        <FlatList
              
              showsVerticalScrollIndicator={false}
              data={this.state.forms}
              renderItem={this.renderItem}
              horizontal={false}
              style={{
                width: "100%",
               
              }}
             />
     );
  }
};