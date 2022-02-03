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
export class SMRForm{
  constructor(
    public dateOfSeizure:Date,
    public timeOfSeizure: Date,
    public whatDoingSeizureStarted:string,
    public howFeelingSeizureStarted: string[],
    public howFeelingSeizureStartedText: string,
    public actionsTaken: string[],
    public actionsTakenText: string,
    public seizurePresent : string[],
    public seizurePresentText : string,
    public seizureResolve : string,
    public feelAfterSeizure : string[],
    public feelAfterSeizureText : string,
    public emergencyService : string,
    
  ){}

}
export class SMPFormModel{
  constructor(
    public dateOfBirth:Date,
    public dateOfPlan: Date,
    public onMedication:string,
    public medication: string,
    public medicalConditions: string[],
    public medicalHistory: string,
    public warningSigns: string[],
    public warningSignText: string,
    public seizureType : string,
    public seizureTypeText : string,
    public seizurePresent : string[],
    public seizurePresentText : string,
    public durationOfSeizure : string,
    public frequencyOfSeizure : string,
    public assistanceRequired : string[],
    public assistanceRequiredText : string,
    public notDo : string[],
    public notDoText : string,
    public needAfterSeizure : string,
    public needAfterSeizureText : string,
    public ambulanceNeeded : string[],
    public ambulanceNeededText : string,
  ){}

}

// public string Id { get; set; }
// public User User { get; set; }
// public string Phone { get; set; }


// public string Gender { get; set; }
// public Contact EmergencyEontact { get; set; }
// public Contact DoctorDetail { get; set; }

export class UserInfo{
    constructor(
      public user:AuthUserInfo,
      public phone:string,
      public DOB:Date,
      public gender: string,
      public emergencyEontact:Contact,
      public doctorDetail: Contact,
    ){}
  
  }

  
export class AuthUserInfo{
  constructor(
    public name:string,
    public email:string,
    public password:string,
    public jwtToken:string,
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

  export class Contact{
    constructor(
      public name:string,
      public relationship: string,
      public profession: string,
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