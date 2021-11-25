import { hide } from "expo-splash-screen";
import React from "react";
import { View } from "react-native";
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";
import { PRIMARY_COLOR } from "../constants/Colors";


export default function MessageDialog({showDialog, title, message, hideDialog}:{showDialog:boolean}){

    return(
       
            
            <Portal>
              <Dialog visible={showDialog}>
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>{message}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button
                    onPress={hideDialog}
                    labelStyle={{ color: PRIMARY_COLOR }}
                  >
                    Ok
                  </Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
      
    );
}