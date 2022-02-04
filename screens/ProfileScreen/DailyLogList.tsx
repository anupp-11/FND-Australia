import React from 'react';
import {
  FlatList,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { getUserFromDevice } from '../../service/AccountService';
import { getDailyLog } from '../../service/FormService';
import DailyLogComponent from './DailyLogComponent';
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
    const smpResponse = await getDailyLog(user?.id);
    this.setState({forms : smpResponse});
    debugger;
  };

   renderItem = ({ item }) => <DailyLogComponent form={item} navigation={this.props.navigation} />;
 
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