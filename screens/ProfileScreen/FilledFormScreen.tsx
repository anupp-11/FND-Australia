import React from 'react';
import {View,Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import styles from './styles';
import AIcon from 'react-native-vector-icons/AntDesign';
import { getUserFromDevice } from '../../service/AccountService';
import { getDailyLog, getSmpForm, getSmrForm } from '../../service/FormService';

export default class FilledFormScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      smrLength:"0",
      smpLength:"0",
      dailyLogLenth:"0"
    };
  }

  componentDidMount = async () => {
    const user = await getUserFromDevice();
    //const smpResponse = await getSmpForm(user?.id);
    const smrResponse = await getSmrForm(user?.id);
    const dailyLogResponse = await getDailyLog(user?.id);
    this.setState({smrLength : smrResponse.length});
    //this.setState({smpLength : smpResponse.length});
    this.setState({dailyLogLenth : dailyLogResponse.length});
    debugger;
  };
  
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <View style={{display:'flex',flexDirection:'column',marginTop:10}}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Seizure Management Plan")} style={{display:'flex', flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'white', borderRadius:10,marginHorizontal:10,marginVertical:5}}>
            <View>
              <Image
              style={{height: 100, width :100}}
              source={require('../../assets/images/contact-form.png')}
              />    
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{fontWeight:'700',fontSize:18}}>
                Seizure Management Plan
              </Text>
              <Text style={{fontWeight:'600',fontSize:16,marginTop:10}}>
                Total Forms : {this.state.smpLength}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Seizure Monitoring Records")} style={{display:'flex', flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'white', borderRadius:10,marginHorizontal:10,marginVertical:5}}>
            <View>
              <Image
              style={{height: 100, width :100}}
              source={require('../../assets/images/contact-form.png')}
              />    
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{fontWeight:'700',fontSize:18}}>
                Seizure Monitoring Record
              </Text>
              <Text style={{fontWeight:'600',fontSize:16,marginTop:10}}>
                Total Forms : {this.state.smrLength}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate("My Daily Logs")} style={{display:'flex', flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'white', borderRadius:10,marginHorizontal:10,marginVertical:5}}>
            <View>
              <Image
              style={{height: 100, width :100}}
              source={require('../../assets/images/log-document.png')}
              />    
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{fontWeight:'700',fontSize:18}}>
                Daily Logs
              </Text>
              <Text style={{fontWeight:'600',fontSize:16,marginTop:10}}>
                Total Logs : {this.state.dailyLogLenth}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      
        
    </SafeAreaView>
    );
  }
  
};


