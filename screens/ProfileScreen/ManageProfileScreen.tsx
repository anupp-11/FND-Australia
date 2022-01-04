import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  TextInput,
} from 'react-native-paper';
import styles from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/LoginComponents/Button';
import Background from '../../components/LoginComponents/Background';

export default class ManageProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isProcessing: true,
      email: "abc@gmail.com",
      mobileNumber: "98273648172",
      emergencyContact: "18237018237",
      doctorDetail: "ABC"
      
    };
  }

  componentDidMount = async () => {
   // var userInfo = await getUserInfo();
      
    // if (userInfo) {
    //   this.setState({
    //     email: userInfo.email,
    //     mobileNumber: userInfo.mobileNumber,
    //     emergencyContact: userInfo.emergencyContact,
    //     doctorDetail: userInfo.doctorDetail

    //   });
    // }
  };
  updateUserData(){

  }
  render(){
    return (
      <SafeAreaView style={styles.container}>
  
      <View style={styles.userInfoSection}>
        <View style={{display:'flex', flexDirection:'row',justifyContent:'center', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            }}
            size={80}
          />
        </View>
        <View style={{}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>User Name</Title>
          </View>
          
      </View>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />
      <View style={{padding: 10
                }}>
        <TextInput
                  mode="flat"
                  label="Email"
                  style={{ backgroundColor: 'white', margin:10 }}
                  //right={<TextInput.Icon name="border-color" />}
                  value={this.state.email}
                  disabled={true}
                  // onChangeText={(value) =>
                  //    this.setState({ email: value })
                  //  }
                />
                <TextInput
                  mode="flat"
                  label="Mobile Number"
                  right={<TextInput.Icon name="border-color" />}
                  style={{ backgroundColor: 'white',margin:10 }}
                  value={this.state.mobileNumber}
                  onChangeText={(value) => this.setState({ mobileNumber: value })}
                />
                <TextInput
                  mode="flat"
                  label="Emergency Contact"
                  value={this.state.emergencyContact}
                  right={<TextInput.Icon name="border-color" />}
                   style={{ backgroundColor: 'white',margin:10 }}
                  onChangeText={(value) => this.setState({ emergencyContact: value })}
                />
                <TextInput
                  mode="flat"
                  value={this.state.doctorDetail}
                  style={{ backgroundColor: 'white',margin:10 }}
                  right={<TextInput.Icon name="border-color" />}
                  label="Doctor's Details"
                  onChangeText={(value) => this.setState({ doctorDetail: value })}
                />
                <View style={{display:'flex', flexDirection:'row',justifyContent:'center', marginTop: 15}}>
                   <Button mode="contained" style={{width:'60%'}} onPress={this.updateUserData}>
                    Update
                  </Button>
                </View>
               
               
      </View>
      
    </SafeAreaView>
    );
  }
  
};


