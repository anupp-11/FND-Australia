import React from 'react';
import {
  ActivityIndicator,
  FlatList, View,Text
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { theme } from '../../components/LoginComponents/theme';
import { getUserFromDevice } from '../../service/AccountService';
import { getDailyLog } from '../../service/FormService';
import DailyLogComponent from './DailyLogComponent';

const SYMPTOMS=require('./../../data/symptoms.json');


export default class SMRList extends React.Component {
  
  constructor(props: any,) {
    super(props);
   
    this.state = {
      isProcessing: true,
      symptoms:SYMPTOMS,
      forms : [],
      smrLength:"",
    };
   
  }
  componentDidMount = async () => {
    this.setState({isProcessing:true});
    const user = await getUserFromDevice();
    const smpResponse = await getDailyLog(user?.id);
    this.setState({forms : smpResponse});
    this.setState({isProcessing:false});
    this.setState({smrLength : smpResponse.length});
    debugger;
  };

   renderItem = ({ item }) => <DailyLogComponent form={item} navigation={this.props.navigation} />;
 
  render() {
    return (
      <View style={{width:'100%',height:'100%'}}>
      {this.state.isProcessing ==true ? (
      <View style={{
        position:'absolute',
        top:'40%',
        marginLeft:'auto',
        marginRight:'auto',
        left:0,
        right:0,
        zIndex: 1,
        
        }}>
      <ActivityIndicator size="large" color={theme.colors.primary}/> 
      </View>):(<View></View>)}
      {this.state.smrLength ==0 ? (
      <View style={{
        position:'absolute',
        top:'40%',
        marginLeft:'auto',
        marginRight:'auto',
        left:0,
        right:0,
        zIndex: 1
        }}>
      <Text style={{textAlign:'center'}}>No Records Found </Text>
      </View>):(<View></View>)}
        <FlatList
              
              showsVerticalScrollIndicator={false}
              data={this.state.forms}
              renderItem={this.renderItem}
              horizontal={false}
              style={{
                width: "100%",
                
              }}
             />


    </View>
     );
  }
};