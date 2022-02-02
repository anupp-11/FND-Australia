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


let width = Dimensions.get("screen").width / 2;

export default class SMRInfoComponent extends React.Component{
    
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
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.crow}>
              <View style={styles.row}>
                <Text style={styles.title}>Date of Seizure: </Text>
                <Text style={styles.data}>{this.state.form.dateOfSeizure}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Time of Seizure: </Text>
                <Text style={styles.data}>{this.state.form.timeOfSeizure}</Text>
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
              <Text style={styles.data}>{this.arrayData(this.state.form.actionsTaken)}</Text>
              <Text style={styles.data}>{this.state.form.actionsTakenText}</Text>
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
              <Text style={styles.data}>{this.arrayData(this.state.form.feelAfterSeizure)}</Text>
              <Text style={styles.data}>{this.state.form.feelAfterSeizureText}</Text>
            </View>
          </Card>
          <Card style={{padding:10,marginVertical:5}}>
            <View style={styles.col}>
              <Text style={styles.title}>Were emergency services involved?</Text>
              <Text style={styles.data}>{this.state.form.emergencyService}</Text>
            </View>
          </Card>
          
          
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
