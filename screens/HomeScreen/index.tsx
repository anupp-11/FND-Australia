import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("News")}>
        <View style={styles.cardBody}>
        <Image
          style={{height:40,width:40}}
          source={require('../../assets/icons/news.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          News
        </Text>
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Services")}>
        <View style={styles.cardBody}>
          <Image
          style={{height:50,width:50}}
          source={require('../../assets/icons/service.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          Services
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("ContactUs")}>
        <View style={styles.cardBody}>
        <Image
          style={{height:50,width:50}}
          source={require('../../assets/icons/support.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          Support Us
        </Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("ContactUs")}>
        <View style={styles.cardBody}>
        <Image
          style={{height:50,width:50}}
          source={require('../../assets/icons/contact-mail.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          Contact Us
        </Text>
      </TouchableOpacity>
      

      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("FollowUs")}>
        <View style={styles.cardBody}>
        <Image
          style={{height:50,width:50}}
          source={require('../../assets/icons/follow.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          Follow Us
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("ContactUs")}>
        <View style={styles.cardBody}>
        <Image
          style={{height:50,width:50}}
          source={require('../../assets/icons/pantry.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          People's Pantry
        </Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default HomeScreen;
