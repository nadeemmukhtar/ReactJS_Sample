
import React from 'react';
import { View, Image, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default class ResetPassword extends React.Component {

  onPress = () => {
    console.log("button");
  }

    render() {
        return (
          <View style={styles.viewstyle}>
                <View>
                    <Image style={{width: 180, height: 40 }} resizeMode="contain" source={require('../../../../assets/logo.png')} />
                </View>
                <Text style={styles.heading}> Reset your Password</Text>
                <Text style={styles.subHeading}>Enter your account E-mail address and we will send the info you need.</Text>
                <View style={{padding: 15}} />
                <TextInput
                    style={styles.inputemail}
                    placeholder='E-mail Address'
                    underlineColorAndroid='rgba(0,0,0,0)'
                />
                <View style={{padding:5}} />
                <TouchableOpacity
                   style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 300, backgroundColor: '#dddddd', borderRadius: 5 }}
                   onPress={() => console.warn('Pressed')}>
                   <Text style={{ fontFamily: 'avenir-next-bold', fontSize: 16, color: 'white' }}>
                     Send a password reset email
                   </Text>
                </TouchableOpacity>

          </View>
        )
    }
}
