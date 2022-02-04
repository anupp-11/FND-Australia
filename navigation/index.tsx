//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardStack from './DashboardStack';
import { RootStackParamList } from '../types';
import DashboardScreen from '../screens/DashboardScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import BottomTabNav from './BottomTabNav';

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
       <RootNavigator />
      {/* <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen component={DashboardStack} name="RavisShop" />
      </Root.Navigator> */}
    </NavigationContainer>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

function Login() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={DashboardScreen} name="Dashboard" />
      <Stack.Screen component={LoginScreen} name="Login" options={{gestureEnabled: false}} />
      <Stack.Screen component={RegisterScreen} name="Register" />
      <Stack.Screen component={ForgotPasswordScreen} name="ForgotPassword" />
      {/* <Stack.Screen component={LoginScreen} name="Login" options={{gestureEnabled: false}}/>
      <Stack.Screen component={RegisterScreen} name="Register" />
      <Stack.Screen component={ForgotPasswordScreen} name="ForgotPassword" />
      <Stack.Screen component={OtpScreen} name="OtpScreen" />
      <Stack.Screen component={ChangePasswordScreen} name="ChangePassword" /> */}
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Login}  />
      <Stack.Screen name="Home" component={BottomTabNav} />
    </Stack.Navigator>
  );
}

export default Router;
