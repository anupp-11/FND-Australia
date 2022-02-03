import React, { useEffect, useState } from 'react';
import {View, SafeAreaView, StyleSheet, BackHandler} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Portal,
  Dialog,
  Paragraph,
  Button,
  Provider,
} from 'react-native-paper';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import FIcon from 'react-native-vector-icons/FontAwesome';
import AIcon from 'react-native-vector-icons/AntDesign';
import IIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { theme } from '../../components/LoginComponents/theme';
import { getUserFromDevice } from '../../service/AccountService';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [userName, setuserName] = useState("User");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function getUser() {
      const user = await getUserFromDevice();
      setuserName(user?.name);
      setEmail(user?.email);
      debugger;
    }
    getUser();
  },[]);

  const _onSMRPressed = () => {
    navigation.navigate('SMRScreen');
  }
  const logout = () =>{
    hideDialog();
    navigation.navigate('Dashboard');
  
  }
  return (
    <SafeAreaView style={styles.container}>
    <Provider>
    <View style={styles.head}>
      
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Avatar.Image 
          source={{
            uri: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
          }}
          size={80}
        />
        <View style={{marginLeft: 20}}>
          <Title style={[styles.title, {
            marginTop:15,
            marginBottom: 5,
          }]}>{userName}</Title>
          <Caption style={styles.caption}>{email}</Caption>
        </View>
      </View>
    </View>
    <View
      style={{
      borderBottomColor: theme.colors.surface,
      borderBottomWidth: 3,
      marginHorizontal: 10,
      marginBottom: 10
      }}
    />


    <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() => navigation.navigate('Manage Profile')}>
        <View style={styles.menuItem}>
          <FAIcon name="user-edit" color="#28cd00" size={20}/>
          <Text style={styles.menuItemText}>Manage Profile</Text>
        </View>
      </TouchableRipple>
     
      <TouchableRipple onPress={() =>navigation.navigate('Diagnosis')}>
        <View style={styles.menuItem}>
          <FAIcon name="user-md" color="#28cd00" size={22}/>
          <Text style={{color: '#777777',marginLeft: 26,fontWeight: '600',fontSize: 16,lineHeight: 26}}>Diagnosis</Text>
        </View>
      </TouchableRipple>
  
      
     
     
       <TouchableRipple onPress={() => navigation.navigate('Functional Seizure Information')}>
        <View style={styles.menuItem}>
          <IIcon name="information-circle" color="#28cd00" size={25} style={{marginLeft:-3,marginRight:3}}/>
          <Text style={styles.menuItemText}>Functional Seizure Information</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('My Seizure Management Plan')}>
        <View style={styles.menuItem}>
          <AIcon name="form" color="#28cd00" size={25} style={{marginLeft:-3,marginRight:3}}/>
          <Text style={styles.menuItemText}>My Seizure Management Plan</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Seizure Monitoring Record')}>
        <View style={styles.menuItem}>
          <AIcon name="form" color="#28cd00" size={25} style={{marginLeft:-3,marginRight:3}}/>
          <Text style={styles.menuItemText}>Seizure Monitoring Record</Text>
        </View>
      </TouchableRipple>

      <TouchableRipple onPress={() => navigation.navigate('My Records')}>
        <View style={styles.menuItem}>
          <FIcon name="wpforms" color="#28cd00" size={25} style={{marginLeft:-1,marginRight:5}}/>
          <Text style={styles.menuItemText}>My Records</Text>
        </View>
      </TouchableRipple>
     
      <TouchableRipple onPress={() => navigation.navigate('My Wellbeing Strategies')}>
        <View style={styles.menuItem}>
          <FAIcon name="briefcase-medical" color="#28cd00" size={20} style={{marginRight:5}}/>
          <Text style={styles.menuItemText}>My Wellbeing Strategies</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Daily Logs')}>
        <View style={styles.menuItem}>
          <Icon name="account-check-outline" color="#28cd00" size={27} style={{marginLeft:-3,marginRight:0}}/>
          <Text style={styles.menuItemText}>Daily Log</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Useful Links')}>
        <View style={styles.menuItem}>
          <Icon name="link-variant" color="#28cd00" size={25} style={{marginLeft:-2,marginRight:3}}/>
          <Text style={styles.menuItemText}>Useful Links</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Donation')}>
        <View style={styles.menuItem}>
          <FAIcon name="donate" color="#28cd00" size={25}/>
          <Text style={styles.menuItemText}>Donation</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Stories')}>
        <View style={styles.menuItem}>
          <Icon name="camera-party-mode" color="#28cd00" size={27} style={{marginLeft:-2,marginRight:1}}/>
          <Text style={styles.menuItemText}>Stories</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('FAQs')}>
        <View style={styles.menuItem}>
          <FAIcon name="question-circle" color="#28cd00" size={23} style={{marginRight:3}}/>
          <Text style={styles.menuItemText}>FAQ</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('App Setting')}>
        <View style={styles.menuItem}>
          <Icons name="settings" color="#28cd00" size={23} style={{marginRight:3}}/>
          <Text style={styles.menuItemText}>App Settings</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={showDialog}>
        <View style={styles.menuItem}>
          <Icon name="logout" color="#28cd00" size={23} style={{marginRight:3}}/>
          <Text style={styles.menuItemText}>Signout</Text>
        </View>
      </TouchableRipple>
     
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Signout</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Are you sure you want to signout?</Paragraph>
            </Dialog.Content>
          <Dialog.Actions style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <Button color={theme.colors.primary} onPress={logout}>Yes</Button>
            <Button color='red' onPress={hideDialog}>No</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
  
    </View>
    </Provider>

  </SafeAreaView>
  );
};

export default ProfileScreen;

