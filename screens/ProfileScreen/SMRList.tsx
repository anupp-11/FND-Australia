import React from 'react';
import {
  FlatList,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { getUserFromDevice } from '../../service/AccountService';
import { getSmrForm } from '../../service/FormService';
import SMPComponent from './SMPComponent';
import SMRComponent from './SMRComponent';
const SYMPTOMS=require('./../../data/symptoms.json');


export default class SMRList extends React.Component {
  
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
    const smrResponse = await getSmrForm(user?.id);
    debugger;
    this.setState({forms : smrResponse});
    this.setState({smrLength : smrResponse.length});
    
  };

   renderItem = ({ item }) => <SMRComponent form={item} navigation={this.props.navigation} />;
 
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