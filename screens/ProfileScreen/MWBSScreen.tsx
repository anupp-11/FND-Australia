import React from 'react';
import {View,Image, SafeAreaView, TouchableOpacity} from 'react-native';
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
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Exercise")} style= {styles.userInfoSection}>
            <View >
              <Image
              style={{height: 150, width :150, borderRadius:10, marginBottom: 20}}
              source={require('../../assets/images/exercise.jpeg')}
            />
            </View>
            <View>
              <Text style={{fontWeight:'700'}}>
                Exercises
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Soothing Music")} style= {styles.userInfoSection}>
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
            
          </TouchableOpacity>
       
      
     
      </View>
    </SafeAreaView>
    );
  }
  
};


