import * as Device from 'expo-device';


export function getDeviceIdentity(){
  
    return `${Device.osName}::${Device.modelName}::${Device.productName}`.toUpperCase();

}