import AsyncStorage from "@react-native-async-storage/async-storage";
import { EventRegister } from "react-native-event-listeners";
import { CustomerInfo } from "../models/BaseModel";
import { Product } from "./ProductService";

const CART_STORAGE = `CART_STORAGE`;
const CUSTOMER_INFO_STORAGE = 'CUSTOMER_INFO_STORAGE';

export async function addToCart(product: Product, quantity) {
 
  let cart = await getCart();
  product.cartQuantity = quantity;
  if (!cart) {
    cart = new Cart([]);
  }
  var insideProduct = cart.products.find(x => x.productId == product.productId);
 
  if(insideProduct){
   insideProduct.cartQuantity = quantity;

  }else{
    cart.products.push(product);
  }
  
  
  await AsyncStorage.setItem(CART_STORAGE, JSON.stringify(cart));
  EventRegister.emit('cartUpdated', cart.products.length)
  return cart;
}

export async function clearCart(){

  const cart = new Cart([]);
  await AsyncStorage.setItem(CART_STORAGE, JSON.stringify(cart));
  EventRegister.emit('cartUpdated', cart.products.length)
  return cart;
}


export async function removeCart(product: Product){

  const cart = await getCart();
  if(cart){
    cart.products = cart.products.filter(x => x.productId  !== product.productId);
    
  }
  await AsyncStorage.setItem(CART_STORAGE, JSON.stringify(cart));
  EventRegister.emit('cartUpdated', cart.products.length)
  return cart;
}


export async function getCart() {
  const cartString = await AsyncStorage.getItem(CART_STORAGE);
  
  if (cartString) {
    try{
      const cart = JSON.parse(cartString) as Cart;
      if(!cart.products)
         return null;
     
      return cart;
    }catch(e){
        return null;
    }
   
  } else {
    return null;
  }
}

export async function getOrderTotal(){
   const cart = await getCart();
   
    var total = 0.0;
    var totalP = 0.0;
    if (cart) {
      cart.products.forEach( (ele: Product) => {
        if(ele.type == "Default"){
          totalP = ele.price * ele.cartQuantity;
        }else{
          const price = getPrice(ele);
          totalP = price * ele.cartQuantity;
        }
        total += totalP;
      });
    }
    return total;
  
}

export async function getCartCount(){
  var cart = await getCart();
  if(cart){
    return cart.products.length;
  }else{
    return 0;
  }
}

export async function getCartCountTitle(){
  const items = await getCartCount();
  if(items === 0){
    return `Cart`;
  }else if(items === 1){
    return `Cart (${items} item)`;
  }else {
  return `Cart (${items} items)`;
  }
}

export async function getCustomerInfo(){
  const customerString = await AsyncStorage.getItem(CUSTOMER_INFO_STORAGE);

  if (customerString) {
    const info = JSON.parse(customerString) as CustomerInfo;
   
    return info;
  } else {
    return null;
  }
}

function getPrice(product: Product) {
  let qty = product.cartQuantity;
  let prices = product.productPrices;
  const price = prices.find(x => x.from <= qty && x.to >= qty);
  if(price){
    return price.price;
  }
  else{
    var tos = prices.map(val => val.to);
    var maxTo = Math.max.apply(null, tos);
    if(qty>maxTo){
      var minPrice = prices.find(x => x.to == maxTo);
      return minPrice.price;
    }
    else{
      return "Request Price";
    }
  }
  
}

export async function updateCustomerInfo(customerInfo: CustomerInfo){

  await AsyncStorage.setItem(CUSTOMER_INFO_STORAGE, JSON.stringify(customerInfo));
}




export class Cart {
  constructor(public products: Product[]) {}
}


