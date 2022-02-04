

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
    public user:AuthUserInfo,
    public dateOfSeizure:Date,
    public timeOfSeizure: Date,
    public whatDoingSeizureStarted:string,
    public howFeelingSeizureStarted: string[],
    public howFeelingSeizureStartedText: string,
    public actionTaken: string[],
    public actionTakenText: string,
    public seizurePresent : string[],
    public seizurePresentText : string,
    public seizureResolve : string,
    public feelingAfterSeizure : string[],
    public feelingAfterSeizureText : string,
    public emergencyService : string,
    
  ){}

}
export class SMPFormModel{
  constructor(
    public user:AuthUserInfo,
    public dateOfBirth:Date,
    public dateOfPlan: Date,
    public onMedication:string,
    public medication: string,
    public medicalConditions: string[],
    public medicalHistory: string,
    public warningSigns: string[],
    public warningSignsText: string,
    public seizureType : string,
    public seizureTypeText : string,
    public seizurePresent : string[],
    public seizurePresentText : string,
    public durationOfSeizure : string,
    public frequency: string,
    public frequencyUnit: string,
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

export class UserInfo{
    constructor(
      public id : string,
      public user:AuthUserInfo,
      public phone:string,
      public DOB:Date,
      public gender: string,
      public emergencyEontact:Contact,
      public doctorDetail: Contact,
    ){}
  
  }

  export class RegsUserInfo{
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
export class RegUserInfo{
  constructor(
    public name:string,
    public email:string,
    public password:string,
  ){}

}

  export class EmergencyContact{
    constructor(
      public name:string,
      public relationship: string,
      public phone: string,
      public address: string,
    ){}
  }

  export class Contact{
    constructor(
      public name:string,
      public relationship: string,
      public profession: string,
      public phone: string,
      public address: string,
    ){}
  }

  export class DoctorDetail{
     constructor(
      public name:string,
      public profession: string,
      public phone: string,
      public address: string,
     ){}
  }

  export class DailyLogModel{
    constructor(
      public user:AuthUserInfo,
      public createdAt : Date,
      public moodValue:string,
      public moodText: string,
      public sleepQualityValue: string,
      public sleepQualityText: string,
      public stressLevelValue:string,
      public stressLevelText: string,
      public pwrValue: string,
      public pwrText: string,
      public sleepDurationValue:string,
      public sleepDurationText: string,
      public palValue: string,
      public palText: string,
      public dailyAchievementText: string,
    ){}
 }

 export class LoginDetail {
  constructor(
    public email:string,
    public password:string,
    public checked:Boolean
  ) {}
}