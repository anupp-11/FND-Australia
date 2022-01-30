import React, { useState } from 'react';
import {View, SafeAreaView, StyleSheet, Platform, FlatList} from 'react-native';
import {
  Card,
  Text,
  TextInput,
  Checkbox,
  RadioButton 
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../../components/LoginComponents/Button';
import { theme } from '../../components/LoginComponents/theme';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { Picker as SelectPicker, PickerIOS } from '@react-native-picker/picker';
// import RNPickerSelect from 'react-native-picker-select';
import { HOURS } from '../../service/utils';
import CheckboxComponent from './CheckboxComponent';
import { SMRForm } from '../../models/BaseModel';
const OPTIONS=require('./../../service/options.json');


export default class SymptomMonitoringRecordScreen extends React.Component {
  
  constructor(props: any,) {
    super(props);
   
    this.state = {
      date: new Date,
      whatDoing:'',
      mode : 'date',
      show : false,
      feeling:'',
      actionText:'',
      seizurePresentText:'',
      howResolve:'',
      feelAfter:'',
      service : 'Yes',
      data :OPTIONS.question1,
      data1 :OPTIONS.question1,
      data2 :OPTIONS.question2,
      data3 :OPTIONS.question3,
      data4 :OPTIONS.question4,
      hour:'',
      selectedFruits:[]
    };
    this.onChange = this.onChange.bind(this);
    this.getSelectedOptions = this.getSelectedOptions.bind(this);
    this.renderFruits = this.renderFruits.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   
  }
  componentDidMount(){
    
  }

  

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({show:(Platform.OS ==='ios')});
    this.setState({date:currentDate});
  };

  showMode = (currentMode) => {
    this.setState({show:true});
    this.setState({mode:currentMode});
   
  };

  showDatepicker = () => {
    this.showMode('date');
  };

  //  const getStatePicker = () => {

  //   if(Platform.OS === "android"){
  //     return(
  //       <View
  //         style={{
  //         //paddingVertical: 2,
  //         //backgroundColor: '#fff',
  //         borderWidth: 1,
  //         borderRadius: 10,
  //         borderColor: 'gray',
  //         marginTop: 10
  //     }}>
  //       <SelectPicker
  //               selectedValue={hour}
  //               style={{ width: 150, flex: 1}}
  //               onValueChange={(itemValue, itemIndex) =>
  //                 setHour(itemValue)
  //               }
  //             >
  //               {HOURS.map((x) => (
  //                 <SelectPicker.Item key={x} label={x} value={x} />
  //               ))}
  //       </SelectPicker>
  //     </View>
  //     );
  //   }else{
  //     return (
  //       <View style={{}}>
  //         <RNPickerSelect
  //           style={{
  //             inputIOS:{
  //               //width: 150, flex: 1
  //               backgroundColor: '#fff',
  //               borderWidth: 1,
  //               borderRadius: 10,
  //               //borderColor: PRIMARY_TEXT_GRAY_COLOR,
  //               marginTop: 10,
  //               height: 40
  //             }
  //           }}
  //           // placeholder={{
  //           //   label:"Select State",
  //           //   value:null,
  //           //   color:PRIMARY_COLOR
  //           // }}
  //           value={hour}
  //           onValueChange={(itemValue, itemIndex) =>{
              
  //             setHour(itemValue)
  //           }
              
  //           }
  //           items={HOURS.map(x => {
  //             const sta ={
  //               label: x,
  //               value: x
  //             };
  //             return sta;
  //           })}
            
            
  //         />
  //       </View>

  //     )
  //   }
  // }
  


  showTimepicker = () => {
    this.showMode('time');
  };

 


   _onSMRPressed = () => {

  }

  onSubmit(){
    const feelingData = this.getSelectedOptions(this.state.data1);
    const action = this.getSelectedOptions(this.state.data2);
    const seizurePresent = this.getSelectedOptions(this.state.data3);
    const feelAfterSeizure = this.getSelectedOptions(this.state.data4);

    const SMRFromdata = new SMRForm(
      this.state.date,
      this.state.date,
      this.state.whatDoing,
      feelingData,
      this.state.feeling,
      action,
      this.state.actionText,
      seizurePresent,
      this.state.seizurePresentText,
      this.state.howResolve,
      feelAfterSeizure,
      this.state.feelAfter,
      this.state.service
    )
    console.log("Form Data:",SMRFromdata);

  }
  onChecked = (id,data) => {
    const Data = data;
    debugger;
    const index = Data.findIndex(x=>x.id===id);
    Data[index].checked=!data[index].checked;
    if(data[id].questionGroup=="1"){
      this.setState({data1:Data});
    }else if(data[id].questionGroup=="2"){
      this.setState({data2:Data});
    }else if(data[id].questionGroup=="3"){
      this.setState({data3:Data});
    }else if(data[id].questionGroup=="4"){
      this.setState({data4:Data});
    }
    
   
  }
  renderFruits (data)  {
    return data.map((item)=>{
      debugger;
      return(
        <View>
          <Checkbox.Android color={theme.colors.primary} label={item.key} status={item.checked ? 'checked' : 'unchecked'} onPress={()=>{this.onChecked(item.id,data)}}/>
        </View>
      )
    })
  }
  getSelectedOptions(data){
    var keys = data.map((t)=>t.key)
    var checks = data.map((t)=>t.checked)
    let Selected = []
    for(let i=0;i<checks.length;i++){
      if(checks[i]==true){
        Selected.push(keys[i])
      }
    }
    return Selected;
  }
  renderItem = ({ item }) => <CheckboxComponent data={item} navigation={this.props.navigation} />;

  //const navigation = useNavigation();
  render(){
    return (
      <SafeAreaView >
        <ScrollView>
            {/* Date and Time Picker */}
            <Card style = {styles.card}>
              <View style = {{marginHorizontal:10}}>
                <Button mode="contained" onPress={this.showDatepicker} >
                  Date of Seizure
                </Button>
              </View>
              <View style = {{marginHorizontal:10}}>
                <Button mode="contained" onPress={this.showTimepicker} >
                  Time Seizure Started
                </Button>
              </View>
              {this.state.show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={this.state.date}
                  mode={this.state.mode}
                  is24Hour={true}
                  display="default"
                  onChange={this.onChange}
                />
              )}
            </Card>
          
          {/* Question 1 */}
          <Card style = {styles.card}>
            <Card.Content>
              <Text style={styles.questions}>What were you doing when Seizure started?</Text>
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      placeholder="Type Here"
                      value={this.state.whatDoing}
                      onChangeText={(value) => this.setState({ whatDoing: value })}
                    />
            </Card.Content>
          </Card>
          
          {/* Question 2 */}
          <Card style = {styles.card}>
            <Card.Content>
              <Text style={styles.questions}>How were you feeling before Seizure started?</Text>
        
              {this.renderFruits(this.state.data1)}
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      placeholder="Type Here"
                      value={this.state.feeling}
                      onChangeText={(value) => this.setState({ feeling: value })}
                    />
                
              
            </Card.Content>
          </Card>
  
          {/* Question 3 */}
          <Card style = {styles.card}>
            <Card.Content>
              <Text style={styles.questions}>What actions were taken?</Text>
              
              {this.renderFruits(this.state.data2)}
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      placeholder="Type Here"
                      value={this.state.actionText}
                      onChangeText={(value) => this.setState({ actionText: value })}
                    />   
                
              
            </Card.Content>
          </Card>
  
          {/* Question 4 */}
          <Card style = {styles.card}>
            <Card.Content>
              <Text style={styles.questions}>How did the seizure present?</Text>
              {this.renderFruits(this.state.data3)}
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      placeholder="Type Here"
                      value={this.state.seizurePresentText}
                      onChangeText={(value) => this.setState({ seizurePresentText: value })}
                    />
                
              
            </Card.Content>
          </Card>
  
           {/* Question 5 */}
           <Card style = {styles.card}>
            <Card.Content>
              <Text style={styles.questions}>How did the seizure resolve?</Text>
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      placeholder="Type Here"
                      value={this.state.howResolve}
                      onChangeText={(value) => this.setState({ howResolve: value })}
                    />
            </Card.Content>
          </Card>
  
          {/* Question 6 */}
          <Card style = {styles.card}>
            <Card.Content>
              <Text style={styles.questions}>How did you feel after the Seizure?</Text>
              {this.renderFruits(this.state.data4)}
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      placeholder="Type Here"
                      value={this.state.feelAfter}
                      onChangeText={(value) => this.setState({ feelAfter: value })}
                    />
                
              
            </Card.Content>
          </Card>
          
          {/* Question 7 */}
          <Card style = {styles.card}>
            <Card.Content>
              <Text style={styles.questions}>Were emergency services involved?</Text>
                  <RadioButton.Group onValueChange={newValue => this.setState({service:newValue})} value={this.state.service}>
                  <View style = {styles.parent}>
                      <View style = {styles.child}>
                          <View style = {styles.radio}>
                            <RadioButton value="Yes" />
                            <Text>Yes</Text>
                          </View>
                          
                      </View>
  
                      <View style = {styles.child}>
                        <View style = {styles.radio}>
                          <RadioButton value="No" />
                          <Text>No</Text>
                        </View>
                      </View>
                    </View>
                  </RadioButton.Group>
                
              
            </Card.Content>
          </Card>
  
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',}}>
            <Button style={{width:'80%'}} mode="contained" onPress={this.onSubmit()}>
               Submit
            </Button>
          </View>
  
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  questions:{
    fontSize: 16,
    fontWeight : '700'
  },
  card :{
    margin: 10,
    
  },
  parent:{
    display:"flex",
    flexDirection: 'row',
    justifyContent:'space-between',
    marginRight: 20,
    paddingHorizontal:10
   //backgroundColor: 'red'
  }
  ,child:{
    //marginRight: 40
  },
  radio:{display:'flex', flexDirection:'row',alignItems:'center'}

});


