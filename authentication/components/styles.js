
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';


export const styles = StyleSheet.create({
    flex:{
      flex: 1,
    },
    viewstyle:{
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      paddingTop: 20,
    },
    signStyleview:{
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
      width: 300
    },
    signupheading:{
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 5,
      width: 320
    },
    signupsubHeading:{
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
      paddingTop: 5,
      width: 320
    },
    screenpadding:{
      paddingTop: 10,
      flex: 1,
      alignItems: 'center',
    },
    subHeading:{
      fontSize: 16,
      textAlign: 'center',
      paddingLeft: 4,
      paddingRight: 4,
      padding: 10,
      width: 300
    },
    loginbox: {
      flex: 1,
      backgroundColor: 'red',
   },
   inputemail: {
     width: 300,
     height: 50,
     borderRadius: 5,
     borderWidth: 0.5,
     borderColor: 'gray',
     textAlign: 'center',
   },
   inputpassword: {
     width: 300,
     height: 50,
     borderRadius: 5,
     borderWidth: 0.5,
     borderColor: 'gray',
     textAlign: 'center',
     marginTop: 10,
   },
   button: {
     flex: 1,
     backgroundColor: '#ddd',
     width: 100
  },
  container: {
   flex: 1,
   height: 500,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 button: {
   backgroundColor: 'lightblue',
   padding: 12,
   margin: 16,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 4,
   borderColor: 'rgba(0, 0, 0, 0.1)',
 },
 modalContent: {
   backgroundColor: 'white',
   padding: 22,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 4,
   borderColor: 'rgba(0, 0, 0, 0.1)',
   bottom: 10,
   left: 0,
   right: 0,
   position: "absolute"
 },
 bottomModal: {
   justifyContent: 'flex-end',
   margin: 0,
 },
 textHeader:{
   fontSize: 20,
   fontWeight: 'bold',
 },
 mainTouchable: {
   flexDirection: 'row',
   borderWidth:1,
   borderColor:'#ddd',
   alignItems:'center',
   justifyContent:'center',
   width:100,
   height:100,
   backgroundColor:'#dddddd',
   borderRadius: 50,
 },

 circleImage: {
   borderWidth:1,
   borderColor:'#ddd',
   alignItems:'center',
   justifyContent:'center',
   width:100,
   height:100,
   borderRadius: 50,
 },
 inputerror: {
   width: 300,
   height: 50,
   borderRadius: 5,
   borderWidth: 0.5,
   marginTop: 10,
   borderColor: 'red',
   textAlign: 'center',
 },

});
