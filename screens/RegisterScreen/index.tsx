import {useNavigation} from '@react-navigation/native';
import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator} from 'react-native';
import BackButton from '../../components/LoginComponents/BackButton';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import TextInput from '../../components/LoginComponents/TextInput';
import {theme} from '../../components/LoginComponents/theme';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../../components/LoginComponents/utils';
import Button from '../../components/LoginComponents/Button';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import {TextInput as TextInputP} from 'react-native-paper';
import { AuthUserInfo, Contact, RegsUserInfo, RegUserInfo, UserInfo } from '../../models/BaseModel';
import { registerUser, saveUserInfoToDevice, updateUserInfo } from '../../service/AccountService';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const Login = () => {
    navigation.navigate('Login');
  };

  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [hidePass, setHidePass] = useState(true);
  const [isProcessing, setisProcessing ] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const _onSignUpPressed = async () => {
    setisProcessing(true);
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    
    const userInfo = new RegUserInfo(
      name.value,
      email.value,
      password.value,
    );
    try {
      const response = await registerUser(userInfo);
      setisProcessing(false);
      debugger;
      if(response?.isError){
        setErrorMessage(response.message);
        Alert.alert(response.message);
        navigation.navigate('Register');
      }
      else{
        
        Alert.alert("Registration Successful");
        navigation.navigate('Login');
      }
    } catch (error) {
      setisProcessing(false);
      console.log(error);
      Alert.alert("Registration Failed",error.message);
    }
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
            <Text style={styles.loginTitleText}>Sign Up</Text>
            
            {isProcessing ==true ? (
            <View>
              <ActivityIndicator size="large" color={theme.colors.primary}/> 
            </View>):(<View></View>)}
            
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                returnKeyType="next"
                value={name.value}
                onChangeText={text => setName({value: text, error: ''})}
                error={!!name.error}
                errorText={name.error}
              />
            </View>
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
             
            </View>

           
              

            <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
              Sign Up
            </Button>

            <View style={styles.row}>
              <Text style={styles.label}>Already have an account? </Text>
              <TouchableOpacity onPress={Login}>
                <Text style={styles.link}>Sign In</Text>
              </TouchableOpacity>
            </View>                                                 
            
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection:'row',
    marginTop: 4,
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

export default memo(RegisterScreen);
