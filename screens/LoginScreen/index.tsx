import React, {memo, useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Dimensions, Alert, ActivityIndicator, Platform, } from 'react-native';
import BackButton from '../../components/LoginComponents/BackButton';
import Button from '../../components/LoginComponents/Button';
import TextInput from '../../components/LoginComponents/TextInput';
import {theme} from '../../components/LoginComponents/theme';
import {StackActions, useNavigation} from '@react-navigation/native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {Checkbox, TextInput as TextInputP} from 'react-native-paper';
import IoIcon from 'react-native-vector-icons/Ionicons';
import {
  emailValidator,
  passwordValidator,
} from '../../components/LoginComponents/utils';
import { authUser, getLoginDetailFromDevice, getUserFromDevice, saveLoginDetails, saveUserToDevice } from '../../service/AccountService';
import * as LocalAuthentication from 'expo-local-authentication';
import { LoginDetail } from '../../models/BaseModel';
import { isExpired } from 'react-jwt';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [hidePass, setHidePass] = useState(true);
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);
  const [isProcessing, setisProcessing ] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [checked, setChecked] = React.useState(false);

  // Check if hardware supports biometrics
  useEffect(() => {
    async function fetchMyAPI() {
      const user = await getUserFromDevice();
      
      if(user){
        const token = user?.jwtToken;
        const isMyTokenExpired = isExpired(token);
        if(isMyTokenExpired){
          const loginDetail = await getLoginDetailFromDevice();
          console.log("Token is expired.");
          var data = {
            "id": "",
            "name": "",
            "userName": "",
            "jwtToken": ""
          }
          await saveUserToDevice(data);
          if(loginDetail?.checked){
            setEmail({value : loginDetail?.email,error:''});
            setPassword({value : loginDetail?.password,error:''});
            setChecked(true);
          }
          navigation.navigate('Login');
        }
        else{
          navigation.dispatch(
            StackActions.replace('Home',{
            })
          );
        }
      }else{
        const loginDetail = await getLoginDetailFromDevice();
        if(loginDetail?.checked){
          setEmail({value : loginDetail?.email,error:''});
          setPassword({value : loginDetail?.password,error:''});
          setChecked(true);
        }
        console.log("Token not present");
        navigation.navigate('Login');
      }
    }
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
    fetchMyAPI();
  },[]);

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
        setisProcessing(true);
        const loginDetail = await getLoginDetailFromDevice();
          if(loginDetail?.checked){
            setEmail({value : loginDetail?.email,error:''});
            setPassword({value : loginDetail?.password,error:''});
            setChecked(true);
          }
          try {
            const response = await authUser(email.value, password.value);
            debugger;
            setisProcessing(false);
            if(response?.isError){
              setErrorMessage(response.message);
              navigation.navigate('Login');
            }
            else{
              if(checked){
                const loginDetail =new LoginDetail(
                  email.value,
                  password.value,
                  checked
                )
                saveLoginDetails(loginDetail);
              }
              else{
                var data = {
                  "userName": "",
                  "password": "",
                  "checked":false
                }
                saveLoginDetails(data);
              }
              debugger;
              saveUserToDevice(response.result);
              navigation.dispatch(
                StackActions.replace('Home',{
                })
              );
            }
          } catch (error) {
            setisProcessing(false);
            console.log(error);
            Alert.alert("Registration Failed",error.message);
          }
          setisProcessing(false);
        
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
    setisProcessing(true);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
   
    if (emailError || password=="") {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      setisProcessing(false);
      return;
    }
    try {
      const response = await authUser(email.value, password.value);
      debugger;
      setisProcessing(false);
      if(response?.isError){
        setErrorMessage(response.message);
        navigation.navigate('Login');
      }
      else{
        if(checked){
          const loginDetail =new LoginDetail(
            email.value,
            password.value,
            checked
          )
          saveLoginDetails(loginDetail);
        }
        else{
          var data = {
            "userName": "",
            "password": "",
            "checked":false
          }
          saveLoginDetails(data);
        }
        debugger;
        saveUserToDevice(response.result);
        navigation.dispatch(
          StackActions.replace('Home',{
          })
        );
      }
    } catch (error) {
      setisProcessing(false);
      console.log(error);
      Alert.alert("Registration Failed",error.message);
    }
    setisProcessing(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

   
      
      <View style={styles.container}>
      {isProcessing ==true ? (
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
                  right={<TextInputP.Icon name="eye" onPress={() => setHidePass(!hidePass)}/>}
                  style={{ backgroundColor: 'white'}}
                  selectionColor={"#42AF6A"}
                  theme={{ colors: { primary: theme.colors.primary,},}}
                  value={password.value}
                  secureTextEntry={hidePass ? true : false}
                  onChangeText={text => setPassword({value: text, error: ''})}
                />
              
            </View>
            {errorMessage ? (
              <View>
                <Text style={{color:'red',margin:5}}>{errorMessage}</Text>
              </View>):(<View></View>)}


            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',paddingVertical:5,width:'100%'}}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                  {Platform.OS =='ios'? (
                  
                    <Checkbox.Android
                          status={checked ? 'checked' : 'unchecked'}
                          color={theme.colors.primary}
                        
                          onPress={() => {
                            setChecked(!checked);
                          }}
                        />

                    ):(<Checkbox
                      status={checked ? 'checked' : 'unchecked'}
                      
                      color={theme.colors.primary}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />)
                  }
                  <Text>Remember Me?</Text>
                </View>
              <TouchableOpacity onPress={()=> navigation.navigate('ForgotPassword')}>
                <Text style={styles.link}>Forgot Password?</Text>
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
           
            {isBiometricSupported ? (
              <View >
                <View style={styles.row}>
                  <Text style={{marginVertical:10, color:theme.colors.secondary}}>OR</Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.row} onPress={handleBiometricAuth}>
                    <IoIcon name="finger-print-outline" color={theme.colors.primary} size={20} style={{marginRight:10}} />
                    <Text style={styles.label}>Tap to sign in with biometric</Text>
                  </TouchableOpacity>
                </View>
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
