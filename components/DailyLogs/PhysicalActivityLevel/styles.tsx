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
      option: {
        fontSize: 20,
        color: theme.colors.primary,
        textAlign: 'center',
        display: 'flex',
        flexDirection :'row',
        alignItems:'center',
        justifyContent:'center'
      },
      unselected: {
        backgroundColor: 'white',
        borderWidth : 2,
        borderColor : theme.colors.primary,
        borderRadius: 10,
        margin: 5,
        display: 'flex',
        flexDirection :'row',
        alignItems:'center',
        justifyContent:'center'
        //padding: 5
      },
      selected: {
        color: 'white',
        backgroundColor: theme.colors.primary,
        margin: 6,
        padding: 5,
        borderRadius: 10,
        display: 'flex',
        flexDirection :'row',
        alignItems:'center',
        justifyContent:'center'
      },
});

export default styles;
