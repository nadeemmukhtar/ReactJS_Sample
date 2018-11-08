
import React from 'react';
import { Platform , View, Image, Button, Text, TextInput, TouchableOpacity, Modal , ImageBackground, ScrollView, ActivityIndicator} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Camera, Permissions } from 'expo';
import ActionSheet from 'react-native-actionsheet';

import Icon from '@expo/vector-icons/FontAwesome';


import { styles } from './styles';

export default class SignUp extends React.Component {

      static navigationOptions = ({ navigation }) => ({
      });

    constructor(props) {
        super(props);
        this.state = {
            imgUri: '',
            image_base64: '',
            modalVisible: false,
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
            invalidemail: false,
            invalidname: false,
            invalidpassword: false,
            invalidconfirmpassword: false,
            isError:  false,

        }

    }

    render() {
            const {loading , user, errors } = this.props;
            if(loading){
                return(
                  <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                      <ActivityIndicator size="large" color="#33d6fd"/>
                 </View>
               )
            } else {
              return (
                  <View style={styles.signStyleview}>

                      <View>
                          <Image style={{width: 180, height: 40 }} resizeMode="contain" source={require('../../../../assets/logo.png')} />
                      </View>

                      <KeyboardAwareScrollView enableOnAndroid={true}  contentContainerStyle={{ flexGrow: 1 }}  scrollEnabled={true}>
                      <Text style={styles.signupheading}> Welcome to best guides on the web!</Text>
                      <Text style={styles.signupsubHeading}>Complete the following to get started </Text>

                          { this._renderAvatar() }
                          { this._renderModal() }

                          <View style={{ padding: 10 }} />

                          <TextInput
                              style={this.state.invalidname? styles.inputerror: styles.inputpassword  }
                              placeholder='Username'
                              underlineColorAndroid='rgba(0,0,0,0)'
                              onChangeText = {(text) => this.setState({name: text})}
                              value={this.state.name}
                          />
                          <TextInput
                              style={this.state.invalidemail? styles.inputerror: styles.inputpassword }
                              placeholder='E-mail Address'
                              type="email-address"
                              underlineColorAndroid='rgba(0,0,0,0)'
                              onChangeText = {(text) => this.setState({email: text})}
                              value={this.state.email}
                          />
                          <TextInput
                              style={this.state.invalidpassword? styles.inputerror: styles.inputpassword}
                              placeholder='Password'
                              underlineColorAndroid='rgba(0,0,0,0)'
                              onChangeText = {(text) => this.setState({password: text})}
                              secureTextEntry={true}
                              value={this.state.password}
                          />
                          <TextInput
                              style={this.state.invalidconfirmpassword? styles.inputerror : styles.inputpassword}
                              placeholder='Confirm Password'
                              underlineColorAndroid='rgba(0,0,0,0)'
                              secureTextEntry={true}
                              onChangeText = {(text) => this.setState({confirmpassword: text})}
                              value={this.state.confirmpassword}
                          />
                          <View style={{padding:5}} />
                          { this._renderRegiterButton(loading,  user, errors) }
                          <View style={{ paddingTop: 10}} />
                            { this._renderErrorMessage() }
                      </KeyboardAwareScrollView>
                    </View>
              )
        }
    }

    _renderAvatar = () => {
      return(
            <View style={{ alignItems:'center',
              justifyContent:'center'}}>
              <View  style={styles.mainTouchable}>
                  { this._renderImage() }
              </View>

            <TouchableOpacity
              onPress={() => this.ActionSheet.show()}
              style={{ borderRadius: 75, marginTop: -35, marginLeft: 75}} >
                <Icon name="plus-circle" size={35} style={{ color: "#33d6fd"}} />
            </TouchableOpacity>
          </View>
      )
    }

    _renderImage = () => {
      if( this.state.imgUri ) {
        return(
          <Image
              style={ styles.circleImage}
              source= {{uri:  this.state.imgUri }} >
          </Image>
        )
      }
    }

    _renderRegiterButton = (loading,  user, errors) =>{
        return(
          <TouchableOpacity
              style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 50, width: 300,
                  backgroundColor: '#33d6fd',
                  borderRadius: 5
              }}
              onPress={() => this._registerUser(user, errors)}>
              <Text style={{ fontFamily: 'avenir-next-bold', fontSize: 16, color: 'white' }}>Sign Up</Text>
          </TouchableOpacity>
        )
    }

    _renderErrorMessage = () => {
        if(this.state.isError) {
          return(
                <View style={{ borderWidth: 1, borderRadius: 10, borderColor: 'red',
                              paddingBottom: 10,   alignItems: 'center',
                              justifyContent: 'center', width: 300, marginBottom: 10}}>
                    <Text style={{ color: 'red', textAlign: 'center', padding: 12}}>
                        { this.state.errors }
                    </Text>
                </View>
          )
        }
    }

    _registerUser = async (user, errors) => {

        var name_validation =   this._validate_username();

        if(name_validation){
          return
        }

        var email_validate = this._validate_email()
        if(email_validate){
          return
        }

        var password_validation = this._validate_password()
        if (password_validation){
          return
        }

        var con_password_validation = this._validate_confirm_password()

        if(con_password_validation){
          return
        }

        if(!name_validation && !email_validate && !password_validation &&  !con_password_validation){
              const { registration } = this.props;
              console.log(this.state.image_base64);
              registration(this.state.name, this.state.email, this.state.password, this.state.image_base64);

              if(user && !errors){
                  this.setState({isError: true})
                  this.props.navigation.navigate("login");
              } else {
                this._customErrors(errors)
              }
          }
    }


    _renderModal = () => {
        return(
              <ActionSheet
                  ref={ o => this.ActionSheet = o }
                  title={'Select source'}
                  options = { ['Camera', 'Photo Library', 'Cancel'] }
                  cancelButtonIndex={2}
                  onPress={(index) => {
                      if (index == 1) {
                          this._showPhotoLibrary()
                      }
                  }}
          />
        )
    }

    _showPhotoLibrary = async() => {
        if (Platform.OS == 'ios') {
            const permission = Permissions.CAMERA_ROLL;
            const { status } = await Permissions.askAsync(permission);

            if (status == 'granted') {
                const response = await Expo.ImagePicker.launchImageLibraryAsync({ base64: true , allowsEditing: true});
                if (!response.cancelled) {
                    this.setState({ imgUri: response.uri, image_base64: response.base64});
                }
            }
        }
        else {
            const response = await Expo.ImagePicker.launchImageLibraryAsync({ base64: true , allowsEditing: true});
            if (!response.cancelled) {
               var url = "data:image/jpeg;base64," + response.base64
                this.setState({ imgUri: response.uri , image_base64: url});
            }
        }
    }

 // Start Validate Inputs
  _validate_username = () => {
      var nameValide = true
      var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      var special_errors = format.test(this.state.name)
      var space_erorr =   /\S/.test(this.state.name)
      console.log(this.state.name);
      if(!this.state.name || this.state.name.length < 3 || special_errors){
          this.setState({invalidname: true,  isError: true , errors: " Oops! Your username should be between 3-30 characters long and not include spaces or special characters."})
      } else {
          nameValide = false
          this.setState({invalidname: false,  isError: false})
      }
      return nameValide
  }

  _validate_email = () => {
      var email_validation = true
      var email_ragex  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var is_email  = email_ragex.test(this.state.email)
      if(!this.state.email || !is_email){
          this.setState({invalidemail: true,  isError: true , errors: "  Oops! That e-mail address doesn't appear to be valid."})
      } else {
          email_validation = false
          this.setState({invalidemail: false,  isError: false})
      }
      return email_validation
  }

  _validate_password = () => {
    var password_validation = true
    var password_regex =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    var password_error = password_regex.test(this.state.password);
    if(!this.state.password || !password_error){
        this.setState({invalidpassword: true,  isError: true , errors: "   Oops! Your password must contain a number, a letter and be at least 6 characters long."})
    } else {
        password_validation = false
        this.setState({invalidpassword: false,  isError: false})
    }
    return password_validation
  }

  _validate_confirm_password = () => {
    var confirmpassword_validation = true
    if(!this.state.confirmpassword || (this.state.password !== this.state.confirmpassword)){
        this.setState({invalidconfirmpassword: true,  isError: true , errors: "Oops! Looks like those passwords don't match."})
    } else {
        confirmpassword_validation = false
        this.setState({invalidconfirmpassword: false,  isError: false})
    }
    return confirmpassword_validation
  }

  _customErrors = (errors) => {
    if(errors){
      var email_error = errors.email
      var name_error =  errors.name
      var password_error = errors.password
      if(name_error){
        this.setState({isError: true , errors: name_error[0]})
        return
      }
      if(email_error){
        this.setState({isError: true , errors: email_error[0]})
        return
      }
      if(password_error){
        this.setState({isError: true , errors: password_error[0]})
      }
    }
  }
 // End Validate inputs
}
