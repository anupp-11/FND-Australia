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
import Button from '../../components/LoginComponents/Button';
import { theme } from '../../components/LoginComponents/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { Contact, DoctorDetail, EmergencyContact, RegsUserInfo, UserInfo } from '../../models/BaseModel';
import DatePicker from 'react-native-datepicker';
import { getUserFromDevice, getUserInfo, getUserInfoFromDevice, saveUserInfoToDevice, updateExistingUserInfo, updateUserInfo } from '../../service/AccountService';
import { NavigationRouteContext, StackActions } from '@react-navigation/native';

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
      dob:"",
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
    debugger;
    if (userInfo) {
      debugger;
      this.setState({
        email: userInfo.user.email,
        name: userInfo.user.name,
        gender: userInfo.gender,
        dob : userInfo.dob,
        mobileNumber: userInfo.phone, 
        emergencyName : userInfo.emergencyEontact.name,
        emergencyRelationShip:userInfo.emergencyEontact.relationShip,
        emergencyProfession:userInfo.emergencyEontact.profession,
        emergencyAddress:userInfo.emergencyEontact.address,
        emergencyPhone:userInfo.emergencyEontact.phone,
        doctorName:userInfo.doctorDetail.name,
        doctorRelationShip:userInfo.doctorDetail.relationShip,
        doctorProfession:userInfo.doctorDetail.profession,
        doctorAddress:userInfo.doctorDetail.address,
        doctorPhone:userInfo.doctorDetail.phone,
      });
    }
    else {
      const userEmergencyContact = new Contact(
        "",
        "",
        "",
        "",
        ""
      )
      const userDoctorDetail = new Contact(
        "",
        "",
        "",
        "",
        ""
      )
      const userData = new RegsUserInfo(
        user,
        "",
        new Date(),
        "",
        userEmergencyContact,
        userDoctorDetail
      );
      const resp = await updateUserInfo(userData);
      debugger;
      saveUserInfoToDevice(resp.result);
      const userr= await getUserInfoFromDevice();
      debugger;
      this.setState({
        email: userr.user.email,
        name: userr.user.name,
        gender: userr.gender,
        dob : userr.dob,
        mobileNumber: userr.phone, 
        emergencyName : userr.emergencyEontact.name,
        emergencyRelationShip:userr.emergencyEontact.relationShip,
        emergencyProfession:userr.emergencyEontact.profession,
        emergencyAddress:userr.emergencyEontact.address,
        emergencyPhone:userr.emergencyEontact.phone,
        doctorName:userr.doctorDetail.name,
        doctorRelationShip:userr.doctorDetail.relationShip,
        doctorProfession:userr.doctorDetail.profession,
        doctorAddress:userr.doctorDetail.address,
        doctorPhone:userr.doctorDetail.phone,
      });
    }
  };
  
  updateUserData = async () => {
    this.setState({isProcessing:true});
    const userInfo = await getUserInfoFromDevice();
    const userEmergencyContact = new Contact(
      this.state.emergencyName,
      this.state.emergencyRelationShip,
      "",
      this.state.emergencyPhone,
      this.state.emergencyAddress,
    )
    const userDoctorDetail = new Contact(
      this.state.doctorName,
      "",
      this.state.doctorProfession,
      this.state.doctorPhone,
      this.state.doctorAddress,
    )
    const user = await getUserFromDevice();
    const userData = new UserInfo(
      userInfo.id,
      user,
      this.state.mobileNumber,
      this.state.dob,
      this.state.gender,
      userEmergencyContact,
      userDoctorDetail
    );
      
      debugger;
      const response = await updateUserInfo(userData);
      this.setState({isProcessing:false});
        debugger;
        if(response?.isSuccess){
          Alert.alert("","Data Updated Successfully.");
          saveUserInfoToDevice(response.result);
          this.props.navigation.dispatch(
            StackActions.replace('Home',{
            })
          );
          // this.props.navigation.navigate("BHome");
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
  getDate(date){
    debugger;
    if(date)
      return date;
    else
      return "Select DOB"
  }
  render(){
    return (
      <View style={styles.container}>
        {this.state.isProcessing ==true ? (
        <View style={{
          position:'absolute',
          top:'50%',
          marginLeft:'auto',
          marginRight:'auto',
          left:0,
          right:0,
          zIndex: 1
          }}>
        <ActivityIndicator size="large" color={theme.colors.primary}/> 
        </View>):(<View></View>)}

       

        <Provider>
       
        <ScrollView>          
        <View style={styles.userInfoSection}>
        <View style={{display:'flex', flexDirection:'row',justifyContent:'center', marginTop: 15}}>
        {this.state.gender == "Male"?(<Avatar.Image 
          source={require('../../assets/images/man.png')}
          size={80}
        />):(<Avatar.Image 
          source={require('../../assets/images/woman.png')}
          size={80}
        />)}
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
                  <View style={{backgroundColor:'white',display:'flex', flexDirection:'column',justifyContent:'center',flex:1,padding:2,marginRight:10,paddingHorizontal:10}}>
                    <Text style={{fontSize:12,color:'gray'}}>Date of Birth</Text>
                    <DatePicker
                      style={{width:'100%', outerHeight:'50%'}}
                      date={this.state.dob}
                      placeholder={this.state.dob}
                      format="YYYY-MM-DD"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      onDateChange={(date) => this.setState({dob: date})}
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
                            value={this.state.emergencyRelationShip}
                            onChangeText={(value) => this.setState({ emergencyRelationShip : value })}
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
      </View>
    );
  }
  
};


