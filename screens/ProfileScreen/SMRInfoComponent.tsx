
import React, { useRef } from "react";
import {
  StyleSheet, 
  Dimensions,
  View, Text, ScrollView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from "../../components/LoginComponents/theme";
import * as Print from 'expo-print';
import { shareAsync } from "expo-sharing";
import Button from "../../components/LoginComponents/Button";


let width = Dimensions.get("screen").width / 2;

export default class SMRInfoComponent extends React.Component{
    
  constructor(props) {
    super(props);
    this.state = {
       form : props.route.params.form
    };
  }
  componentDidMount(){
    console.log("GOt form data:",this.state.form);
  }

  arrayData(data){
    debugger;
    if(data){
      const Data = data.map(item => item).join(', ');
      debugger;
      return Data;
    }else{
      return data;
    }
  }

  getDate(dateTime: Date){
    const date = new Date(dateTime).toLocaleDateString();
    debugger;
    return date;
    
  }
  getTime(dateTime: Date){
    const time = new Date(dateTime).toLocaleTimeString();
    debugger;
    return time;
    
  }

  printToFile = async () => {
    const html = `
    <h1 style="text-align: center;">
    <strong>Seizure Monitoring Record</strong>
  </h1>
  <div style="display:flex;flex-direction:column;padding-inline:30px">
    <p >
      <strong>Date of Seizure :</strong> ${this.getDate(this.state.form.dateOfSeizure)} 
    </p>
    <p >
      <strong>Time of Seizure :</strong>  ${this.getTime(this.state.form.timeOfSeizure)}
    </p>
    
    <p style="display:flex;flex-direction:column;">
      <strong>What were you doing when Seizure started?</strong>
  ${this.state.form.whatDoingSeizureStarted}
    </p>
    
    <p style="display:flex;flex-direction:column;">
      <strong>How were you feeling before Seizure started? </strong>
  ${this.arrayData(this.state.form.howFeelingSeizureStarted)}, 
  ${this.state.form.howFeelingSeizureStartedText}
    </p>
    
     <p style="display:flex;flex-direction:column;">
      <strong>What actions were taken?</strong>
  ${this.arrayData(this.state.form.actionTaken)}, 
  ${this.state.form.actionTakenText}
    </p>
    
     <p style="display:flex;flex-direction:column;">
      <strong>How did the seizure present?</strong>
  ${this.arrayData(this.state.form.seizurePresent)}, 
  ${this.state.form.seizurePresentText}
    </p>
    
    <p style="display:flex;flex-direction:column;">
      <strong>How did the seizure resolve?</strong>
  ${this.state.form.seizureResolve}
  
    </p>
    
    <p style="display:flex;flex-direction:column;">
      <strong>How did you feel after the Seizure?</strong>
  ${this.arrayData(this.state.form.feelingAfterSeizure)}, 
  ${this.state.form.feelingAfterSeizureText}
    </p>
    
     <p style="display:flex;flex-direction:column;">
      <strong>Were emergency services involved?</strong>
  ${this.state.form.emergencyService}
 
    </p>

   
  </div>
    `;
 
    const { uri } = await Print.printToFileAsync(
      {html}
    );
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

 
  render() {
    return (
      <ScrollView >
        <View style={{padding:10}}>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <View style={styles.row}>
                <Text style={styles.title}>Date of Seizure: </Text>
                <Text style={styles.data}>{this.getDate(this.state.form.dateOfSeizure)}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Time of Seizure: </Text>
                <Text style={styles.data}>{this.getTime(this.state.form.timeOfSeizure)}</Text>
              </View>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>What were you doing when Seizure started? </Text>
              <Text style={styles.data}>{this.state.form.whatDoingSeizureStarted}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>How were you feeling before Seizure started? </Text>
              <Text style={styles.data}>{this.arrayData(this.state.form.howFeelingSeizureStarted)}</Text>
              <Text style={styles.data}>{this.state.form.howFeelingSeizureStartedText}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>What actions were taken? </Text>
              <Text style={styles.data}>{this.arrayData(this.state.form.actionTaken)}</Text>
              <Text style={styles.data}>{this.state.form.actionTakenText}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>How did the seizure present? </Text>
              <Text style={styles.data}>{this.arrayData(this.state.form.seizurePresent)}</Text>
              <Text style={styles.data}>{this.state.form.seizurePresentText}</Text>
            </View>
          </Card>
         
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>How did the seizure resolve? </Text>
              <Text style={styles.data}>{this.state.form.seizureResolve}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>How did you feel after the Seizure? </Text>
              <Text style={styles.data}>{this.arrayData(this.state.form.feelingAfterSeizure)}</Text>
              <Text style={styles.data}>{this.state.form.feelingAfterSeizureText}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>Were emergency services involved?</Text>
              <Text style={styles.data}>{this.state.form.emergencyService}</Text>
            </View>
          </Card>
        </View>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Button  style={{width:'80%'}} mode="contained" onPress={this.printToFile} >
            Download PDF
          </Button>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    display:'flex',
    flexDirection:'row',
    marginVertical:5
  },
  crow: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    //alignItems:'center',
    marginVertical:5
  },
  col: {
    display:'flex',
    flexDirection:'column',
    marginVertical:5
  },
  title:{
    fontSize:16,
    fontWeight:'700',
    color: theme.colors.primary
  },
  data:{
    fontSize:16,
    fontWeight:'600',
  }
});
