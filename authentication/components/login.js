
import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AsyncStorage } from 'react-native';

export default class Authentication extends React.Component {

    static navigationOptions = ({ navigation }) => ({
    });

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isError: false,
            error: '',
        }

    }

    render() {
        const { authenticating, user, error } = this.props;
        return (
            <View style={styles.viewstyle}>
                <View>
                    <Image source={require('../../../../assets/logo.png')} />
                </View>
                <Text style={styles.heading}> Welcome to Tribalist, best place to discover and create lists</Text>
                <Text style={styles.subHeading}>Log into your account  and get ready to get inspired </Text>
                <View style={{padding: 15}} />
                <TextInput
                    style={styles.inputemail}
                    placeholder='E-mail Address'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.inputpassword}
                    placeholder='Password'
                    secureTextEntry={true}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                />
                <View style={{padding:5}} />

                {this._renderLoginButton(authenticating)}

                {this._renderErrorMessage(authenticating, error)}

                <TouchableOpacity
                    style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 300 }}
                    onPress={this._gotoResetPassword}>
                    <Text style={{ fontFamily: 'avenir-next-bold', fontSize: 12, color: 'grey' }}>Forgot your password?</Text>
                </TouchableOpacity>

            </View>
        );
    }

    _renderLoginButton = (authenticating) => {
        if (authenticating) {
            return (
                <View
                    style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 300, backgroundColor: '#33d6fd', borderRadius: 5 }}>
                    <Text style={{ fontFamily: 'avenir-next-bold', fontSize: 16, color: 'white' }}> Please wait ...</Text>
                </View>
            )
        }
        else {
            return (
                <TouchableOpacity
                    style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 300, backgroundColor: '#33d6fd', borderRadius: 5 }}
                    onPress={this._doAuthenticate}>
                    <Text style={{ fontFamily: 'avenir-next-bold', fontSize: 16, color: 'white' }}>Log In</Text>
                </TouchableOpacity>
            )
        }
    }

    _renderErrorMessage = (authenticating, error) => {

        if (this.state.isError) {
            return (
                      <View style={{ borderWidth: 1, marginTop: 10,borderRadius: 10, borderColor: 'red',
                                    paddingBottom: 10,   alignItems: 'center',
                                    justifyContent: 'center', width: 300, marginBottom: 10}}>
                          <Text style={{ color: 'red', textAlign: 'center', padding: 12}}>
                              { this.state.error }
                          </Text>
                      </View>
                  )
          }
    }

    _gotoResetPassword = () => {
        this.props.navigation.navigate('resetPassword')
    }

    _doAuthenticate = async () => {
      var is_emailVerify =  this._verifyEmail()
      if(!is_emailVerify){
        return
      }
      var is_passVerify = this._verifyPassword()

      if(is_emailVerify && is_passVerify){
        const {authenticating,  authenticate, user , error} = this.props;
        authenticate(this.state.email, this.state.password);
        if(error){
          this._customError(error)
        } else {
          this.setState({isError: false })
        }
      }
    }

    _verifyEmail = () => {

      var email_ragex  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var is_email  = email_ragex.test(this.state.email)

      if(!this.state.email || !is_email){
        this.setState({isError: true, error: "Oops! That e-mail address doesn't appear to be valid."})
        return false
      } else {

          this.setState({isError: false})
        return true
      }
    }

    _verifyPassword = () => {
      var password_regex =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      var password_error = password_regex.test(this.state.password);
      if(!this.state.password || !password_error){
        this.setState({isError: true , error: "Oops! Your password must contain a number, a letter and be at least 6 characters long."})
        return false
      } else {
        this.setState({isError: false , error: ""})
        return true
      }
    }
    _customError = (error) => {
      if(error){
        this.setState({isError: true , error: error})
      }
    }

}
