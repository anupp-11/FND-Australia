import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  TextInput,
  Text,
  Card,
} from 'react-native-paper';
import styles from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/LoginComponents/Button';
import Background from '../../components/LoginComponents/Background';
import { theme } from '../../components/LoginComponents/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { DoctorDetail, EmergencyContact, UserInfo } from '../../models/BaseModel';

export default class ManageProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isProcessing: true,
      email: "abc@gmail.com",
      mobileNumber: "98273648172",
      emergencyContact: {
        name:null,
        relationship:null,
        address:null,
        phoneNumber:null,
      },
      doctorDetail: {
        name:null,
        profession:null,
        address:null,
        phoneNumber:null,
      }
      
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
    const userEmergencyContact = new EmergencyContact(
      this.state.emergencyContact.name,
      this.state.emergencyContact.relationship,
      this.state.emergencyContact.phoneNumber,
      this.state.emergencyContact.address,
    )
    const userDoctorDetail = new DoctorDetail(
      this.state.emergencyContact.name,
      this.state.emergencyContact.relationship,
      this.state.emergencyContact.phoneNumber,
      this.state.emergencyContact.address,
    )
    const userData = new UserInfo(
      this.state.name,
      this.state.mobileNumber,
      userEmergencyContact,
      userDoctorDetail
    );
    //send userData to service
  }
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
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
          borderBottomColor: theme.colors.primary,
          borderBottomWidth: 2,
          paddingHorizontal:5
        }}
      />
      <View style={{padding: 10
                }}>
        <TextInput
                  mode="flat"
                  label="Email"
                  style={{ backgroundColor: 'white', margin:10 }}
                  value={this.state.email}
                  disabled={true}
                />
                <TextInput
                  mode="flat"
                  label="Mobile Number"
                  right={<TextInput.Icon name="border-color" />}
                  style={{ backgroundColor: 'white',margin:10 }}
                  value={this.state.mobileNumber}
                  onChangeText={(value) => this.setState({ mobileNumber: value })}
                />
                 {/* Emergency Contact */}
                  <Card style = {{margin:10}}>
                  <Card.Content>
                    <Text>My Emergency Contact</Text>
                    <TextInput
                            mode="flat"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            right={<TextInput.Icon name="border-color" />}
                            label="Name"
                            value={this.state.emergencyContact.name}
                            onChangeText={(value) => this.setState({ name : value })}
                          />
                    <TextInput
                            mode="flat"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            right={<TextInput.Icon name="border-color" />}
                            label="Relationship"
                            value={this.state.emergencyContact.relationship}
                            onChangeText={(value) => this.setState({ relationship : value })}
                          />
                    <TextInput
                            mode="flat"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            right={<TextInput.Icon name="border-color" />}
                            label='Phone Number'
                            value={this.state.emergencyContact.phoneNumber}
                            onChangeText={(value) => this.setState({ phoneNo : value })}
                          />
                    <TextInput
                          mode="flat"
                          theme={{ colors: { primary: theme.colors.primary}}}
                          right={<TextInput.Icon name="border-color" />}
                          label='Address'
                          value={this.state.emergencyContact.address}
                          onChangeText={(value) => this.setState({ address : value })}
                        />
                    
                  </Card.Content>
                </Card>

                {/* Emergency Contact */}
                <Card style = {{margin:10}}>
                  <Card.Content>
                    <Text>Doctor's Details</Text>
                    <TextInput
                            mode="flat"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            right={<TextInput.Icon name="border-color" />}
                            label="Name"
                            value={this.state.doctorDetail.name}
                            onChangeText={(value) => this.setState({ name : value })}
                          />
                    <TextInput
                            mode="flat"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            right={<TextInput.Icon name="border-color" />}
                            label="Relationship"
                            value={this.state.doctorDetail.profession}
                            onChangeText={(value) => this.setState({ relationship : value })}
                          />
                    <TextInput
                            mode="flat"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            right={<TextInput.Icon name="border-color" />}
                            label='Phone Number'
                            value={this.state.doctorDetail.phoneNumber}
                            onChangeText={(value) => this.setState({ phoneNo : value })}
                          />
                    <TextInput
                          mode="flat"
                          theme={{ colors: { primary: theme.colors.primary}}}
                          right={<TextInput.Icon name="border-color" />}
                          label='Address'
                          value={this.state.doctorDetail.address}
                          onChangeText={(value) => this.setState({ address : value })}
                        />
                    
                  </Card.Content>
                </Card>
                <View style={{display:'flex', flexDirection:'row',justifyContent:'center', marginTop: 15}}>
                   <Button mode="contained" style={{width:'60%'}} onPress={this.updateUserData}>
                    Update
                  </Button>
                </View>
               
               
      </View>
        </ScrollView>
      
      </SafeAreaView>
    );
  }
  
};


