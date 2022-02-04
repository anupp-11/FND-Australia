import axios from "axios";
import { ADD_USER_URL, API, API_TYPE, GET_USER_URL, LOGIN_URL, REGISTER_URL, UPDATE_USER_URL } from "../constants/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthUserInfo, RegUserInfo, UserInfo } from "../models/BaseModel";

// const MOOD_VALUE = `MOOD_VALUE`;
// const MOOD_TEXT = `MOOD_TEXT`;
// const SLEEP_QUALITY_VALUE = `SLEEP_QUALITY_VALUE`;
// const SLEEP_QUALITY_TEXT = `SLEEP_QUALITY_TEXT`;
// const STRESS_LEVEL_VALUE = `STRESS_LEVEL_VALUE`;
// const STRESS_LEVEL_TEXT= `STRESS_LEVEL_TEXT`;
// const PWR_VALUE = `PWR_VALUE`;
// const PWR_TEXT = `PWR_TEXT`;
// const SLEEP_DURATION_VALUE = `SLEEP_DURATION_VALUE`;
// const SLEEP_DURATION_TEXT = `SLEEP_DURATION_TEXT`;
// const PAL_VALUE = `PAL_VALUE`;
// const PAL_TEXT = `PAL_TEXT`;
// const DA_TEXT = `DA_TEXT`;


export async function saveDataToDevice(value,STORAGE) { 
  await AsyncStorage.setItem(STORAGE, JSON.stringify(value));
  return value;
}

export async function getDataFromDevice(STORAGE) {
  const value = await AsyncStorage.getItem(STORAGE);
  if (value) {
    var val = JSON.parse(value) as String;
    return val;
  }
}


