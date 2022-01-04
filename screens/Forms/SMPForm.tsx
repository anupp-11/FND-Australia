import {
  Text, View, StyleSheet
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, RadioButton, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { theme } from '../../components/LoginComponents/theme';



export default class MediaScreen extends React.Component {
  
  constructor(props: any,) {
    super(props);
   
    this.state = {
      isProcessing: true,
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
   
  }
  componentDidMount(){
    
  }
 
  render() {
    return (
        <SafeAreaView>
          <ScrollView>
            {/* Question 2 */}
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

            {/* Question 5 */}
            <Card style = {styles.card}>
            <Card.Content>
              <Text style={styles.questions}>My emergency contact is.</Text>
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      label="Name"
                      value={this.state.emergencyContact.name}
                      onChangeText={(value) => this.setState({ name : value })}
                    />
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      label="Relationship"
                      value={this.state.emergencyContact.relationship}
                      onChangeText={(value) => this.setState({ relationship : value })}
                    />
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      label='Phone Number'
                      value={this.state.emergencyContact.phoneNo}
                      onChangeText={(value) => this.setState({ phoneNo : value })}
                    />
              <TextInput
                      mode="outlined"
                      theme={{ colors: { primary: theme.colors.primary}}}
                      multiline={true}
                      label="Phone Number Home"
                      value={this.state.emergencyContact.phoneNoHome}
                      onChangeText={(value) => this.setState({ phoneNoHome : value })}
                    />
            </Card.Content>
          </Card>
            {/* Question 6 */}
            <Card style = {styles.card}>
              <Card.Content>
                <Text style={styles.questions}>My Doctor's contact detail are.</Text>
                <TextInput
                        mode="outlined"
                        theme={{ colors: { primary: theme.colors.primary}}}
                        multiline={true}
                        label="Name"
                        value={this.state.emergencyContact.name}
                        onChangeText={(value) => this.setState({ name : value })}
                      />
                <TextInput
                        mode="outlined"
                        theme={{ colors: { primary: theme.colors.primary}}}
                        multiline={true}
                        label="Profession"
                        value={this.state.emergencyContact.relationship}
                        onChangeText={(value) => this.setState({ relationship : value })}
                      />
                <TextInput
                        mode="outlined"
                        theme={{ colors: { primary: theme.colors.primary}}}
                        multiline={true}
                        label='Address'
                        value={this.state.emergencyContact.phoneNo}
                        onChangeText={(value) => this.setState({ phoneNo : value })}
                      />
                <TextInput
                        mode="outlined"
                        theme={{ colors: { primary: theme.colors.primary}}}
                        multiline={true}
                        label="Phone Number"
                        value={this.state.emergencyContact.phoneNoHome}
                        onChangeText={(value) => this.setState({ phoneNoHome : value })}
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
