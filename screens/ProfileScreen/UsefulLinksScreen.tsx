import React from 'react';
import {View,Image, SafeAreaView, Button, Linking} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import styles from './styles';


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
          <Button color={"#f46036"} onPress={() => Linking.openURL('mailto:info@fndaus.org.au') }
            title="info@fndaus.org.au" />
        </View>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />
        <View style={{padding:20}}>
          <Text style={{fontSize:16, fontWeight:'700',marginBottom:10}}>Upcoming Events</Text>
          <Button color={"#f46036"} title="View Events" onPress={ ()=>{ Linking.openURL('https://fndaus.org.au/news-and-events/')}} />
        
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


