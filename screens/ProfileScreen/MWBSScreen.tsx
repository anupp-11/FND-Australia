import React from 'react';
import {View,Image, SafeAreaView} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import styles from './styles';


export default class MWBSScreen extends React.Component {
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
  
      
        <View style={{display:'flex', flexDirection:'row',justifyContent:"space-around", marginTop: 15}}>
          <View style= {styles.userInfoSection}>
            <View >
              <Image
              style={{height: 150, width :150, borderRadius:10, marginBottom: 20 }}
              source={require('../../assets/images/exercise.png')}
            />
            </View>
            <View>
              <Text style={{fontWeight:'700'}}>
                Exercises
              </Text>
            </View>
          </View>

          <View style= {styles.userInfoSection}>
            <View >
                <Image
                style={{height: 150, width :150, borderRadius:10, marginBottom: 20 }}
                source={require('../../assets/images/music.png')}
                />    
            </View>       
                <View>
                  <Text style={{fontWeight:'700'}}>
                    Soothing Music
                  </Text>
                </View>
            
          </View>
       
      
     
      </View>
    </SafeAreaView>
    );
  }
  
};


