import {StyleSheet} from 'react-native';
import { theme } from '../../LoginComponents/theme';

const styles = StyleSheet.create({
    page: {
        padding: 10,
      },
      root: {
        marginTop:10,
        
        
        fontSize: 18,
        color:'#223263'
      },
      container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"
      },

      input :{
        width: '100%',
        height: 44,
        backgroundColor: '#f1f3f6',
        borderRadius: 6,
        paddingHorizontal : 10,
      },
      selectedOption: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight:'700'
      },
      unselectedOption: {
        fontSize: 18,
        color: theme.colors.primary,
        textAlign: 'center',
      },
      unselected: {
        backgroundColor: 'white',
        borderWidth : 2,
        borderColor : theme.colors.primary,
        borderRadius: 25,
        width:50,
        height:50,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
        //paddingHorizontal:10,
      },
      selected: {
        backgroundColor: 'white',
        borderWidth : 10,
        borderColor : theme.colors.primary,
        borderRadius: 25,
        width:53,
        height:53,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
});

export default styles;
