import React from 'react';
import {View,Image, SafeAreaView, Linking} from 'react-native';
import {
  Text, Button
} from 'react-native-paper';
import styles from './styles';
// import Button from '../../components/LoginComponents/Button';


export default class UsefulLinksScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentDidMount = async () => {
   
  };
  
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <View style={{padding:20}}>
          <Text style={{fontSize:16, fontWeight:'700', marginBottom:10}}>Contact Us</Text>
          <Button mode="contained" backgroundColor="#f46036" color="#f46036" labelStyle={{color:'white'}} onPress={() => Linking.openURL('mailto:info@fndaus.org.au') }
            title="info@fndaus.org.au">
              Mail Us
          </Button>
        </View>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />
        <View style={{padding:20}}>
          <Text style={{fontSize:16, fontWeight:'700',marginBottom:10}}>Useful Link</Text>
          <Button mode="contained" backgroundColor="#f46036" color="#f46036" labelStyle={{color:'white'}} title="Visit Useful Links" onPress={ ()=>{ Linking.openURL("https://fndaus.org.au/")}}>
            Visit Useful Links
          </Button>
        
        </View>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />
         <View style={{padding:20}}>
          <Text style={{fontSize:16, fontWeight:'700',marginBottom:10}}>Donation</Text>
          <Button mode="contained" backgroundColor="#f46036" color="#f46036" labelStyle={{color:'white'}} title="Donation" onPress={ ()=>{ Linking.openURL("https://tinyurl.com/donatefnd")}}>
            Donation
            </Button>
          
        </View>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />
    </SafeAreaView>
    );
  }
  
};


