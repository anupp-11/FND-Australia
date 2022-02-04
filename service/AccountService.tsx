import axios from "axios";
import { ADD_USER_URL, API, API_TYPE, GET_USER_URL, LOGIN_URL, REGISTER_URL, UPDATE_USER_URL } from "../constants/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthUserInfo, LoginDetail, RegsUserInfo, RegUserInfo, UserInfo } from "../models/BaseModel";

const USERDATA_STORAGE = `USERDATA_STORAGE`;
const USERINFO_STORAGE = `USERINFO_STORAGE`;
const LOGIN_DETAIL_STORAGE = `LOGIN_DETAIL_STORAGE`;

export async function authUser(email:string, pass:string) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password:pass })
  };
  const response = await fetch(LOGIN_URL, requestOptions);
  debugger;
  const data = await response.json();
  debugger;
  return data.value;
}

export async function registerUser(userInfo : RegUserInfo) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo)
  };
  const response = await fetch(REGISTER_URL, requestOptions);
  debugger;
  const data = await response.json();
  debugger;
  return data;
 
}

export async function updateUserInfo(userInfo : RegsUserInfo) {
  const user = await getUserFromDevice();
  const token = user?.jwtToken;
  debugger;
  const response = await axios.post<RegsUserInfo>(ADD_USER_URL, userInfo, 
    { 
      headers: {
          "Authorization": `Bearer ${token}`
        }
    });
  debugger;
  return response.data;
}

export async function updateExistingUserInfo(userInfo : UserInfo) {

  const user = await getUserFromDevice();
  const token = user?.jwtToken;
  debugger;
  
  const response = await axios.post<UserInfo>(UPDATE_USER_URL, userInfo, 
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
    return user;
  }
}

export async function saveUserInfoToDevice(userInfo: UserInfo) { 
  await AsyncStorage.setItem(USERINFO_STORAGE, JSON.stringify(userInfo));
  return userInfo;
}

export async function getUserInfoFromDevice() {
  const userString = await AsyncStorage.getItem(USERINFO_STORAGE);
  if (userString) {
    var user = JSON.parse(userString) as UserInfo;
    return user;
  }
}

export async function getUserInfo(userId) {

  const user = await getUserFromDevice();
  const token = user?.jwtToken;
  const url = `${GET_USER_URL}/${userId}`;
  debugger;
  const requestOptions = {
    method: 'POST',
    headers: { "Authorization": `Bearer ${token}` }
  };
  const response = await fetch(url,requestOptions);
  const data = await response.json();
  if(data?.result){
    await saveUserInfoToDevice(data.result);
  }
  debugger;
  return data.result;
}

export async function saveLoginDetails(loginDetail: LoginDetail) { 
  await AsyncStorage.setItem(LOGIN_DETAIL_STORAGE, JSON.stringify(loginDetail));
  debugger;
  return loginDetail;
}
export async function getLoginDetailFromDevice() {
  debugger;
  const loginDetailResp = await AsyncStorage.getItem(LOGIN_DETAIL_STORAGE);
  if (loginDetailResp) {
    var loginDetail = JSON.parse(loginDetailResp) as LoginDetail;
    return loginDetail;
  }
 // return new OrderStorageModel([]);
}
