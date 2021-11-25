import React from "react";
import { View } from "react-native";
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";
import { PRIMARY_COLOR } from "../constants/Colors";
import AppProgressBar from "./ProgressBar";

export default function ProgressDialog({
  showDialog,
}: {
  showDialog: boolean;
}) {
  return (
    
      <Portal  >
        <Dialog visible={showDialog} style={{ backgroundColor: 'transparent'}}>
          <Dialog.Content style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
              <View style={{backgroundColor: 'white', padding: 10}}>
              <AppProgressBar />
              </View>
            
          </Dialog.Content>
        </Dialog>
      </Portal>
    
  );
}
