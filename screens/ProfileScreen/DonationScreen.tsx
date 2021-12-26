import React from 'react';
import {View,Image, SafeAreaView, Button, Linking} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import styles from './styles';
import { WebView } from 'react-native-webview';

export default class DonationScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentDidMount = async () => {
   
  };
  
  render(){
    return (
      <WebView
        source={{uri: 'https://www.gofundme.com/f/pm97y-the-king-family?qid=4c3343189cac014ce0f512333369d188'}}
        style={{}}
      />
    );
  }
  
};


