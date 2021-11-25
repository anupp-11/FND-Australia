import { Product } from './../service/ProductService';


export enum Status {
    ACTIVE = "ACTIVE",
  }
  export enum OrderStatusType{
    SUBMITTED ="SUBMITTED",
    INPROGRESS ="INPROGRESS",
    CANCELLED ="CANCELLED",
    OUTFORDELIVERY ="OUTFORDELIVERY",
    DELIVERED ="DELIVERED"
  }

export abstract class BaseModel{
    public createdByName!: string;
    public createdDate!: Date;
    public createdOn!: string;
    public id!: string;
    public lastUpdatedByDate!: Date;
    public lastUpdatedByName!: string;
    public objectPath!: string;
    public partitionKey!: string;
    public status!: Status;

}

export class CustomerInfo{
    constructor(
      public customerFullName:string,
      public storeName:string,
      public street1:string,
      public street2: string,
      public city: string,
      public stateCode: string,
      public zipCode: string,
      public comments: string,
      public email: string,
      public phoneNumber : string
  
    ){}
  
  }

  export class Address{
    constructor(
     
      public street1:string,
      public street2: string,
      public city: string,
      public state: string,
      public zipCode: string,
      public zipCodeExtension: string,
    
  
    ){}
  }

  export class OrderStatusModel{
     constructor(
      public submitted: OrderStatus,
      public inProgress: OrderStatus,
      public cancelled: OrderStatus,
      public outForDelivery: OrderStatus,
      public delivered: OrderStatus
     ){}
  }

  export class OrderStatus{

    constructor(
        public createdByName: string,
        public createdDate: Date,
        public orderStatusType: OrderStatusType,
        public internalMessage: string,
        public customerMessage: string
    ){}
  }