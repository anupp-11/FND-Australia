import React from 'react';
import {View,Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import styles from './styles';
import AIcon from 'react-native-vector-icons/AntDesign';

export default class FilledFormScreen extends React.Component {
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
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Seizure Management Plan")} style= {styles.userInfoSection}>
            <View >
            <AIcon name="profile" color="#28cd00" size={180} />
                {/* <Image
                style={{height: 150, width :150, borderRadius:10, marginBottom: 20 }}
                source={require('../../assets/images/music.png')}
                />     */}
            </View>
            <View>
              <Text style={{fontWeight:'700'}}>
                Seizure Management Plan
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Soothing Music")} style= {styles.userInfoSection}>
            <View >

            <AIcon name="profile" color="#28cd00" size={180} />
                {/* <Image
                style={{height: 150, width :150, borderRadius:10, marginBottom: 20 }}
                source={require('../../assets/images/music.png')}
                />     */}
            </View>       
                <View>
                  <Text style={{fontWeight:'700'}}>
                    Seizure Monitoring Record
                  </Text>
                </View>
            
          </TouchableOpacity>
       
      
     
      </View>
    </SafeAreaView>
    );
  }
  
};


