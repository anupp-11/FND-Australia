import React from 'react';
import {View,Image, SafeAreaView, Button, Linking} from 'react-native';
import {
  Text, TouchableRipple,
} from 'react-native-paper';
import Background from '../../components/LoginComponents/Background';
import Icon from 'react-native-vector-icons/Ionicons';


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
        <TouchableRipple onPress={() => {}}>
          <View style={{borderWidth: 2, borderColor:"#93A5B9", backgroundColor:"#F5F5F5",borderRadius:10,paddingHorizontal: 20,paddingVertical:10,width:180, display: 'flex', flexDirection:'row',marginBottom: 10}}>
            <Icon name="notifications" size={22}/>
            <Text style={{marginLeft:15,fontSize:18, fontWeight:'600'}}>Notification</Text>
          </View>
        </TouchableRipple>
        
        <TouchableRipple onPress={() => {}}>
          <View style={{borderWidth: 2, borderColor:"#93A5B9", backgroundColor:"#F5F5F5",borderRadius:10,paddingHorizontal: 20,paddingVertical:10, width:180,display: 'flex', flexDirection:'row',marginBottom: 10}}>
            <Icon name="shield" size={20}/>
            <Text style={{marginLeft:15,fontSize:18, fontWeight:'600'}}>Privacy</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={{borderWidth: 2, borderColor:"#93A5B9", backgroundColor:"#F5F5F5",borderRadius:10,paddingHorizontal: 20,paddingVertical:10, width:180, display: 'flex', flexDirection:'row'}}>
            <Icon name="help-circle" size={22}/>
            <Text style={{marginLeft:15,fontSize:18, fontWeight:'600'}}>Help</Text>
          </View>
        </TouchableRipple>
        
        
      </Background>
    );
  }
  
};


