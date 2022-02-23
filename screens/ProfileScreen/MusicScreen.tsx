import React from 'react';
import {View,Image, SafeAreaView, ScrollView, FlatList} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import VideoComponent from '../MediaScreen/VideoComponent';
import styles from './styles';


export default class MusicScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [
        "g0XyIiAJg2E",
        "eKFTSSKCzWA",
        "2LMqOdCHQWw",
        "RmIaOHRo3RU",
        "kJdwwnXDi7I",
        "GOsfvjwwe2E",
        // "FKXUWDlf-UE",
        // "9hcBxyrqu7s"
      ],
    };
  }

  componentDidMount = async () => {
   
  };
  renderItem = ({ item }) => <VideoComponent video={item} navigation={this.props.navigation} />;
  render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize:16,lineHeight: 25,fontWeight:'600',paddingHorizontal:10,paddingVertical:5,textAlign: 'justify'}}>Many people with FND experience sensory sensitivities. Some people are acutely sensitive to 
          sounds. Some sounds may trigger and overload a person’s nervous system, leading to 
          symptom exacerbation and functional seizures. Other sounds, may be healing and soothing 
          to a person’s nervous system. What is healing and soothing to one person, may be 
          aggravating and stimulating to another person.
          </Text>
        <Text style={{fontSize:16,lineHeight: 25,fontWeight:'600',paddingHorizontal:10,paddingVertical:5,textAlign: 'justify'}}>Often sounds of nature are calming. If you are unable to get out and connect with nature, 
          there are various apps and YouTube tracks that can be freely accessed.
          </Text>
        <Text style={{fontSize:16,lineHeight: 25,fontWeight:'600',paddingHorizontal:10,paddingVertical:5,textAlign: 'justify'}}>Some examples are below:</Text>

        <FlatList
               initialNumToRender={7}
               showsVerticalScrollIndicator={false}
               data={this.state.videos}
               renderItem={this.renderItem}
               columnWrapperStyle={{ justifyContent: "space-around" }}
               horizontal={false}
               numColumns={2}
               style={{
                width: "100%",
                marginTop: 10,
               }}
             />
    </View>
    );
  }
  
};


