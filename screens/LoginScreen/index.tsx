import React, {memo, useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Dimensions, Alert, } from 'react-native';
import BackButton from '../../components/LoginComponents/BackButton';
import Button from '../../components/LoginComponents/Button';
import TextInput from '../../components/LoginComponents/TextInput';
import {theme} from '../../components/LoginComponents/theme';
import {useNavigation} from '@react-navigation/native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {TextInput as TextInputP} from 'react-native-paper';
import IoIcon from 'react-native-vector-icons/Ionicons';
import {
  emailValidator,
  passwordValidator,
} from '../../components/LoginComponents/utils';
import { authUser } from '../../service/AccountService';
import * as LocalAuthentication from 'expo-local-authentication';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [hidePass, setHidePass] = useState(true);
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);

  // Check if hardware supports biometrics
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      debugger;
      setIsBiometricSupported(compatible);
    })();
  });

  const ForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const Register = () => {
    navigation.navigate('Register');
  };
  const handleBiometricAuth = async () => {
    try {
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
     
      if (!isEnrolled) {
        throw new Error('No Faces / Fingers found.')
      }
      
      // Authenticate user
      const resp = await LocalAuthentication.authenticateAsync();
      if(resp.success){
        navigation.navigate('Home');
      }else{
        Alert.alert('Fingerprint didnot match.');
      }
    } catch (error) {
      Alert.alert('An error as occured', error?.message);
    }
    
}
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    //const response = await authUser(email.value, password.value);
    // if (emailError || passwordError) {
    //   setEmail({...email, error: emailError});
    //   setPassword({...password, error: passwordError});
    //   return;
    // }
    debugger;
    navigation.navigate('Home');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      
      <View style={styles.container}>
      <BackButton goBack={() => navigation.navigate('Dashboard')} />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <FAIcon name="user" color="#fff" size={50} style = {{}}/>
            </View>
            <Text style={styles.loginTitleText}>Sign In</Text>
            
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
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
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInputP
                  mode="outlined"
                  //label="Mobile Number"
                  right={<TextInputP.Icon name="eye" onPress={() => setHidePass(!hidePass)}/>}
                  style={{ backgroundColor: 'white'}}
                  selectionColor={"#42AF6A"}
                  theme={{ colors: { primary: theme.colors.primary,},}}
                  value={password.value}
                  secureTextEntry={hidePass ? true : false}
                  onChangeText={text => setPassword({value: text, error: ''})}
                />
              {/* <TextInput
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({value: text, error: ''})}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry={hidePass ? true : false}
                //right={<TextInput.Input.Icon name="border-color" />}
                //right={<TextInput.Icon name="border-color" onPress={() => setHidePass(!hidePass)} />}
              />
              <FAIcon
                name={hidePass ? 'eye-slash' : 'eye'}
                size={15}
                color="grey"
                onPress={() => setHidePass(!hidePass)}
              /> */}
            </View>
            <View style={styles.forgotPassword}>
              <TouchableOpacity onPress={ForgotPassword}>
                <Text style={styles.label}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
            <Button mode="contained" onPress={_onLoginPressed}>
              Sign In
            </Button>
            <View style={styles.row}>
              <Text style={styles.label}>Don’t have an account? </Text>
              <TouchableOpacity onPress={Register}>
                <Text style={styles.link}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Text style={{marginVertical:10, color:theme.colors.secondary}}>OR</Text>
            </View>
            {isBiometricSupported ? (
              <View >
                <TouchableOpacity style={styles.row} onPress={handleBiometricAuth}>
                  <IoIcon name="finger-print-outline" color={theme.colors.primary} size={20} style={{marginRight:10}} />
                  <Text style={styles.label}>Tap to login with biometric</Text>
                </TouchableOpacity>
              </View>)
              : (
                <View></View>
              )}
          </View>
        </View>
        
        
      </View>
    </TouchableWithoutFeedback>
    
  );
};
const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
    marginTop:20
  },
  row: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection:'row',
    marginTop: 4,
  },
  label: {

    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor:"#fff"
  },
  centerizedView: {
    width: '100%',
    top: '20%',
    color:"#DBDBDB"
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 80,
    height: 80,
    backgroundColor: theme.colors.primary,
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    alignSelf: 'center',
    display: 'flex',
    fontSize: 26,
    //fontWeight: 'bold',
    marginTop: 10,
    color: theme.colors.primary
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    borderRadius: 10,
    
  },
  loginButton: {
    backgroundColor: '#ff4757',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});

export default memo(LoginScreen);
