
export enum API{
    MOCK="MOCK",
    SERVER="SERVER"
    
}
export const API_TYPE = API.SERVER;

export const BASE_URL ="http://ec2-44-200-60-14.compute-1.amazonaws.com:8080";

export const USER_ADD = "/UserInfo/add";
export const USER_EDIT = "/UserInfo/update";
export const USER_GET = "/UserInfo/get-by-userid";
export const USER_DELETE = "/UserInfo/delete";

export const SMR_FORM_ADD = "/SMRForm/add";
export const SMR_FORM_GETALL = "/SMRForm/get-all";
export const SMR_FORM_GETBYID = "/SMRForm/get-by-id";
export const SMR_FORM_DELETE = "/SMRForm/delete";

export const SMP_FORM_ADD = "/SMPForm/add";
export const SMP_FORM_GETALL = "/SMPForm/get-all";
export const SMP_FORM_GETBYID = "/SMPForm/get-by-id";
export const SMP_FORM_DELETE = "/SMPForm/delete";

export const DAILY_LOG_ADD = "/DailyLog/add";
export const DAILY_LOG_GETALL = "/DailyLog/get-all";
export const DAILY_LOG_GETBYID = "/DailyLog/get-by-id";
export const DAILY_LOG_DELETE = "/DailyLog/delete";

export const LOGIN_API = "/User/authenticate";
export const REGISTER_API = "/User/register";

export const ADD_USER_URL = `${BASE_URL}${USER_ADD}`;
export const UPDATE_USER_URL = `${BASE_URL}${USER_EDIT}`;
export const GET_USER_URL = `${BASE_URL}${USER_GET}`;

export const LOGIN_URL = `${BASE_URL}${LOGIN_API}`;
export const REGISTER_URL = `${BASE_URL}${REGISTER_API}`;

export const SMR_ADD_URL = `${BASE_URL}${SMR_FORM_ADD}`;
export const SMR_GET_ALL_URL = `${BASE_URL}${SMR_FORM_GETALL}`;
export const SMR_GET_ONE_URL = `${BASE_URL}${SMR_FORM_GETBYID}`;
export const SMR_DELETE_URL = `${BASE_URL}${SMR_FORM_DELETE}`;

export const SMP_ADD_URL = `${BASE_URL}${SMP_FORM_ADD}`;
export const SMP_GET_ALL_URL = `${BASE_URL}${SMP_FORM_GETALL}`;
export const SMP_GET_ONE_URL = `${BASE_URL}${SMP_FORM_GETBYID}`;
export const SMP_DELETE_URL = `${BASE_URL}${SMP_FORM_DELETE}`;

export const DAILY_LOG_ADD_URL = `${BASE_URL}${DAILY_LOG_ADD}`;
export const DAILY_LOG_GET_ALL_URL = `${BASE_URL}${DAILY_LOG_GETALL}`;
export const DAILY_LOG_GET_ONE_URL = `${BASE_URL}${DAILY_LOG_GETBYID}`;
export const DAILY_LOG_DELETE_URL = `${BASE_URL}${DAILY_LOG_DELETE}`;