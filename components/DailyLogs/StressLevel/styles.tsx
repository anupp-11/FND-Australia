import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    page: {
      padding :10,
      marginBottom: 20
        //padding: 20,
      },
      root: {
        marginTop:10,
        
        
        fontSize: 18,
        color:'#223263'
      },
      container: {
        display : 'flex',
        flexDirection : 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop : 20,
        paddingHorizontal : 20,
        marginBottom: 20
      },
      Txtcontainer: {
        display : 'flex',
        flexDirection : 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal : 15,
        marginBottom: 10
      },
      input :{
        width: '100%',
        height: 44,
        backgroundColor: '#f1f3f6',
        borderRadius: 6,
        paddingHorizontal : 10,
      }
});

export default styles;
