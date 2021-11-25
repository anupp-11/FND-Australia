import axios from "axios";
import {
  ACCOUNT_PRODUCT_URL,
  API,
  API_TYPE,
  ORDER_URL,
} from "../constants/api";
import { Cart, getCart, getCustomerInfo } from "./CartService";
import { getDeviceIdentity } from "./DeviceService";
import { Product, getProductForAccountFake } from "./ProductService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BaseModel, CustomerInfo, OrderStatus, OrderStatusModel } from "../models/BaseModel";

const ORDER_STORAGE = `ORDER_STORAGE`;
export async function placeOrder() {
  debugger;
  var cart = await getCart();
  var customerInfo = await getCustomerInfo();
  var device = getDeviceIdentity();
  console.log("TO be Response :", cart?.products, customerInfo, device);

  if (API_TYPE == API.SERVER) {
    const response = await axios.post<OrderModel>(ORDER_URL, {
      products: cart?.products,
      customerInfo: customerInfo,
      device: device,
    });
    
    console.log("Place vako order :", response.data);
    saveOrderToDevice(response.data);
    return response.data;
  } else {
    return null;
  }
}

export async function getOrderAsync(orderId: string){

  if (API_TYPE == API.SERVER) {
    const response = await axios.get<OrderModel>(`${ORDER_URL}/${orderId}`);
    saveOrderToDevice(response.data);
    return response.data;
  } else {
    return null;
  }
}

export async function saveOrderToDevice(orderModel: OrderModel) {
 
  var storage = await getOrdersFromDevice();
  let findOrder = storage.orders.find(x => x.id == orderModel.id);
  if(findOrder){
    findOrder = orderModel;
  }else{
    storage.orders.push(orderModel);
  }
    
  await AsyncStorage.setItem(ORDER_STORAGE, JSON.stringify(storage));
  return storage;
}

export async function getOrdersFromDevice() {
  const orderString = await AsyncStorage.getItem(ORDER_STORAGE);
  if (orderString) {
    var orders = JSON.parse(orderString) as OrderStorageModel;
    return orders;
  }
  return new OrderStorageModel([]);
}

export class OrderModel extends BaseModel {
  constructor(
    public customerInfo: CustomerInfo,
    public products: Product[],
    public email: string,
    public device: string,
    public orderStatus: OrderStatusModel
  ) {
    super();
    
  }
}

class OrderStorageModel {
  constructor(public orders: OrderModel[]) {}
}
