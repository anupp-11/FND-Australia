import {
  Text, View, StyleSheet, Platform
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Dialog, Portal, RadioButton, TextInput, Button as RButton, Provider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { theme } from '../../components/LoginComponents/theme';
import DatePicker from 'react-native-datepicker';
import { Picker as SelectPicker, PickerIOS } from '@react-native-picker/picker';
import { DURATION, FREQUENCY, HOURS, MINUTES } from '../../service/utils';
import Button from '../../components/LoginComponents/Button';

//import RNPickerSelect from 'react-native-picker-select';


export default class SMPForm extends React.Component {
  
  constructor(props: any,) {
    super(props);
   
    this.state = {
      tempMedication:"",
      visible:false,
      isProcessing: true,
      minutes:'',
      hours:'',
      duration:'',
      frequency:'',
      DOB: new Date,
      DOP: new Date,
      onMedication: 'Yes',
      medicalConditions: [],
      medicalHistory: '',
      medication:'',
      emergencyContact : 
        {
          name:'',
          relationship:'',
          phoneNo:'',
          phoneNoHome:''
        },
      warningSign :'Distracted',
      typesOfSeizure : 'Epileptic',
      seizureAtPresent:'',
      assistanceRequired: '',

    };
    this.showDialog = this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this.updateMedication = this.updateMedication.bind(this);
  }
  componentDidMount(){
    
  }
  getHourPicker(){

    if(Platform.OS === "android"){
      return(
        <View
          style={{
          display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:120,
          borderRadius: 10,
          backgroundColor:'#E9E9E9',
          
          margin: 10,
          height:50,
      }}>
        <SelectPicker
                selectedValue={this.state.hours}
                style={{ width: 60, flex: 1,textAlign:'center'}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ hours: itemValue })
                }
              >
                {HOURS.map((x) => (
                  <SelectPicker.Item key={x} label={x} value={x} />
                ))}
        </SelectPicker>
        <Text style={{marginRight:10,fontWeight:'700'}}>Hr</Text>
      </View>
      );
    }
    // else{
    //   return (
    //     <View style={styles.selectSize}>
    //       <RNPickerSelect
    //         style={{
    //           inputIOS:{
    //             //width: 150, flex: 1
    //             backgroundColor: '#fff',
    //             borderWidth: 1,
    //             borderRadius: 10,
    //             //borderColor: PRIMARY_TEXT_GRAY_COLOR,
    //             marginTop: 10,
    //             height: 40
    //           }
    //         }}
    //         // placeholder={{
    //         //   label:"Select State",
    //         //   value:null,
    //         //   color:PRIMARY_COLOR
    //         // }}
    //         value={this.state.hours}
    //         onValueChange={(itemValue, itemIndex) =>{
              
    //           this.setState({hours:itemValue})
    //         }
              
    //         }
    //         items={HOURS.map(x => {
    //           const sta ={
    //             label: x,
    //             value: x
    //           };
    //           return sta;
    //         })}
            
            
    //       />
    //     </View>

    //   )
    // }
  }
  getMinutePicker(){

    if(Platform.OS === "android"){
      return(
        <View
          style={{
          display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:120,
          borderRadius: 10,
          backgroundColor:'#E9E9E9',
          
          margin: 10,
          height:50,
      }}>
        <SelectPicker
                selectedValue={this.state.minutes}
                style={{ width: 60, flex: 1,textAlign:'center'}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ minutes: itemValue })
                }
              >
                {MINUTES.map((x) => (
                  <SelectPicker.Item key={x} label={x} value={x} />
                ))}
        </SelectPicker>
        <Text style={{marginRight:10,fontWeight:'700'}}>Min</Text>
      </View>
      );
    }
    // else{
    //   return (
    //     <View style={styles.selectSize}>
    //       <RNPickerSelect
    //         style={{
    //           inputIOS:{
    //             //width: 150, flex: 1
    //             backgroundColor: '#fff',
    //             borderWidth: 1,
    //             borderRadius: 10,
    //             //borderColor: PRIMARY_TEXT_GRAY_COLOR,
    //             marginTop: 10,
    //             height: 40
    //           }
    //         }}
    //         // placeholder={{
    //         //   label:"Select State",
    //         //   value:null,
    //         //   color:PRIMARY_COLOR
    //         // }}
    //         value={this.state.minutes}
    //         onValueChange={(itemValue, itemIndex) =>{
              
    //           this.setState({minutes:itemValue})
    //         }
              
    //         }
    //         items={MINUTE.map(x => {
    //           const sta ={
    //             label: x,
    //             value: x
    //           };
    //           return sta;
    //         })}
            
            
    //       />
    //     </View>

    //   )
    // }
  }
  getFrequencyPicker(){

    if(Platform.OS === "android"){
      return(
        <View
          style={{
          display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:120,
          borderRadius: 10,
          backgroundColor:'#E9E9E9',
          
          margin: 10,
          height:50,
      }}>
        <SelectPicker
                selectedValue={this.state.frequency}
                style={{ width: 60, flex: 1,textAlign:'center'}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ frequency: itemValue })
                }
              >
                {FREQUENCY.map((x) => (
                  <SelectPicker.Item key={x} label={x} value={x} />
                ))}
        </SelectPicker>
        
      </View>
      );
    }
    // else{
    //   return (
    //     <View style={styles.selectSize}>
    //       <RNPickerSelect
    //         style={{
    //           inputIOS:{
    //             //width: 150, flex: 1
    //             backgroundColor: '#fff',
    //             borderWidth: 1,
    //             borderRadius: 10,
    //             //borderColor: PRIMARY_TEXT_GRAY_COLOR,
    //             marginTop: 10,
    //             height: 40
    //           }
    //         }}
    //         // placeholder={{
    //         //   label:"Select State",
    //         //   value:null,
    //         //   color:PRIMARY_COLOR
    //         // }}
    //         value={this.state.frequency}
    //         onValueChange={(itemValue, itemIndex) =>{
              
    //           this.setState({frequency:itemValue})
    //         }
              
    //         }
    //         items={FREQUENCY.map(x => {
    //           const sta ={
    //             label: x,
    //             value: x
    //           };
    //           return sta;
    //         })}
            
            
    //       />
    //     </View>

    //   )
    // }
  }
  getDurationPicker(){

    if(Platform.OS === "android"){
      return(
        <View
          style={{
          display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:120,
          borderRadius: 10,
          backgroundColor:'#E9E9E9',
          
          margin: 10,
          height:50,
      }}>
        <SelectPicker
                selectedValue={this.state.duration}
                style={{ width: 100, flex: 1,textAlign:'center'}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ duration: itemValue })
                }
              >
                {DURATION.map((x) => (
                  <SelectPicker.Item key={x} label={x} value={x} />
                ))}
        </SelectPicker>
      </View>
      );
    }
    // else{
    //   return (
    //     <View style={styles.selectSize}>
    //       <RNPickerSelect
    //         style={{
    //           inputIOS:{
    //             //width: 150, flex: 1
    //             backgroundColor: '#fff',
    //             borderWidth: 1,
    //             borderRadius: 10,
    //             //borderColor: PRIMARY_TEXT_GRAY_COLOR,
    //             marginTop: 10,
    //             height: 40
    //           }
    //         }}
    //         // placeholder={{
    //         //   label:"Select State",
    //         //   value:null,
    //         //   color:PRIMARY_COLOR
    //         // }}
    //         value={this.state.duration}
    //         onValueChange={(itemValue, itemIndex) =>{
              
    //           this.setState({duration:itemValue})
    //         }
              
    //         }
    //         items={DURATION.map(x => {
    //           const sta ={
    //             label: x,
    //             value: x
    //           };
    //           return sta;
    //         })}
            
            
    //       />
    //     </View>

    //   )
    // }
  }
  showDialog(){
    this.setState({visible:true});
  }
  hideDialog(){
    this.setState({visible:false});
  }
  updateMedication(){
    //this.state.myArray.push('new value')
    debugger;
    this.setState({ medicalConditions: [...this.state.medicalConditions, this.state.tempMedication] });
    const c = this.state.medicalConditions;
    debugger;
    this.setState({tempMedication:null});
    this.hideDialog();
  }
  deleteMedicalCondition(key){
    debugger;
    var array = this.state.medicalConditions;
    if (key !== -1) {
      array.splice(key, 1);
      this.setState({medicalConditions: array});
    }
    // delete array[key];
    // this.setState({medicalConditions: array})
    // const  b = array;
  }
  
 
  render() {
    return (
      <Provider>
        <SafeAreaView style={{marginTop:-50}}>
         
          <ScrollView>
            {/* Question 1 */}
            <Card style = {styles.card}>
              <Card.Content>
               
                  <Text style={styles.questions}>Date of Birth</Text>
                  <DatePicker
                    style={{width: '100%'}}
                    date={this.state.DOB}
                    placeholder="Select Date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                  
                    onDateChange={(date) => this.setState({DOB:date})}
                  />
               
              </Card.Content>
            </Card>

            {/* Question 2 */}
            <Card style = {styles.card}>
              <Card.Content>
                
                  <Text style={styles.questions}>Date of Plan</Text>
                  <DatePicker
                    style={{width: '100%'}}
                    date={this.state.DOP}
                    placeholder="Select Date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                  
                    onDateChange={(date) => this.setState({DOP:date})}
                  />
                
              </Card.Content>
            </Card>
               
            
            {/* Question 3 */}
            <Card style = {styles.card}>
              <Card.Content>
                <Text style={styles.questions}>Medication you are on</Text>
                <RadioButton.Group onValueChange={newValue => this.setState({onMedication : newValue})} value={this.state.onMedication}>
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
                    { this.state.onMedication == "Yes" ? (
                        <TextInput
                          mode="outlined"
                          theme={{ colors: { primary: theme.colors.primary}}}
                          multiline={true}
                          placeholder="Type Here"
                          value={this.state.medication}
                          onChangeText={(value) => this.setState({ medication: value })}
                      />
                      ):(<View></View>)}
              </Card.Content>
            </Card>
          
            {/* Question 4 */}
            <Card style = {styles.card}>
              <Card.Content>
                <Text style={styles.questions}>Medical Conditions</Text>
                {this.state.medicalConditions ? (<View>
                  {
                    this.state.medicalConditions.map((item, key)=>{
                      debugger;
                      return(
                        <View>
                          <TextInput
                            mode="outlined"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            multiline={true}
                            right={<TextInput.Icon name="delete" color='red' onPress={this.deleteMedicalCondition.bind(this,key)}/>}
                            //placeholder="Type Here"
                            value={item}
                           // onChangeText={(value) => this.setState({ tempMedication: value })}
                            disabled={true}
                          />
                          {/* <Text>
                            {item}
                          </Text> */}
                        </View>
                
                       
                      )
                    })
                  }
                </View>):(<View></View>)}
                <Button onPress={this.showDialog}>Add</Button>
              </Card.Content>
            </Card>

            <Portal>
                  <Dialog visible={this.state.visible}  onDismiss={this.hideDialog}>
                    <Dialog.Title>Add Condition</Dialog.Title>
                    <Dialog.Content>
                      <TextInput
                        mode="outlined"
                        theme={{ colors: { primary: theme.colors.primary}}}
                        multiline={true}
                        placeholder="Type Here"
                        value={this.state.tempMedication}
                        onChangeText={(value) => this.setState({ tempMedication: value })}
                      />
                    </Dialog.Content>
                    <Dialog.Actions>
                      <RButton color='gray' onPress={this.hideDialog}>Cancel</RButton>
                      <RButton color={theme.colors.primary} onPress={this.updateMedication}>Ok</RButton>
                    </Dialog.Actions>
                  </Dialog>
                </Portal>
            

             {/* Question 5 */}
            <Card style = {styles.card}>
              <Card.Content>
                <Text style={styles.questions}>Other relevant medical history.</Text>
                <TextInput
                        mode="outlined"
                        theme={{ colors: { primary: theme.colors.primary}}}
                        multiline={true}
                        placeholder="Type Here"
                        value={this.state.medicalHistory}
                        onChangeText={(value) => this.setState({ medicalHistory: value })}
                      />
              </Card.Content>
            </Card>


            {/* Question 7 */}
              <Card style = {styles.card}>
                <Card.Content>
                  <Text style={styles.questions}>Warning signs prior to a Seizure</Text>
                      <RadioButton.Group onValueChange={newValue => this.setState({warningSign:newValue})} value={this.state.warningSign}>
                      <View style = {styles.parent}>
                          <View style = {styles.child}>
                              <View style = {styles.radio}>
                                <RadioButton value="Distracted" />
                                <Text>Distracted</Text>
                              </View>
                              <View style = {styles.radio}>
                                <RadioButton value="Fatigued" />
                                <Text>Fatigued</Text>
                              </View>
                              <View style = {styles.radio}>
                                <RadioButton value="Feeling of an aura" />
                                <Text>Feeling of an aura</Text>
                              </View>
                              <View style = {styles.radio}>
                                <RadioButton value="Other behaviour change" />
                                <Text>Other behaviour change</Text>
                              </View>
                          </View>

                          <View style = {styles.child}>
                            <View style = {styles.radio}>
                              <RadioButton value="Dissociated" />
                              <Text>Dissociated</Text>
                            </View>
                            <View style = {styles.radio}>
                              <RadioButton value="Sad" />
                              <Text>Sad</Text>
                            </View>
                            <View style = {styles.radio}>
                              <RadioButton value="Agitated" />
                              <Text>Agitated</Text>
                            </View>
                          </View>
                        </View>
                      </RadioButton.Group>
                    
                  
                </Card.Content>
              </Card>

              {/* Question 8 */}
              <Card style = {styles.card}>
                  <Card.Content>
                    <Text style={styles.questions}>Types of Seizure you have.</Text>
                        <RadioButton.Group onValueChange={newValue => this.setState({typesOfSeizure:newValue})} value={this.state.typesOfSeizure}>
                        <View style = {styles.parent}>
                            <View style = {styles.child}>
                                <View style = {styles.radio}>
                                  <RadioButton value="Epileptic" />
                                  <Text>Epileptic</Text>
                                </View>
                                <View style = {styles.radio}>
                                  <RadioButton value="Functional" />
                                  <Text>Functional</Text>
                                </View>
                                <View style = {styles.radio}>
                                  <RadioButton value="Blank spells" />
                                  <Text>Blank spells</Text>
                                </View>
                                <View style = {styles.radio}>
                                  <RadioButton value="Hyperkinetic" />
                                  <Text>Hyperkinetic</Text>
                                </View>
                            </View>

                            <View style = {styles.child}>
                              <View style = {styles.radio}>
                                <RadioButton value="Non-Epileptic" />
                                <Text>Non-Epileptic</Text>
                              </View>
                              <View style = {styles.radio}>
                                <RadioButton value="Dissocaitive" />
                                <Text>Dissocaitive</Text>
                              </View>
                              <View style = {styles.radio}>
                                <RadioButton value="Hypokinetic" />
                                <Text>Hypokinetic</Text>
                              </View>
                            </View>
                          </View>
                        </RadioButton.Group>
                  </Card.Content>
                </Card>
                {/* Question 4 */}
                <Card style = {styles.card}>
                  <Card.Content>
                    <Text style={styles.questions}>How is your Seizure at present?</Text>
                    <TextInput
                            mode="outlined"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            multiline={true}
                            placeholder="Type Here"
                            value={this.state.seizureAtPresent}
                            onChangeText={(value) => this.setState({ seizureAtPresent: value })}
                          />
                  </Card.Content>
                </Card>

                {/* Question 8 */}
                <Card style = {styles.card}>
                    <Card.Content>
                      <Text style={styles.questions}>Duration of Seizure</Text>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent:'center'
                          }}
                        >
                          {this.getHourPicker()}
                          {this.getMinutePicker()}
                          
                        </View>
                    </Card.Content>
                  </Card> 

                {/* Question 8 */}
                <Card style = {styles.card}>
                    <Card.Content>
                      <Text style={styles.questions}>Frequency of Seizure</Text>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent:'center'
                          }}
                        >
                          {this.getFrequencyPicker()}
                          {this.getDurationPicker()}
                          
                        </View>
                    </Card.Content>
                  </Card> 

                {/* Question 8 */}
                <Card style = {styles.card}>
                    <Card.Content>
                      <Text style={styles.questions}>Assistance required from people.</Text>
                          <RadioButton.Group onValueChange={newValue => this.setState({assistanceRequired:newValue})} value={this.state.assistanceRequired}>
                          <View style = {styles.parent}>
                              <View style = {styles.child}>
                                  <View style = {styles.radio}>
                                    <RadioButton value="Place cushion around me " />
                                    <Text numberOfLines={2} style={{width:'50%'}}>Place cushion around me </Text>
                                  </View>
                                  <View style = {styles.radio}>
                                    <RadioButton value="Help to keep you calm" />
                                    <Text numberOfLines={2} style={{width:'50%'}}>Help to keep you calm</Text>
                                  </View>
                              </View>

                              <View style = {styles.child}>
                                <View style = {styles.radio}>
                                  <RadioButton value="Keep safe from Injury" />
                                  <Text numberOfLines={2} style={{width:'50%'}}>Keep safe from Injury</Text>
                                </View>
                                <View style = {styles.radio}>
                                  <RadioButton value="Remain calm around you" />
                                  <Text numberOfLines={2} style={{width:'50%'}}>Remain calm around you</Text>
                                </View>
                                
                              </View>
                            </View>
                          </RadioButton.Group>
                    </Card.Content>
                  </Card> 
                  <View style={{display:'flex',justifyContent:'center',alignItems:'center',}}>
                    <Button style={{width:'80%'}} mode="contained"  >
                      Submit
                    </Button>
                  </View>
                  

          </ScrollView>
         
        </SafeAreaView>
        </Provider>
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
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    borderRadius: 10,
    
  }
  ,child:{
    //marginRight: 40
  },
  radio:{display:'flex', flexDirection:'row',alignItems:'center'}

});
