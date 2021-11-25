import { Address, OrderStatus, OrderStatusModel } from "../models/BaseModel";
import { OrderModel } from "./OrderService";
import {Text} from 'react-native';
import moment from "moment";
import * as React from 'react';
import { add } from "react-native-reanimated";


export function returnOrderStatus(order: OrderModel){
      if(!order.orderStatus ||  typeof order !== "object")
          return "Status Unavailable";

     if(order.orderStatus.cancelled)
     {
         return "Cancelled";
     }else if(order.orderStatus.delivered){
         return "Delivered";

     }else if(order.orderStatus.outForDelivery){
        return "Out For Delivery";

    }else if(order.orderStatus.inProgress){
        return "In Progress";

    }else {
        return "Submitted";

    }
}

 function getMessage(model: OrderStatus){
     if(model.customerMessage){
         return `Message: ${model.customerMessage}`;
     }

 }
 function dateSortFunction(a: any,b: any){  
    var dateA = new Date(a.time).getTime();
    var dateB = new Date(b.time).getTime();
    return dateA > dateB ? 1 : -1;  
}; 
 export function returnOrderStatusTimeLineTextView(order: OrderModel){
   var timeline = returnOrderStatusTimeLine(order);
   timeline.sort(dateSortFunction);
   return timeline.map((data, index) => <Text key={index}>{data.title} on {moment(data.time).format("MMMM Do YYYY")}</Text>);
 }

export function returnOrderStatusTimeLine(order: OrderModel){
    if(!order.orderStatus ||  typeof order !== "object")
        return [];
    let events = [];
    if(order.orderStatus.cancelled)
    {
        events.push({
            time: order.orderStatus.cancelled.createdDate,
             title: 'Cancelled',
              description: `Order has been Cancelled. ${getMessage(order.orderStatus.cancelled)}`
            });

    }else if(order.orderStatus.delivered){
        events.push({
            time: order.orderStatus.delivered.createdDate,
             title: 'Delivered',
              description: `Order has been Delivered. ${getMessage(order.orderStatus.delivered)}`
            });
    }else if(order.orderStatus.outForDelivery){
        events.push({
            time: order.orderStatus.outForDelivery.createdDate,
             title: 'Out For Delivery',
              description: `Order is out for delivery. ${getMessage(order.orderStatus.outForDelivery)}`
            });

   }else if(order.orderStatus.inProgress){
    events.push({
        time: order.orderStatus.inProgress.createdDate,
         title: 'In Progress',
          description: `Order is in Progress. ${getMessage(order.orderStatus.inProgress)}`
        });

   }else {
    events.push({
        time: order.orderStatus.submitted.createdDate,
         title: 'Submitted',
          description: `Order has been Submitted. ${getMessage(order.orderStatus.submitted)}`
        });

   }
 
   return events;
}

export function generateAddressString(address: Address){
  var addressString = "";
  if(address !== null){
      addressString = `${address.street1}`;

      if(address.street2){
        addressString += `\n${address.street2}`;
      }

      addressString += `\n${address.city}, ${address.state} ${address.zipCode}`;

      if(address.zipCodeExtension)
      {
          addressString += `-${address.zipCodeExtension}`;
      }
  }



  return addressString;

}

