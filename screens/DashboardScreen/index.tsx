import React, {memo} from 'react';
import Background from '../../components/LoginComponents/Background';
import Button from '../../components/LoginComponents/Button';
import Header from '../../components/LoginComponents/Header';
import Logo from '../../components/LoginComponents/Logo';
import {useNavigation} from '@react-navigation/native';
import Paragraph from '../../components/LoginComponents/Paragraph';
import { theme } from '../../components/LoginComponents/theme';
import { View } from 'react-native';

const DashboardScreen = () => {
  const navigation = useNavigation();

  const Login = () => {
    navigation.navigate('Login');
  };
  const Signup = () => {
    navigation.navigate('Register');
  };
  return (
    <Background>
      <Logo />
      <View style={{paddingVertical: 14,}}></View>
      <Header>Welcome To</Header>
      <Header>FND Australia</Header>
      <Header>Support Services</Header>
      <View style={{paddingVertical: 14,}}></View>

      {/* <Paragraph> Login or SignUp </Paragraph> */}
      <Button mode="contained" onPress={Login}>
        Login
      </Button>
      <Button mode="outlined" labelStyle = {{color : theme.colors.primary}} onPress={Signup} >
        Sign Up
      </Button>
    </Background>
  );
};

export default DashboardScreen;