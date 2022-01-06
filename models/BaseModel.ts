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

export class UserInfo{
    constructor(
      public email:string,
      public mobileNumber:string,
      public emergencyContact:EmergencyContact,
      public doctorDetail: DoctorDetail,
    ){}
  
  }

  export class EmergencyContact{
    constructor(
      public name:string,
      public relationship: string,
      public phoneNumber: string,
      public address: string,
    ){}
  }

  export class DoctorDetail{
     constructor(
      public name:string,
      public profession: string,
      public phoneNumber: string,
      public address: string,
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