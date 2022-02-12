import React from "react";
import {
  StyleSheet, 
  Dimensions,
  View, Text, ScrollView
} from "react-native";
import { Card } from "react-native-paper";
import { theme } from "../../components/LoginComponents/theme";
import * as Print from 'expo-print';
import { shareAsync } from "expo-sharing";
import Button from "../../components/LoginComponents/Button";

let width = Dimensions.get("screen").width / 2;

export default class SMPInfoComponent extends React.Component{
    
  constructor(props) {
    super(props);
    this.state = {
       form : props.route.params.form
    };
  }
  componentDidMount(){
    console.log("Form Data,",this.state.form);
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

  printToFile = async () => {
    const html = `
    <h1 style="text-align: center;">
    <strong>Seizure Management Plan</strong>
  </h1>
  <div style="display:flex;flex-direction:column;padding-inline:30px">
    <p >
      <strong>Date of Birth:</strong> ${this.getDate(this.state.form.dateOfBirth)} 
    </p>
    <p >
      <strong>Date of Plan:</strong>  ${this.getDate(this.state.form.dateOfPlan)}
    </p>
    
    <p style="display:flex;flex-direction:column;">
      <strong>Medication you are on:</strong>
  ${this.state.form.onMedication}, ${this.state.form.medication}
    </p>
    
    <p style="display:flex;flex-direction:column;">
      <strong>Medical Conditions:</strong>
  ${this.arrayData(this.state.form.medicalConditions)}
    </p>
    
     <p style="display:flex;flex-direction:column;">
      <strong>Other relevant medical history:</strong>
  ${this.state.form.medicalHistory}
    </p>
    
     <p style="display:flex;flex-direction:column;">
      <strong>>Warning signs prior to a Seizure:</strong>
  ${this.arrayData(this.state.form.warningSigns)}, 
  ${this.state.form.warningSignsText}
    </p>
    
    <p style="display:flex;flex-direction:column;">
      <strong>Types of Seizure you have:</strong>
  ${this.state.form.seizureType}
  ${this.state.form.seizureTypeText}
    </p>
    
    <p style="display:flex;flex-direction:column;">
      <strong>How does your seizures typically present?</strong>
  ${this.arrayData(this.state.form.seizurePresent)}, 
  ${this.state.form.seizurePresentText}
    </p>
    
     <p style="display:flex;flex-direction:column;">
      <strong>Typical Duration of Seizure:</strong>
  ${this.state.form.durationOfSeizure}
 
    </p>
    
    <p style="display:flex;flex-direction:column;">
      <strong>Typical Frequency of Seizure:</strong>
  ${this.state.form.frequency} times a ${this.state.form.frequencyUnit}
 
    </p>
    
    <p style="display:flex;flex-direction:column;">
      <strong>Assistance required from people?</strong>
  ${this.arrayData(this.state.form.notDo)}, 
  ${this.state.form.notDoText}
    </p>
    
    <p style="display:flex;flex-direction:column;">
      <strong>What you may need after a seizure?</strong>
  ${this.state.form.needAfterSeizure}, 
  ${this.state.form.needAfterSeizureText}
    </p>
    
    <p style="display:flex;flex-direction:column;">
      <strong>An ambulance may be needed in the event of?</strong>
  ${this.arrayData(this.state.form.ambulanceNeeded)}, 
  ${this.state.form.ambulanceNeededText}
    </p>


   
  </div>`;
 
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
            <View style={styles.crow}>
              <View style={styles.row}>
                <Text style={styles.title}>Date of Birth: </Text>
                <Text style={styles.data}>{this.getDate(this.state.form.dateOfBirth)}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Date of Plan: </Text>
                <Text style={styles.data}>{this.getDate(this.state.form.dateOfPlan)}</Text>
              </View>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>Medication you are on: </Text>
              <Text style={styles.data}>{this.state.form.onMedication}</Text>
              <Text style={styles.data}>{this.state.form.medication}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>Medical Conditions: </Text>
              {this.state.form.medicalConditions? ( <Text style={styles.data}>{this.arrayData(this.state.form.medicalConditions)}</Text>):(<View></View>)}
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>Other relevant medical history: </Text>
              <Text style={styles.data}>{this.state.form.medicalHistory}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>Warning signs prior to a Seizure: </Text>
              {this.state.form.warningSigns? ( <Text style={styles.data}>{this.arrayData(this.state.form.warningSigns)}</Text>):(<View></View>)}
              <Text style={styles.data}>{this.state.form.warningSignsText}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>Types of Seizure you have: </Text>
              <Text style={styles.data}>{this.state.form.seizureType}</Text>
              <Text style={styles.data}>{this.state.form.seizureTypeText}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>How does your seizures typically present? </Text>
              {this.state.form.seizurePresent? ( <Text style={styles.data}>{this.arrayData(this.state.form.seizurePresent)}</Text>):(<View></View>)}
              <Text style={styles.data}>{this.state.form.seizurePresentText}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>Typical Duration of Seizure: </Text>
              <Text style={styles.data}>{this.state.form.durationOfSeizure}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>Typical Frequency of Seizure: </Text>
              <Text style={styles.data}>{this.state.form.frequency} times a {this.state.form.frequencyUnit}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>Assistance required from people? </Text>
              {this.state.form.assistanceRequired? ( <Text style={styles.data}>{this.arrayData(this.state.form.assistanceRequired)}</Text>):(<View></View>)}
              <Text style={styles.data}>{this.state.form.assistanceRequiredText}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>What to not do during a seizure?: </Text>
              {this.state.form.notDo? ( <Text style={styles.data}>{this.arrayData(this.state.form.notDo)}</Text>):(<View></View>)}
              <Text style={styles.data}>{this.state.form.notDoText}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>What you may need after a seizure? </Text>
              <Text style={styles.data}>{this.state.form.needAfterSeizure}</Text>
              <Text style={styles.data}>{this.state.form.needAfterSeizureText}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>An ambulance may be needed in the event of? </Text>
              {this.state.form.ambulanceNeeded? ( <Text style={styles.data}>{this.arrayData(this.state.form.ambulanceNeeded)}</Text>):(<View></View>)}
              <Text style={styles.data}>{this.state.form.ambulanceNeededText}</Text>
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
