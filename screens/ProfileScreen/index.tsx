import React from 'react';
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
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import { theme } from '../../components/LoginComponents/theme';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

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
          }]}>Saurab</Title>
          <Caption style={styles.caption}>@saurab</Caption>
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
          <FAIcon name="user-edit" color="black" size={20}/>
          <Text style={styles.menuItemText}>Manage Profile</Text>
          <MAIcon name="arrow-forward-ios" color="black" size={20} style={{marginLeft:180, marginTop:5}}/>
        </View>
      </TouchableRipple>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <FAIcon name="user-md" color="black" size={20}/>
          <Text style={styles.menuItemText}>Diagnosis</Text>
          <MAIcon name="arrow-forward-ios" color="black" size={20} style={{marginLeft:225, marginTop:5}}/>
        </View>
      </TouchableRipple>
  
      
     
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Fontisto name="prescription" color="#28cd00" size={27}/>
          <Text style={styles.menuItemText}>Symptom Management Plan</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Symptom Monitoring Record')}>
        <View style={styles.menuItem}>
          <Icon name="file-cabinet" color="#28cd00" size={27}/>
          <Text style={styles.menuItemText}>Symptom Monitoring Record</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Seizure Management Plan')}>
        <View style={styles.menuItem}>
          <Icon name="file-document-outline" color="#28cd00" size={27}/>
          <Text style={styles.menuItemText}>My Seizure Monitoring Record</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('My Wellbeing Strategies')}>
        <View style={styles.menuItem}>
          <FAIcon name="briefcase-medical" color="#28cd00" size={20}/>
          <Text style={styles.menuItemText}>My Wellbeing Strategies</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Daily Logs')}>
        <View style={styles.menuItem}>
          <Icon name="account-check-outline" color="#28cd00" size={27}/>
          <Text style={styles.menuItemText}>Daily Log</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Useful Links')}>
        <View style={styles.menuItem}>
          <Icon name="link-variant" color="#28cd00" size={27}/>
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
          <Icon name="camera-party-mode" color="#28cd00" size={27}/>
          <Text style={styles.menuItemText}>Stories</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('FAQs')}>
        <View style={styles.menuItem}>
          <FAIcon name="question-circle" color="#28cd00" size={23}/>
          <Text style={styles.menuItemText}>FAQ</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('App Setting')}>
        <View style={styles.menuItem}>
          <Icons name="settings" color="#28cd00" size={23}/>
          <Text style={styles.menuItemText}>App Settings</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={showDialog}>
        <View style={styles.menuItem}>
          <Icon name="logout" color="#28cd00" size={23}/>
          <Text style={styles.menuItemText}>Logout</Text>
        </View>
      </TouchableRipple>
     
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Logout</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Are you sure you want to logout?</Paragraph>
            </Dialog.Content>
          <Dialog.Actions>
          
            <Button onPress={logout}>Yes</Button>
            <Button onPress={hideDialog}>No</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
  
    </View>
    </Provider>

  </SafeAreaView>
  );
};

export default ProfileScreen;

