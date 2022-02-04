import React from 'react';
import {View, SafeAreaView, StyleSheet, Alert, ActivityIndicator} from 'react-native';
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
import { Contact, DoctorDetail, EmergencyContact, UserInfo } from '../../models/BaseModel';
import DatePicker from 'react-native-datepicker';
import { getUserFromDevice, getUserInfo, getUserInfoFromDevice, saveUserInfoToDevice, updateExistingUserInfo, updateUserInfo } from '../../service/AccountService';

export default class ManageProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tempGender:'',
      visible: false,
      isProcessing: false,
      user:"",
      name:"",
      email: "",
      gender:"",
      DOB:"",
      mobileNumber: "",
      emergencyName:"",
      emergencyRelationship:"",
      emergencyProfession:"",
      emergencyAddress:"",
      emergencyPhone:"",
      doctorName:"",
      doctorRelationship:"",
      doctorProfession:"",
      doctorAddress:"",
      doctorPhone:"",
      
    };
    this.showDialog = this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this.updateGender = this.updateGender.bind(this);
    this.updateUserData = this.updateUserData.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  componentDidMount = async () => {
    this.setState({tempGender:this.state.gender})
    const user = await getUserFromDevice();  
    const userInfo = await getUserInfo(user?.id);
      
    if (userInfo) {
      debugger;
      this.setState({
        email: userInfo.user.email,
        name: userInfo.user.name,
        gender: userInfo.gender,
        DOB : userInfo.DOB,
        mobileNumber: userInfo.phone, 
        emergencyName : userInfo.emergencyEontact.name,
        emergencyRelationship:userInfo.emergencyEontact.relationship,
        emergencyProfession:userInfo.emergencyEontact.profession,
        emergencyAddress:userInfo.emergencyEontact.address,
        emergencyPhone:userInfo.emergencyEontact.phoneNumber,
        doctorName:userInfo.doctorDetail.name,
        doctorRelationship:userInfo.doctorDetail.relationship,
        doctorProfession:userInfo.doctorDetail.profession,
        doctorAddress:userInfo.doctorDetail.address,
        doctorPhone:userInfo.doctorDetail.phoneNumber,
      });
    }
  };
  
  updateUserData = async () => {
    this.setState({isProcessing:true});
    const userEmergencyContact = new Contact(
      this.state.emergencyName,
      this.state.emergencyRelationship,
      this.state.emergencyProfession,
      this.state.emergencyPhone,
      this.state.emergencyAddress,
    )
    const userDoctorDetail = new Contact(
      this.state.doctorName,
      this.state.doctorRelationship,
      this.state.doctorProfession,
      this.state.doctorPhone,
      this.state.doctorAddress,
    )
    const userData = new UserInfo(
      this.state.user,
      this.state.mobileNumber,
      this.state.DOB,
      this.state.gender,
      userEmergencyContact,
      userDoctorDetail
    );
      const userInfo = await getUserFromDevice();
      debugger;
      const response = await updateExistingUserInfo(userData, userInfo?.id);
      this.setState({isProcessing:false});
        debugger;
        if(response?.isSuccess){
          Alert.alert("","Data Updated Successfully.");
          saveUserInfoToDevice(response.result);
        }else {
          Alert.alert("","Update Unsuccessful");
        }
      
      
   
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
  getDate(){
    if(this.state.DOB)
      return this.state.DOB;
    else
      return "Select Date"
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
            }]}>{this.state.name}</Title>
          </View>
          
      </View>
      <View
        style={{
          borderBottomColor: theme.colors.primary,
          borderBottomWidth: 2,
          paddingHorizontal:5
        }}
      />
      {this.state.isProcessing ==true ? (
            <View style={{
              margin:10
              }}>
            <ActivityIndicator size="large" color={theme.colors.primary}/> 
            </View>):(<View></View>)}
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
                      placeholder={this.getDate()}
                      format="YYYY-MM-DD"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                    
                      onDateChange={(date) => this.setState({DOB: date})}
                    />
                  </View>
              </View>
         
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
                            value={this.state.emergencyName}
                            onChangeText={(value) => this.setState({ emergencyName : value })}
                          />
                    <TextInput
                            mode="flat"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            right={<TextInput.Icon name="border-color" />}
                            label="Relationship"
                            value={this.state.emergencyRelationship}
                            onChangeText={(value) => this.setState({ emergencyRelationship : value })}
                          />
                    <TextInput
                            mode="flat"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            right={<TextInput.Icon name="border-color" />}
                            label='Phone Number'
                            value={this.state.emergencyPhone}
                            onChangeText={(value) => this.setState({ emergencyPhone : value })}
                          />
                    <TextInput
                          mode="flat"
                          theme={{ colors: { primary: theme.colors.primary}}}
                          right={<TextInput.Icon name="border-color" />}
                          label='Address'
                          value={this.state.emergencyAddress}
                          onChangeText={(value) => this.setState({ emergencyAddress : value })}
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
                            value={this.state.doctorName}
                            onChangeText={(value) => this.setState({ doctorName : value })}
                          />
                    <TextInput
                            mode="flat"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            right={<TextInput.Icon name="border-color" />}
                            label="Profession"
                            value={this.state.doctorProfession}
                            onChangeText={(value) => this.setState({ doctorProfession : value })}
                          />
                    <TextInput
                            mode="flat"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            right={<TextInput.Icon name="border-color" />}
                            label='Phone Number'
                            value={this.state.doctorPhone}
                            onChangeText={(value) => this.setState({ doctorPhone : value })}
                          />
                    <TextInput
                          mode="flat"
                          theme={{ colors: { primary: theme.colors.primary}}}
                          right={<TextInput.Icon name="border-color" />}
                          label='Address'
                          value={this.state.doctorAddress}
                          onChangeText={(value) => this.setState({ doctorAddress : value })}
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


