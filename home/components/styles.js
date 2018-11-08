import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        paddingTop: 0,
    },
    tabItem: {
        flex: 1,
        alignItems: 'flex-end',
        padding: 16,
    },
    tabItemText: {
        color: 'grey',
        fontFamily: 'avenir-next-medium',
        fontSize: 14
    },
    iconTouchable: {
      flexDirection: 'row',
      borderWidth:1,
      borderColor:'#ddd',
      alignItems:'center',
      justifyContent:'center',
      width:50,
      height:50,
      backgroundColor:'#dddddd',
      borderRadius: 50,
    },
    circleImage: {
      borderWidth:1,
      borderColor:'#ddd',
      alignItems:'center',
      justifyContent:'center',
      width: 100,
      height:100,
      borderRadius: 50,
    },
    searchSection: {
        flexDirection: 'row',
        height: 40,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        height: 20,
        backgroundColor: '#dddddd',
        color: '#424242',
    },
    circleImage: {
      marginLeft: 5,
      borderWidth: 3,
      borderColor:'#ddd',
      alignItems:'center',
      justifyContent:'center',
      width:70,
      height: 70,
      borderRadius: 70/2,
    },
    topTribeFlex:{
      flex: 1
    },
    topTribeMain:{
       backgroundColor: '#33d6fd',
       paddingTop: 10,
       paddingBottom: 10
    },
    topTribeTitle:{
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'avenir-next-medium',
    },
    topTribeText:{
      textAlign: 'left',
      justifyContent:'center',
      color: '#fff',
      fontFamily: 'avenir-next-medium'
    },
    topTribeView:{
      paddingTop: 5,
      padding: 10,
      flex: 1
    },
    flatList:{
       height: 200,
       padding: 3,
       paddingRight: 30,
       paddingLeft: 8
    },
    topTribeUser:{
      textAlign: 'center',
      paddingBottom: 10,
      width: 80,
      marginLeft: -4,
    },
    textCircle:{
      alignSelf: 'center',
      borderWidth: 3,
      borderColor:'#ddd',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#fff',
      padding: 15,
      paddingTop: 25,
      width:70,
      height: 70,
      borderRadius: 35,
      overflow: 'hidden'
    }
});
