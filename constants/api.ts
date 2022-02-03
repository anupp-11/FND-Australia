
export enum API{
    MOCK="MOCK",
    SERVER="SERVER"
    
}
export const API_TYPE = API.SERVER;

export const BASE_URL ="http://ec2-44-200-60-14.compute-1.amazonaws.com:8080";

export const USER_ADD = "/UserInfo/add";
export const USER_EDIT = "/UserInfo/edit";
export const USER_GET = "/UserInfo/get-by-userid/";
export const USER_DELETE = "/UserInfo/delete";

export const LOGIN_API = "/User/authenticate";
export const REGISTER_API = "/User/register";
export const ADD_USER_URL = `${BASE_URL}${USER_ADD}`;
export const UPDATE_USER_URL = `${BASE_URL}${USER_EDIT}`;
export const LOGIN_URL = `${BASE_URL}${LOGIN_API}`;
export const REGISTER_URL = `${BASE_URL}${REGISTER_API}`;


// export const ACCOUNT_PRODUCT_URL = `${BASE_URL}${PRODUCT_API}/${ACCOUNT_ID}`;
// export const ACCOUNT_URL = `${BASE_URL}${ACCOUNT_API}/${ACCOUNT_ID}`;
// export const ORDER_URL = `${BASE_URL}${ORDER_API}/${ACCOUNT_ID}`;
// export const CAROUSEL_URL = `${BASE_URL}${CAROUSEL_API}/${ACCOUNT_ID}${DEVICE_TYPE}`;