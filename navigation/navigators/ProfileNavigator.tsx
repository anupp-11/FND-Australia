import { Ionicons } from "@expo/vector-icons";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import React from "react";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import { PRIMARY_COLOR, PRIMARY_WHITE_COLOR } from "../../constants/Colors";
import SymptomMonitoringRecordScreen from "../../screens/Forms/SymptomMonitoringRecordScreen";
import ProfileScreen from "../../screens/ProfileScreen";

import { ProfileTabParamList } from "../../types";

const ProfileStack = createStackNavigator<ProfileTabParamList>();

export default function ProfileNavigator() {
  const navigation = useNavigation();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        
      />
      <ProfileStack.Screen
        name="SMRScreen"
        component={SymptomMonitoringRecordScreen}
        // options={{
          
        //   header: ({ navigation }) => {
        //     if(Platform.OS === "android"){
        //       return (
        //         <Appbar.Header style={{backgroundColor: PRIMARY_COLOR}}>
        //           <Appbar.BackAction onPress={() =>{
                     
        //               navigation.goBack();
                     
        //           }}/>
        //           <Appbar.Content title="Symptopm Monitoring Record" />
                  
        //         </Appbar.Header>
        //       );

        //     }else{
        //       return(
        //         <Appbar.Header style={{backgroundColor: PRIMARY_WHITE_COLOR}}>
        //           <Appbar.BackAction onPress={() =>{
        //              navigation.goBack()
        //           }}/>
        //           <Appbar.Content title="Symptopm Monitoring Record" />
                 
        //         </Appbar.Header>
        //       );
        //     }

           
        //   },
        
        //   transitionSpec:{
        //     open: TransitionSpecs.FadeOutToBottomAndroidSpec,
        //     close: TransitionSpecs.FadeOutToBottomAndroidSpec
        //   }
        //}}
      />
       {/* <ProfileStack.Screen
        name=""
        component={}
        options={{
          
          header: ({ navigation }) => {
            if(Platform.OS === "android"){
              return (
                <Appbar.Header style={{backgroundColor: PRIMARY_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                     
                      navigation.goBack();
                     
                  }}/>
                  <Appbar.Content title="Order Info" />
                  
                </Appbar.Header>
              );

            }else{
              return(
                <Appbar.Header style={{backgroundColor: PRIMARY_WHITE_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                     navigation.goBack()
                  }}/>
                  <Appbar.Content title="Order Info" />
                 
                </Appbar.Header>
              );
            }

           
          },
        
          transitionSpec:{
            open: TransitionSpecs.FadeOutToBottomAndroidSpec,
            close: TransitionSpecs.FadeOutToBottomAndroidSpec
          }
        }}
      />
       <ProfileStack.Screen
        name="OrderProductScreen"
        component={ProductScreen}
        options={{
          
          header: ({ navigation }) => {
            if(Platform.OS === "android"){
              return (
                <Appbar.Header style={{backgroundColor: PRIMARY_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                   
                    if(navigation.canGoBack()){
                      navigation.goBack();
                    }else{
                      navigation.navigate("OrderListScreen");
                    }
                    
                  }}/>
                  <Appbar.Content title="Previously Ordered" />
                  
                </Appbar.Header>
              );
            }else{
              return (
                <Appbar.Header style={{backgroundColor: PRIMARY_WHITE_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                     if(navigation.canGoBack()){
                      navigation.goBack();
                    }else{
                      navigation.navigate("OrderListScreen");
                    }
                  }}/>
                  <Appbar.Content title="Previously Ordered" />
                  
                </Appbar.Header>
              );
            }
            
          },
        
          transitionSpec:{
            open: TransitionSpecs.FadeOutToBottomAndroidSpec,
            close: TransitionSpecs.FadeOutToBottomAndroidSpec
          }
        }}
      /> */}
    </ProfileStack.Navigator>
  );
}
