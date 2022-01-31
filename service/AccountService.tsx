import axios from "axios";
import { ACCOUNT_URL, API, API_TYPE } from "../constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthUserInfo } from "../models/BaseModel";


export async function authUser(email:string, pass:string) {
  debugger;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: email, password:pass })
  };
  debugger;
  const response = await fetch('https://172.18.0.3:5001/User/authenticate', requestOptions);
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
  const response = await fetch("REGISTER_URL", requestOptions);
  const data = await response.json();
  debugger;
  return data;
 
}


// export class Account {
//   constructor(
//     public name: string,
//     public id: string,
//     public phoneNumber: string,
//     public mobileNumber: string,
//     public websiteUrl: string,
//     public logoUrl: string,
//     public status: Status,
//     public email:string,
//     public billingAddress: Address
//   ) {}
// }


