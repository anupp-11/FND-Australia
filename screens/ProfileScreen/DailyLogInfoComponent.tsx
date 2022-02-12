import React, { useRef } from "react";
import {
  StyleSheet, 
  Dimensions,
  Image,View, Text, ScrollView
} from "react-native";
import { Card, ProgressBar } from "react-native-paper";
import { theme } from "../../components/LoginComponents/theme";

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Button from "../../components/LoginComponents/Button";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';



export default class SMRInfoComponent extends React.Component{
    
  constructor(props) {
    super(props);
    this.state = {
       form : props.route.params.form,
       
    };
    debugger;
  }
  componentDidMount(){
    this.state.form;
    debugger;
    
  }
  renderMood(){
    if(this.state.form.moodValue=="1")
      return <Image style={{height: 50, width : 50, borderRadius:10, marginBottom: 20 }} source={require('../../assets/emojis/sad.png')}/>;
    else if(this.state.form.moodValue=="2")
    return <Image style={{height: 50, width : 50, borderRadius:10, marginBottom: 20 }} source={require('../../assets/emojis/angry.png')}/>;
    else if(this.state.form.moodValue=="3")
    return <Image style={{height: 50, width : 50, borderRadius:10, marginBottom: 20 }} source={require('../../assets/emojis/numb.png')}/>;
    else if(this.state.form.moodValue=="4")
    return <Image style={{height: 50, width : 50, borderRadius:10, marginBottom: 20 }} source={require('../../assets/emojis/happy.png')}/>;
    else if(this.state.form.moodValue=="5")
    return <Image style={{height: 50, width : 50, borderRadius:10, marginBottom: 20 }} source={require('../../assets/emojis/vhappy.png')}/>;
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
    <strong>Daily Log</strong>
  </h1>
  <div style="display:flex;flex-direction:column;padding-inline:30px">
    <p >
      <strong>Recorded At :</strong> ${this.getDate(this.state.form.createdAt)} ${this.getTime(this.state.form.createdAt)}
    </p>
    <p >
      <strong>Mood :</strong>
      
      ${this.state.form.moodText}
    </p>

    <p >
      <strong>Sleep Quality : (${this.state.form.sleepQualityValue})</strong>
      ${this.state.form.sleepQualityText}
    </p>
    
    <p >
      <strong>Stress Level : (${this.state.form.stressLevelValue})</strong>
      ${this.state.form.stressLevelText}
    </p>
    
    <p >
      <strong>Physical Wellbeing Rating : (${this.state.form.pwrValue})</strong>
      ${this.state.form.pwrText}
    </p>
    
    <p >
      <strong>Sleep Duration : (${this.state.form.sleepDurationValue})</strong>
      ${this.state.form.sleepDurationText}
    </p>
    
    <p >
      <strong>Physical Activity Level : (${this.state.form.palValue})</strong>
      ${this.state.form.palText}
    </p>
    
    <p >
      <strong>Daily Achievement : </strong>
      ${this.state.form.dailyAchievementText}
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
        

        <Card style={styles.card}>
          <Text style={styles.title}>Recorded At</Text>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',paddingHorizontal:10}}>
            <Text style={{fontSize:16,fontWeight:'700'}}>{this.getDate(this.state.form.createdAt)} {this.getTime(this.state.form.createdAt)}</Text>
            </View>
        </Card>
        {/* Mood Monitor */}
        <Card style={styles.card}>
          <Text style={styles.title}>Mood Monitor</Text>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',paddingHorizontal:10}}>
              <View >{this.renderMood()}</View>
              <View style={{height:40,marginLeft:10}}><Text style={{fontSize:16,fontWeight:'600'}}>{this.state.form.moodText}</Text></View>
            </View>
        </Card>

        {/* Sleep Quality */}
        <Card style={styles.card}>
          <Text style={styles.title}>Sleep Quality</Text>
            <View style={{display:'flex',flexDirection:'column',justifyContent:'center',paddingHorizontal:10}}>
              <View style={{height:20,width:'100%',marginTop:10}}><ProgressBar progress={this.state.form.sleepQualityValue/10} color={theme.colors.primary} theme={{}}/></View>
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text>0</Text>
                <Text style={{fontSize:16,color:theme.colors.primary,fontWeight:'700'}}>{this.state.form.sleepQualityValue}</Text>
                <Text>10</Text>
              </View>
              <View style={{}}><Text style={{fontSize:16,fontWeight:'600'}}>{this.state.form.sleepQualityText}</Text></View>
            </View>
        </Card>

        {/* Stress Level */}
        <Card style={styles.card}>
          <Text style={styles.title}>Stress Level</Text>
            <View style={{display:'flex',flexDirection:'column',justifyContent:'center',paddingHorizontal:10}}>
              <View style={{height:20,width:'100%',marginTop:10}}><ProgressBar progress={this.state.form.stressLevelValue/10} color={theme.colors.primary} theme={{}}/></View>
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text>0</Text>
                <Text style={{fontSize:16,color:theme.colors.primary,fontWeight:'700'}}>{this.state.form.stressLevelValue}</Text>
                <Text>10</Text>
              </View>
              <View style={{}}><Text style={{fontSize:16,fontWeight:'600'}}>{this.state.form.stressLevelText}</Text></View>
            </View>
        </Card>

        {/* Physical Wellbeing Rating */}
        <Card style={styles.card}>
          <Text style={styles.title}>Physical Wellbeing Rating</Text>
            <View style={{display:'flex',flexDirection:'column',justifyContent:'center',paddingHorizontal:10}}>
              <View style={{height:20,width:'100%',marginTop:10}}><ProgressBar progress={this.state.form.pwrValue/10} color={theme.colors.primary} theme={{}}/></View>
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text>0</Text>
                <Text style={{fontSize:16,color:theme.colors.primary,fontWeight:'700'}}>{this.state.form.pwrValue}</Text>
                <Text>10</Text>
              </View>
              <View style={{}}><Text style={{fontSize:16,fontWeight:'600'}}>{this.state.form.pwrText}</Text></View>
            </View>
        </Card>

        {/* Sleep Duration */}
        <Card style={styles.card}>
          <Text style={styles.title}>Sleep Duration</Text>
            <View style={{display:'flex',flexDirection:'column',justifyContent:'center',paddingHorizontal:10}}>
            <Text style={{fontSize:16,color:theme.colors.primary,fontWeight:'700'}}>{this.state.form.sleepDurationValue}</Text>
              <View style={{}}><Text style={{fontSize:16,fontWeight:'600'}}>{this.state.form.sleepDurationText}</Text></View>
            </View>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.title}>Physical Activity Level</Text>
            <View style={{display:'flex',flexDirection:'column',justifyContent:'center',paddingHorizontal:10}}>
            <Text style={{fontSize:16,color:theme.colors.primary,fontWeight:'700',textTransform: 'uppercase'}}>{this.state.form.palValue}</Text>
              <View style={{}}><Text style={{fontSize:16,fontWeight:'600'}}>{this.state.form.palText}</Text></View>
            </View>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.title}>Daily Achievement</Text>
            <View style={{display:'flex',flexDirection:'column',justifyContent:'center',paddingHorizontal:10}}>
           
              <View style={{}}><Text style={{fontSize:16,fontWeight:'600'}}>{this.state.form.dailyAchievementText}</Text></View>
            </View>
        </Card>
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
    textAlign:'center',
    fontSize:18,
    fontWeight:'700',
    color: theme.colors.primary
  },
  data:{
    fontSize:16,
    fontWeight:'600',
  },
  card:{margin:5,padding:10}
});
