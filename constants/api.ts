
export enum API{
    MOCK="MOCK",
    SERVER="SERVER"
    
}
export const API_TYPE = API.SERVER;

export const BASE_URL ="https://api.ahaorders.com";

export const ACCOUNT_ID = "f7b45fcc-33a0-4067-aee3-04389f556347";
export const PRODUCT_API = "/api/products/account";
export const ACCOUNT_API = "/api/accounts";
export const ORDER_API = "/api/orders";
export const CATEGORY_API = "/api/categories/account";
export const CAROUSEL_API = "/api/carousel/account";
export const DEVICE_TYPE = "?type=Mobile";



export const ACCOUNT_CATEGORY_URL = `${BASE_URL}${CATEGORY_API}/${ACCOUNT_ID}`;
export const ACCOUNT_PRODUCT_URL = `${BASE_URL}${PRODUCT_API}/${ACCOUNT_ID}`;
export const ACCOUNT_URL = `${BASE_URL}${ACCOUNT_API}/${ACCOUNT_ID}`;
export const ORDER_URL = `${BASE_URL}${ORDER_API}/${ACCOUNT_ID}`;
export const CAROUSEL_URL = `${BASE_URL}${CAROUSEL_API}/${ACCOUNT_ID}${DEVICE_TYPE}`;