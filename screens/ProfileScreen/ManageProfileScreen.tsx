import React from 'react';
import {View, SafeAreaView, StyleSheet, Alert} from 'react-native';
import {
  Avatar,
  Title,
  TextInput,
  Text,
  Card,
  Dialog,
  Portal,
  Provider,
  Paragraph,
  RadioButton,
  Button as RButton
} from 'react-native-paper';
import styles from './styles';
import EIcon from 'react-native-vector-icons/Entypo';
import Button from '../../components/LoginComponents/Button';
import Background from '../../components/LoginComponents/Background';
import { theme } from '../../components/LoginComponents/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { DoctorDetail, EmergencyContact, UserInfo } from '../../models/BaseModel';
import DatePicker from 'react-native-datepicker';

export default class ManageProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tempGender:'',
      visible: false,
      isProcessing: true,
      email: "abc@gmail.com",
      gender:"Male",
      DOB:"1998-05-18",
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
    this.showDialog = this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this.updateGender = this.updateGender.bind(this);
  }

  componentDidMount = async () => {
    this.setState({tempGender:this.state.gender})
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
      this.state.DOB,
      this.state.gender,
      userEmergencyContact,
      userDoctorDetail
    );
    //send userData to service
  }
  showDialog(){
    this.setState({visible:true});
  }
  hideDialog(){
    this.setState({visible:false});
  }
  updateGender(){
    this.setState({gender:this.state.tempGender});
    this.hideDialog();
  }
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Provider>
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
                <View style={{display:'flex', flexDirection:'row', flex:1,width:'100%'}}>
                <Portal>
                  <Dialog visible={this.state.visible}  onDismiss={this.hideDialog}>
                    <Dialog.Title>Update Gender</Dialog.Title>
                    <Dialog.Content>
                      <RadioButton.Group onValueChange={newValue => this.setState({tempGender:newValue})} value={this.state.tempGender}>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',height:50,borderColor:'gray', borderWidth:1, borderRadius:4}}>
                          <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <Text>Male</Text>
                            <RadioButton color={theme.colors.primary} value="Male" />
                          </View> 
                          <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <Text>Female</Text>
                            <RadioButton color={theme.colors.primary} value="Female" />
                          </View>
                          <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <Text>Other</Text>
                            <RadioButton color={theme.colors.primary} value="Other" />
                          </View>
                        </View>
                      </RadioButton.Group>
                    </Dialog.Content>
                    <Dialog.Actions>
                      <RButton color='gray' onPress={this.hideDialog}>Cancel</RButton>
                      <RButton color={theme.colors.primary} onPress={this.updateGender}>Ok</RButton>
                    </Dialog.Actions>
                  </Dialog>
                </Portal>
                <View style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'center',flex:1}}>
                  <TextInput
                    mode="flat"
                    label="Gender"
                    right={<TextInput.Icon name="border-color" onPress={this.showDialog} />}
                    style={{ backgroundColor: 'white',margin:10, flex:1}}
                    value={this.state.gender}
                    disabled={true}
                    //onChangeText={(value) => this.setState({ mobileNumber: value })}
                  />
                  <View style={{backgroundColor:'white',display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'center',flex:1,padding:12,marginRight:10}}>
                    <DatePicker
                      style={{width:'100%'}}
                      date={this.state.DOB}
                      placeholder="Select Date"
                      format="YYYY-MM-DD"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                    
                      onDateChange={(date) => this.setState({DOB: date})}
                    />
                  </View>
              </View>
                {/* <TextInput
                  mode="flat"
                  label="Date of Birth"
                  right={<TextInput.Icon name="border-color" onPress={this.showDialog} />}
                  style={{ backgroundColor: 'white',margin:10,flex:1 }}
                  value={this.state.DOB}
                  disabled={true}
                  //onChangeText={(value) => this.setState({ mobileNumber: value })}
                /> */}
                </View>
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
        </Provider>
      </SafeAreaView>
    );
  }
  
};


