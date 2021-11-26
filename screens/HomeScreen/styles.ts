import {StyleSheet} from 'react-native';
import { theme } from '../../components/LoginComponents/theme';

const styles = StyleSheet.create({

  container:{
    marginTop: 40,
    marginLeft:10,
  },
      
      header : {
        fontWeight: '700',
        fontSize: 26,
        color: theme.colors.primary
      },
      titletxt :{
        fontWeight: '700',
        fontSize: 16,
        color: theme.colors.secondary
      },
      
      name : {
        display: 'flex',
        flexDirection :'row',
        fontWeight: '700',
        fontSize: 16,
        color: theme.colors.secondary
      }
});

export default styles;
