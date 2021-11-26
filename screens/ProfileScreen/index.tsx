import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Feather';




import Button from '../../components/LoginComponents/Button';

import styles from './styles';

// create a component
const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.userInfoSection}>
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
          }]}>Ram Bahadur</Title>
          <Caption style={styles.caption}>@rame</Caption>
        </View>
      </View>
    </View>

    <View style={styles.userInfoSection}>
      <View style={styles.row}>
        <Icon name="map-marker-radius" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>Dhapakhel, Lalitpur</Text>
      </View>
      <View style={styles.row}>
        <Icon name="phone" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>+977-9867564548</Text>
      </View>
      <View style={styles.row}>
        <Icon name="email" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>rame@email.com</Text>
      </View>
    </View>

    <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          borderRightColor: '#dddddd',
          borderRightWidth: 1
        }]}>
          <Title>$140.50</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
    </View>

    <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name="cart-arrow-down" color="#28cd00" size={25}/>
          <Text style={styles.menuItemText}>Your Orders</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name="credit-card" color="#28cd00" size={25}/>
          <Text style={styles.menuItemText}>Payment</Text>
        </View>
      </TouchableRipple>
      {/*<TouchableRipple onPress={myCustomShare}>
        <View style={styles.menuItem}>
          <Icon name="share-outline" color="#FF6347" size={25}/>
          <Text style={styles.menuItemText}>Tell Your Friends</Text>
        </View>
      </TouchableRipple>
      
      */}
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name="account-check-outline" color="#28cd00" size={27}/>
          <Text style={styles.menuItemText}>Support</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icons name="settings" color="#28cd00" size={23}/>
          <Text style={styles.menuItemText}>Settings</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Dashboard')}>
        <View style={styles.menuItem}>
          <Icon name="logout" color="#28cd00" size={23}/>
          <Text style={styles.menuItemText}>Logout</Text>
        </View>
      </TouchableRipple>

  
    </View>
  </SafeAreaView>
  );
};

export default ProfileScreen;

