import React, { useRef } from "react";
import {
  StyleSheet, 
  Dimensions,
  View, Text, ScrollView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from "../../components/LoginComponents/theme";


let width = Dimensions.get("screen").width / 2;

export default class SMPInfoComponent extends React.Component{
    
  constructor(props) {
    super(props);
    this.state = {
       form : props.route.params.form
    };
  }
  componentDidMount(){
    
  }

  arrayData(data){
    debugger;
    const Data = data.map(item => item).join(', ');
    debugger;
    return Data;
  }

 
  render() {
    return (
      <ScrollView >
        <View style={{padding:10}}>
          <View style={styles.crow}>
            <View style={styles.row}>
              <Text style={styles.title}>Date of Birth: </Text>
              <Text style={styles.data}>{this.state.form.dateOfBirth}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Date of Plan: </Text>
              <Text style={styles.data}>{this.state.form.dateOfPlan}</Text>
            </View>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>Medication you are on: </Text>
            <Text style={styles.data}>{this.state.form.onMedication}</Text>
            <Text style={styles.data}>{this.state.form.medication}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>Medical Conditions: </Text>
            <Text style={styles.data}>{this.arrayData(this.state.form.medicalConditions)}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>Other relevant medical history: </Text>
            <Text style={styles.data}>{this.state.form.medicalHistory}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>Warning signs prior to a Seizure: </Text>
            <Text style={styles.data}>{this.arrayData(this.state.form.warningSigns)}</Text>
            <Text style={styles.data}>{this.state.form.warningSignText}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>Types of Seizure you have: </Text>
            <Text style={styles.data}>{this.state.form.seizureType}</Text>
            <Text style={styles.data}>{this.state.form.seizureTypeText}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>How does your seizures typically present?: </Text>
            <Text style={styles.data}>{this.arrayData(this.state.form.seizurePresent)}</Text>
            <Text style={styles.data}>{this.state.form.seizurePresentText}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>Typical Duration of Seizure: </Text>
            <Text style={styles.data}>{this.state.form.durationOfSeizure}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>Typical Frequency of Seizure: </Text>
            <Text style={styles.data}>{this.state.form.durationOfSeizure}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>Assistance required from people?: </Text>
            <Text style={styles.data}>{this.arrayData(this.state.form.assistanceRequired)}</Text>
            <Text style={styles.data}>{this.state.form.assistanceRequiredText}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>What to not do during a seizure?: </Text>
            <Text style={styles.data}>{this.arrayData(this.state.form.notDo)}</Text>
            <Text style={styles.data}>{this.state.form.notDoText}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>What you may need after a seizure?: </Text>
            <Text style={styles.data}>{this.state.form.needAfterSeizure}</Text>
            <Text style={styles.data}>{this.state.form.needAfterSeizureText}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>An ambulance may be needed in the event of?: </Text>
            <Text style={styles.data}>{this.arrayData(this.state.form.ambulanceNeeded)}</Text>
            <Text style={styles.data}>{this.state.form.ambulanceNeededText}</Text>
          </View>
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
