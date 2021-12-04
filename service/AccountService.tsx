import axios from "axios";
import { ACCOUNT_URL, API, API_TYPE } from "../constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Address, Status } from "../models/BaseModel";

// export async function getAccount() {
//    console.log(ACCOUNT_URL);
//     if(API_TYPE == API.SERVER){
//         const response = await axios.get<Account>(ACCOUNT_URL);
          
//         await setData(response.data);
      
//         return response.data;
//     }else{

//         return await getFakeAccount();
//     }
  
// }

// async function setData(data: Account) {
//   await AsyncStorage.setItem("ACCOUNT_NAME", data.name);
//   await AsyncStorage.setItem("ACCOUNT_LOGO_URL", data.logoUrl);
//   await AsyncStorage.setItem("ACCOUNT_STATUS", data.status);
// }

// export async function getFakeAccount() {
//   var data = JSON.parse(
//     '{"name":"NCD Warehouse","id":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","phoneNumber":"8657385477","logoUrl":"https://s3.amazonaws.com/static.ahaorders.com/accounts/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/2020/12/16/8c8d7f77-ebce-4b85-b5dd-3dfbe013b0bc-logo.png","status":"ACTIVE","createdById":"941e25b9-9ea4-42ea-f845-08d88f08f815","createdAt":"2020-12-15T21:58:53.903-06:00","lastUpdatedAt":"2020-12-15T22:01:10.451-06:00"}'
//   );
//   await setData(data);
//   return data;
// }
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
// export async function getAccountName() {
//   var accountName = await AsyncStorage.getItem("ACCOUNT_NAME");
//   console.log(accountName);
//   return accountName;
// }

// export async function getAccountLogo() {
//   var accountLogoUrl = await AsyncStorage.getItem("ACCOUNT_LOGO_URL");
//   console.log(accountLogoUrl);
//   return accountLogoUrl;
// }

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


