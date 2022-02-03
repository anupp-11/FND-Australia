import axios from "axios";
import { ADD_USER_URL, API, API_TYPE, LOGIN_URL, REGISTER_URL, UPDATE_USER_URL } from "../constants/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthUserInfo, UserInfo } from "../models/BaseModel";

const USERDATA_STORAGE = `USERDATA_STORAGE`;
const USERINFO_STORAGE = `USERINFO_STORAGE`;

export async function authUser(email:string, pass:string) {
  debugger;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password:pass })
  };
  debugger;
  const response = await fetch(LOGIN_URL, requestOptions);
  debugger;
  const data = await response.json();
  
    debugger;
   
    return data;
}

export async function registerUser(userInfo : AuthUserInfo) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo)
  };
  debugger;
  const response = await fetch(REGISTER_URL, requestOptions);
  const data = await response.json();
  debugger;
  return data;
 
}

export async function updateUserInfo(userInfo : UserInfo) {

  const user = await getUserFromDevice();
  const token = user?.jwtToken;
  debugger;
  const response = await axios.post<UserInfo>(ADD_USER_URL, userInfo, 
    { 
      headers: {
          "Authorization": `Bearer ${token}`
        }
    });
  debugger;
  return response.data;
}

export async function updateExistingUserInfo(userInfo : UserInfo,userId) {

  const user = await getUserFromDevice();
  const token = user?.jwtToken;
  debugger;
  const response = await axios.post<UserInfo>(`${UPDATE_USER_URL}/${userId}`, userInfo, 
    { 
      headers: {
          "Authorization": `Bearer ${token}`
        }
    });
  debugger;
  return response.data;
}

export async function saveUserToDevice(authDetail: AuthUserInfo) { 
  await AsyncStorage.setItem(USERDATA_STORAGE, JSON.stringify(authDetail));
 
  return authDetail;
}

export async function getUserFromDevice() {
  const userString = await AsyncStorage.getItem(USERDATA_STORAGE);
  if (userString) {
    var user = JSON.parse(userString) as AuthUserInfo;
    debugger;
    return user;
  }
}

export async function saveUserInfoToDevice(userInfo: UserInfo) { 
  await AsyncStorage.setItem(USERINFO_STORAGE, JSON.stringify(userInfo));
  debugger;
  return userInfo;
}

export async function getUserInfoFromDevice() {
  const userString = await AsyncStorage.getItem(USERINFO_STORAGE);
  if (userString) {
    var user = JSON.parse(userString) as UserInfo;
    debugger;
    return user;
  }
}

