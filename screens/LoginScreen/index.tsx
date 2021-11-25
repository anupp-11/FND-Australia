import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import BackButton from '../../components/LoginComponents/BackButton';
import Background from '../../components/LoginComponents/Background';
import Button from '../../components/LoginComponents/Button';
import Header from '../../components/LoginComponents/Header';
import Logo from '../../components/LoginComponents/Logo';
import TextInput from '../../components/LoginComponents/TextInput';
import {theme} from '../../components/LoginComponents/theme';
import {useNavigation} from '@react-navigation/native';

import {
  emailValidator,
  passwordValidator,
} from '../../components/LoginComponents/utils';

const LoginScreen = () => {
  const navigation = useNavigation();
  const ForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const Register = () => {
    navigation.navigate('Register');
  };

  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    navigation.navigate('Home');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Dashboard')} />
      <Logo />
      <Header>Welcome back.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={ForgotPassword}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={Register}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};
const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
