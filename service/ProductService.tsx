import  axios from 'axios'
import { ACCOUNT_PRODUCT_URL, API, API_TYPE } from '../constants/api';


export  async  function getProductsForAccount(searchValue: string, isBarCode: boolean){
  let  url = ACCOUNT_PRODUCT_URL;
  if(API_TYPE == API.SERVER){
   
    if(isBarCode){
      url = `${url}?barCode=${searchValue}`;
    }else{
      if(searchValue){
        url = `${url}?searchValue=${searchValue}`;
      }
     
    }
   

    console.log("My URL",url);
    const response = await axios.get<Product[]>(
      url,
    );
      //console.log("Data : ", response.data);
    return response.data;
  }else{
    
      return  await getFakeProducts();
  }
   
  

}

export  async  function getProductsByCategory(categoryId: string){
  let  url = ACCOUNT_PRODUCT_URL;
  if(API_TYPE == API.SERVER){
   
    if(categoryId){
      url = `${url}/category/${categoryId}`;
    }
     
  
   

    console.log("My URL",url);
    const response = await axios.get<Product[]>(
      url,
    );
      //console.log("Data : ", response.data);
    return response.data;
  }else{
    
      return  await getFakeProducts();
  }
   
  

}

export  async  function getProductForAccount(productId: string){

  if(API_TYPE == API.SERVER){
    const response = await axios.get<Product>(
      ACCOUNT_PRODUCT_URL+"/"+ productId,
    );
  
    return response.data;
  }else{
      return await getProductForAccountFake(productId);
  }
  


}



export  async  function getProductForAccountFake(productId: string){

   return JSON.parse('{"productId":"001c7c95-d247-4167-8345-9a219bff4c32","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"5 Hour Energy Extra Strength Grape","images":["https://s3.amazonaws.com/static.ahaorders.com/products/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/001c7c95-d247-4167-8345-9a219bff4c32/2020/12/17/a9edd23c-f7e5-4d69-b90e-6f2e73d1f5a7-ip002592.jpg","https://s3.amazonaws.com/static.ahaorders.com/products/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/001c7c95-d247-4167-8345-9a219bff4c32/2020/12/17/0dbb1973-2d6e-43aa-82b6-12071fbf3dda-ip002591.jpg","https://s3.amazonaws.com/static.ahaorders.com/products/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/001c7c95-d247-4167-8345-9a219bff4c32/2020/12/17/96821ccd-c387-44ef-8dd3-9cb9955b71ff-ip002589.jpg","https://s3.amazonaws.com/static.ahaorders.com/products/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/001c7c95-d247-4167-8345-9a219bff4c32/2020/12/17/8edbd42f-25e8-4594-aca7-87c2f76ca818-ip002588.jpg"],"productDescription":"Decoration: Man Cave, office, basement, garage, college dorm, childrens room, games room, bar, coffee shop. Can be used for wedding, birthday or any kind of event gifts or as collectibles.","barCode":["719000000000"],"categoryName":"General Merchandise Products","sizes":[{"id":"37965dd1-562a-4b11-be09-eb405a8a3a8a","name":"1pc","description":""}],"isDeleted":false,"isActive":true,"price":100.01,"lastUpdatedByName":"hiteshbhattarai60@gmail.com","lastUpdatedById":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","lastUpdatedByDate":"2020-12-18T03:49:04.4907488Z"}');


}


 function getFakeProducts(){

  return JSON.parse('[{"productId":"001c7c95-d247-4167-8345-9a219bff4c32","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"5 Hour Energy Extra Strength Grape","images":["https://s3.amazonaws.com/static.ahaorders.com/products/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/001c7c95-d247-4167-8345-9a219bff4c32/2020/12/17/a9edd23c-f7e5-4d69-b90e-6f2e73d1f5a7-ip002592.jpg","https://s3.amazonaws.com/static.ahaorders.com/products/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/001c7c95-d247-4167-8345-9a219bff4c32/2020/12/17/0dbb1973-2d6e-43aa-82b6-12071fbf3dda-ip002591.jpg","https://s3.amazonaws.com/static.ahaorders.com/products/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/001c7c95-d247-4167-8345-9a219bff4c32/2020/12/17/96821ccd-c387-44ef-8dd3-9cb9955b71ff-ip002589.jpg","https://s3.amazonaws.com/static.ahaorders.com/products/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/001c7c95-d247-4167-8345-9a219bff4c32/2020/12/17/8edbd42f-25e8-4594-aca7-87c2f76ca818-ip002588.jpg"],"barCode":["719000000000"],"categoryName":"General Merchandise Products","sizes":[],"isDeleted":false,"isActive":true,"price":100.01,"lastUpdatedByName":"hiteshbhattarai60@gmail.com","lastUpdatedById":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","lastUpdatedByDate":"2020-12-17T06:03:14.1420488Z"},{"productId":"001dfb5c-80ad-4504-93e8-19af83961e1a","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"Backwoods Singles 24ct Russian Cream *MPI*","barCode":["71610303089"],"categoryName":"OTP Products (Other Tobacco):OTP (MSA)","sizes":[],"isDeleted":false,"isActive":true,"price":50.1,"lastUpdatedByName":"hiteshbhattarai60@gmail.com","lastUpdatedById":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","lastUpdatedByDate":"2020-12-16T20:11:58.1678046Z"},{"productId":"0022cf4a-97f6-4a99-9dbd-99d96e4cad06","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"Fortuna Blue 100","barCode":["90600301904"],"categoryName":"Cigarettes","sizes":[],"isDeleted":false,"isActive":true,"price":0},{"productId":"01049130-c4b3-4fc3-8add-82aa748be1fe","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"Cherokee Menthol GOLD 100","barCode":["607000000000"],"categoryName":"Cigarettes","sizes":[],"isDeleted":false,"isActive":true,"price":0},{"productId":"01b72144-b900-483a-8636-ac85be0dc612","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"Fortuna Red King","barCode":["90600301386"],"categoryName":"Cigarettes","sizes":[],"isDeleted":false,"isActive":true,"price":0},{"productId":"01e7af9d-9e91-4b4e-b223-27828d259eab","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"Tweaker Energy $0.99 Berry","barCode":["895000000000"],"categoryName":"General Merchandise Products","sizes":[],"isDeleted":false,"isActive":true,"price":0},{"productId":"020b5217-6041-4a6f-a22c-618f44985cc1","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"Macanudo Miniatures Cafe (8x10) 80ct","barCode":["690000000000"],"categoryName":"OTP Products (Other Tobacco)","sizes":[],"isDeleted":false,"isActive":true,"price":0},{"productId":"001c7c95-d247-4167-8345-9a219bff4c32","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"5 Hour Energy Extra Strength Grape","images":["https://s3.amazonaws.com/static.ahaorders.com/products/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/001c7c95-d247-4167-8345-9a219bff4c32/2020/12/17/a9edd23c-f7e5-4d69-b90e-6f2e73d1f5a7-ip002592.jpg","https://s3.amazonaws.com/static.ahaorders.com/products/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/001c7c95-d247-4167-8345-9a219bff4c32/2020/12/17/0dbb1973-2d6e-43aa-82b6-12071fbf3dda-ip002591.jpg","https://s3.amazonaws.com/static.ahaorders.com/products/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/001c7c95-d247-4167-8345-9a219bff4c32/2020/12/17/96821ccd-c387-44ef-8dd3-9cb9955b71ff-ip002589.jpg","https://s3.amazonaws.com/static.ahaorders.com/products/images/e2780c38-f26e-4e60-ad0d-08d8a176e78f/001c7c95-d247-4167-8345-9a219bff4c32/2020/12/17/8edbd42f-25e8-4594-aca7-87c2f76ca818-ip002588.jpg"],"barCode":["719000000000"],"categoryName":"General Merchandise Products","sizes":[],"isDeleted":false,"isActive":true,"price":100.01,"lastUpdatedByName":"hiteshbhattarai60@gmail.com","lastUpdatedById":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","lastUpdatedByDate":"2020-12-17T06:03:14.1420488Z"},{"productId":"001dfb5c-80ad-4504-93e8-19af83961e1a","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"Backwoods Singles 24ct Russian Cream *MPI*","barCode":["71610303089"],"categoryName":"OTP Products (Other Tobacco):OTP (MSA)","sizes":[],"isDeleted":false,"isActive":true,"price":50.1,"lastUpdatedByName":"hiteshbhattarai60@gmail.com","lastUpdatedById":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","lastUpdatedByDate":"2020-12-16T20:11:58.1678046Z"},{"productId":"0022cf4a-97f6-4a99-9dbd-99d96e4cad06","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"Fortuna Blue 100","barCode":["90600301904"],"categoryName":"Cigarettes","sizes":[],"isDeleted":false,"isActive":true,"price":0},{"productId":"01049130-c4b3-4fc3-8add-82aa748be1fe","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"Cherokee Menthol GOLD 100","barCode":["607000000000"],"categoryName":"Cigarettes","sizes":[],"isDeleted":false,"isActive":true,"price":0},{"productId":"01b72144-b900-483a-8636-ac85be0dc612","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"Fortuna Red King","barCode":["90600301386"],"categoryName":"Cigarettes","sizes":[],"isDeleted":false,"isActive":true,"price":0},{"productId":"01e7af9d-9e91-4b4e-b223-27828d259eab","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"Tweaker Energy $0.99 Berry","barCode":["895000000000"],"categoryName":"General Merchandise Products","sizes":[],"isDeleted":false,"isActive":true,"price":0},{"productId":"020b5217-6041-4a6f-a22c-618f44985cc1","accountId":"e2780c38-f26e-4e60-ad0d-08d8a176e78f","partitionKey":"e2780c38-f26e-4e60-ad0d-08d8a176e78f::PRODUCTS","transactionId":"cc75b527-4a38-4933-bf89-7472f87fa01d","productName":"Macanudo Miniatures Cafe (8x10) 80ct","barCode":["690000000000"],"categoryName":"OTP Products (Other Tobacco)","sizes":[],"isDeleted":false,"isActive":true,"price":0}]');
}

export class Product{
  constructor(
      public productId: string,
      public accountId: string,
      public partitionKey: string,
      public transactionId: string,
      public productName: string,
      public images: string[],
      public productCode: string,
      public productDescription: string,
      public barCode: string[],
      public categoryId: string,
      public units: any[],
      public isDeleted: boolean,
      public isActive: boolean,
      public type : PriceType, //Default or Range ( If default Price ) (If Range Product Prices )
      public productPrices : any[],
      public price: number,
      public cartQuantity:number



  ){}
getPrice(){
  switch (this.type) {
    case PriceType.RANGE:
      return "";
      
  
    default:
    return this.price;
  }
}


}

export enum PriceType{
  DEFAULT="DEFAULT",
  RANGE="RANGE",
}
export class Size{
  constructor(
    public id:string,
    public name:string,
    public description: string
  ){

  }
}