import React from 'react';
import {View,Image, SafeAreaView, Button, Linking} from 'react-native';
import {
  Text, TouchableRipple,
} from 'react-native-paper';
import Background from '../../components/LoginComponents/Background';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class AppSettingScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentDidMount = async () => {
   
  };
  
  render(){
    return (
      <Background>
        <TouchableOpacity onPress={() => {}} style={{padding:10}}>
          <View style={{borderWidth: 2, borderColor:"#93A5B9", backgroundColor:"#F5F5F5",borderRadius:10,paddingHorizontal: 20,paddingVertical:10,width:240, display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
            <Icon name="notifications" size={22}/>
            <Text style={{marginLeft:15,fontSize:18, fontWeight:'600'}}>Notification</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://fndaus.org.au/wpautoterms/privacy-policy/')}} style={{padding:10}}>
          <View style={{borderWidth: 2, borderColor:"#93A5B9", backgroundColor:"#F5F5F5",borderRadius:10,paddingHorizontal: 20,paddingVertical:10, width:240,display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
            <Icon name="shield" size={20}/>
            <Text style={{marginLeft:15,fontSize:18, fontWeight:'600'}}>Privacy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://fndaus.org.au/contact-us/')}} style={{padding:10}}>
          <View style={{borderWidth: 2, borderColor:"#93A5B9", backgroundColor:"#F5F5F5",borderRadius:10,paddingHorizontal: 20,paddingVertical:10, width:240, display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
            <Icon name="help-circle" size={22}/>
            <Text style={{marginLeft:15,fontSize:18, fontWeight:'600'}}>Help</Text>
          </View>
        </TouchableOpacity>
        
        
      </Background>
    );
  }
  
};


