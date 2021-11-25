import  axios from 'axios'
import { CAROUSEL_URL, API, API_TYPE } from '../constants/api';


export  async  function getCarousel(searchValue: string, isBarCode: boolean){
  let  url = CAROUSEL_URL;
  if(API_TYPE == API.SERVER){
    if(isBarCode){
      url = `${url}?barCode=${searchValue}`;
    }else{
      if(searchValue){
        url = `${url}?searchValue=${searchValue}`;
      }
    }
    const response = await axios.get<Carousel[]>(
      url,
    );
      
    return response.data;
  }else{ 
      return  await getFakeCarousel();
  }
}

export  async  function getProductForAccount(productId: string){

  if(API_TYPE == API.SERVER){
    const response = await axios.get<Carousel>(
      ACCOUNT_CATEGORY_URL+"/"+ productId,
    );
  
    return response.data;
  }else{
      return await getCarouselForAccountFake(productId);
  }
  


}



export  async  function getCarouselForAccountFake(productId: string){

   return JSON.parse('{"image":"https://s3.amazonaws.com/static.ahaorders.com/accounts/images/f7b45fcc-33a0-4067-aee3-04389f556347/2021/8/18/5b5095aa-2fc7-4b7d-b39d-a7fabc8640b5/b2b26169-9ecb-4f92-adc8-ba08362b0486.jpg","type":"web","id":"80506f7b-847f-47f5-8049-cc2409caf694","status":"ACTIVE"}');


}


 function getFakeCarousel(){

  return JSON.parse('[{"image":"https://s3.amazonaws.com/static.ahaorders.com/accounts/images/f7b45fcc-33a0-4067-aee3-04389f556347/2021/8/18/5b5095aa-2fc7-4b7d-b39d-a7fabc8640b5/b2b26169-9ecb-4f92-adc8-ba08362b0486.jpg","type":"web","id":"80506f7b-847f-47f5-8049-cc2409caf694","status":"ACTIVE"}]');
}

export class Carousel{
  constructor(
    public image : string   
  ){}

}

