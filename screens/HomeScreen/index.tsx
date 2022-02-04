import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Linking,
  Alert,
  BackHandler,
} from 'react-native';
import styles from './styles';
import { theme } from '../../components/LoginComponents/theme';
import { useNavigation } from '@react-navigation/native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getUserFromDevice, saveUserToDevice } from '../../service/AccountService';



export default class HomeScreen extends React.Component {

  constructor(props: any, private backHandler : BackHandler) {
    super(props);
   
    this.state = {
      userName:"User"
    };
  }
   logout = async ()=>{
    var data = {
      "id": "",
      "name": "",
      "userName": "",
      "jwtToken": ""
    }
    const resp = await saveUserToDevice(data);
    this.props.navigation.navigate('Dashboard');

  }
  backAction = () => {
    const a = this.props.navigation.canGoBack();
    if(this.props.navigation.canGoBack()){
      debugger;
    }
    else{
      debugger;
      Alert.alert("Hold on!", "Are you sure you want to Signout?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => this.logout() }
      ]);
      return true;
    }
   
  };
  componentDidMount = async () => {  
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
    const user = await getUserFromDevice();
    
    this.setState({userName:user.name});
    
  };
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);

  }
 
  
  render(){
    return (
      <View  >
        <ScrollView>
            <View style = {styles.container}>
            
              <Text style = {styles.header}>
                FND Australia
              </Text>
              <Text style = {styles.cheader}>
                Support Services
              </Text>
  
              <Text style = {styles.name}>
                <Text style = {{color : theme.colors.secondary}}>
                  Welcome 
                </Text>
                {" "}
                <Text style = {{color : theme.colors.primary}}>
                    {this.state.userName} 
                </Text>
              </Text>
             
              </View>
              <View style={{padding:10}}>
                <TouchableOpacity onPress={()=>{ Linking.openURL('https://fndaus.org.au/functional-neurological-disorder-recovery/')}}>
                  <Card style={{height:310}}>
                    <Card.Cover source={require('../../assets/images/homeimage.png')} style={{flex:1, width:'100%', resizeMode:"fit" }} />
                    <Card.Content>
                      <Title style={{marginTop:10}}>A path to FND Wellbeing</Title>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              </View>
            
        </ScrollView>
      </View>
    );
  }

  
  
  
};

