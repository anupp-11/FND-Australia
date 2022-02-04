import axios from "axios";
import { SMP_ADD_URL, SMP_GET_ALL_URL, SMR_ADD_URL, SMR_FORM_GETALL, SMR_GET_ALL_URL } from "../constants/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthUserInfo, SMPFormModel, SMRForm, UserInfo } from "../models/BaseModel";
import { getUserFromDevice } from "./AccountService";
import SMPForm from "../screens/Forms/SMPForm";

const USERDATA_STORAGE = `USERDATA_STORAGE`;
const USERINFO_STORAGE = `USERINFO_STORAGE`;

export async function smrFormAdd(formData : SMRForm) {
    const user = await getUserFromDevice();
    const token = user?.jwtToken;
    debugger;
    const response = await axios.post<SMRForm>(SMR_ADD_URL, formData, 
        { 
          headers: {
              "Authorization": `Bearer ${token}`
            }
        });
      debugger;
      return response.data;
}

export  async  function getSmrForm(userId: string){
    const user = await getUserFromDevice();
    const token = user?.jwtToken;
    let url = `${SMR_GET_ALL_URL}/${userId}`;
    debugger;
    const requestOptions = {
        method: 'POST',
        headers: { "Authorization": `Bearer ${token}` }
      };
      const response = await fetch(url,requestOptions);
      const data = await response.json();
      
      debugger;
      return data.result;
  }


  export async function smpFormAdd(formData : SMPFormModel) {
    const user = await getUserFromDevice();
    const token = user?.jwtToken;
    debugger;
    const response = await axios.post<SMPFormModel>(SMP_ADD_URL, formData, 
        { 
          headers: {
              "Authorization": `Bearer ${token}`
            }
        });
      debugger;
      return response.data;
}

export  async  function getSmpForm(userId: string){
    const user = await getUserFromDevice();
    const token = user?.jwtToken;
    let url = `${SMP_GET_ALL_URL}/${userId}`;
    debugger;
    const requestOptions = {
        method: 'POST',
        headers: { "Authorization": `Bearer ${token}` }
      };
      const response = await fetch(url,requestOptions);
      const data = await response.json();
      
      debugger;
      return data.result;
  }