import {
  Text, View, StyleSheet, Platform, FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Dialog, Portal, RadioButton,Checkbox, TextInput, Button as RButton, Provider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { theme } from '../../components/LoginComponents/theme';
import DatePicker from 'react-native-datepicker';
import { Picker as SelectPicker, PickerIOS } from '@react-native-picker/picker';
import { DURATION, FREQUENCY, HOURS, MINUTES } from '../../service/utils';
import Button from '../../components/LoginComponents/Button';
import CheckboxComponent from './CheckboxComponent';
const OPTIONS=require('./../../service/options2.json');

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
      data1 :OPTIONS.question1,
      data2 :OPTIONS.question2,
      data3 :OPTIONS.question3,
      data4 :OPTIONS.question4,
      data5 :OPTIONS.question5,
      DOB: new Date,
      DOP: new Date,
      onMedication: 'Yes',
      medicalConditions: [],
      medicalHistory: '',
      medication:'',
      ambulance:'',
      warningSign :'Distracted',
      typesOfSeizure : 'Epileptic',
      seizureAtPresent:'',
      assistanceRequired: '',
      afterSeizure:'',
      agree: false

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
  renderItem = ({ item }) => <CheckboxComponent data={item} navigation={this.props.navigation} />;

 
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


            {/* Question 6 */}
              <Card style = {styles.card}>
                <Card.Content>
                  <Text style={styles.questions}>Warning signs prior to a Seizure</Text>
                  <FlatList
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  data={this.state.data1}
                  renderItem={this.renderItem}
                  horizontal={false}
                  columnWrapperStyle={{
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent: "space-between"
                  }}
                  style={{
                    width: "100%",
                    marginTop: 10,
                }}
              />
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      placeholder="Type Here"
                      //value={this.state.storeName}
                      //onChangeText={(value) => this.setState({ storeName: value })}
                    />
                  
                </Card.Content>
              </Card>

              {/* Question 8 */}
              <Card style = {styles.card}>
                  <Card.Content>
                    <Text style={styles.questions}>Types of Seizure you have.</Text>
                    <FlatList
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  data={this.state.data2}
                  renderItem={this.renderItem}
                  horizontal={false}
                  columnWrapperStyle={{
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent: "space-between"
                  }}
                  style={{
                    width: "100%",
                    marginTop: 10,
                }}
              />
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      placeholder="Type Here"
                      //value={this.state.storeName}
                      //onChangeText={(value) => this.setState({ storeName: value })}
                    />
                  </Card.Content>
                </Card>
                {/* Question 4 */}
                <Card style = {styles.card}>
                  <Card.Content>
                    <Text style={styles.questions}>How does your seizures typically  present?</Text>
                    <FlatList
                      numColumns={2}
                      showsVerticalScrollIndicator={false}
                      data={this.state.data5}
                      renderItem={this.renderItem}
                      horizontal={false}
                      columnWrapperStyle={{
                        width:'100%',
                        display:'flex',
                        flexDirection:'row',
                        justifyContent: "space-between"
                      }}
                      style={{
                        width: "100%",
                        marginTop: 10,
                    }}
                  />
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
                      <Text style={styles.questions}>Typical Duration of Seizures</Text>
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
                      <Text style={styles.questions}>Typical Frequency of Seizures</Text>
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
                      <FlatList
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  data={this.state.data3}
                  renderItem={this.renderItem}
                  horizontal={false}
                  columnWrapperStyle={{
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent: "space-between"
                  }}
                  style={{
                    width: "100%",
                    marginTop: 10,
                }}
              />
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      placeholder="Type Here"
                      //value={this.state.storeName}
                      //onChangeText={(value) => this.setState({ storeName: value })}
                    />
                    </Card.Content>
                  </Card> 

                {/* Question 8 */}
                <Card style = {styles.card}>
                    <Card.Content>
                      <Text style={styles.questions}>What to not do during a seizure?</Text>
                      <FlatList
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  data={this.state.data4}
                  renderItem={this.renderItem}
                  horizontal={false}
                  columnWrapperStyle={{
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent: "space-between"
                  }}
                  style={{
                    width: "100%",
                    marginTop: 10,
                }}
              />
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      placeholder="Type Here"
                      //value={this.state.storeName}
                      //onChangeText={(value) => this.setState({ storeName: value })}
                    />
                    </Card.Content>
                  </Card> 

                {/* Question 8 */}
                <Card style = {styles.card}>
                    <Card.Content>
                      <Text style={styles.questions}>What you may need after a seizure?</Text>
                          <RadioButton.Group onValueChange={newValue => this.setState({afterSeizure:newValue})} value={this.state.afterSeizure}>
                          <View style = {styles.parent}>
                              <View style = {styles.child}>
                                  <View style = {styles.radio}>
                                    <RadioButton value="Rest" />
                                    <Text numberOfLines={2} style={{width:'50%'}}>Rest</Text>
                                  </View>
                                  
                              </View>

                              <View style = {styles.child}>
                                <View style = {styles.radio}>
                                  <RadioButton value="Remain Quiet" />
                                  <Text numberOfLines={2} style={{width:'50%'}}>Remain Quiet</Text>
                                </View>
                               
                                
                              </View>
                            </View>
                          </RadioButton.Group>
                          <TextInput
                              mode="outlined"
                              theme={{ colors: { primary: theme.colors.primary}}}
                              multiline={true}
                              placeholder="Type Here"
                              //value={this.state.storeName}
                              //onChangeText={(value) => this.setState({ storeName: value })}
                            />
                    </Card.Content>
                  </Card> 

                 {/* Question 8 */}
                 <Card style = {styles.card}>
                    <Card.Content>
                      <Text style={styles.questions}>An ambulance may be needed in the event of?</Text>
                          <RadioButton.Group onValueChange={newValue => this.setState({ambulance:newValue})} value={this.state.ambulance}>
                          <View style = {styles.parent}>
                              <View style = {styles.child}>
                                  <View style = {styles.radio}>
                                    <RadioButton value="Injury" />
                                    <Text numberOfLines={2} style={{width:'50%'}}>Injury</Text>
                                  </View>
                                  <View style = {styles.radio}>
                                    <RadioButton value="Unable to breathe" />
                                    <Text numberOfLines={2} style={{width:'50%'}}>Unable to breathe</Text>
                                  </View>
                                  
                              </View>

                              <View style = {styles.child}>
                                <View style = {styles.radio}>
                                  <RadioButton value="Seizure is different to normal" />
                                  <Text numberOfLines={2} style={{width:'50%'}}>Seizure is different to normal</Text>
                                </View>
                                <View style = {styles.radio}>
                                  <RadioButton value="Seizure not resolving" />
                                  <Text numberOfLines={2} style={{width:'50%'}}>Seizure not resolving</Text>
                                </View>
                               
                                
                              </View>
                            </View>
                          </RadioButton.Group>
                          <TextInput
                            mode="outlined"
                            theme={{ colors: { primary: theme.colors.primary}}}
                            multiline={true}
                            placeholder="Type Here"
                            //value={this.state.storeName}
                            //onChangeText={(value) => this.setState({ storeName: value })}
                          />
                    </Card.Content>
                  </Card> 

                  <Checkbox.Android
                  status={this.state.agree ? 'checked' : 'unchecked'}
                  color={theme.colors.primary}
                 
                  onPress={() => {
                    this.setState({agree:!this.state.agree});
                  }}
                />
                  <Text style={{paddingHorizontal:10}}>I have discussed this above seizure management plan with my treating doctor named on page my doctor's detail. I confirm that this is the agreed management plan in the  event  that  I experience functional or dissociative seizures. I understand that this plan does not constitute medical advice or instruction and that an ambulance will be called in an emergency.</Text>
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
