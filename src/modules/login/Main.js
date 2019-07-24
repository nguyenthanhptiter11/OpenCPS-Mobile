import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import bgImage from '../../../assets/photo-bg-resized-5.png'
import logo from '../../../assets/opencps_img.jpg'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import KeyboardShift from './KeyboardShift';

const { width: WIDTH } = Dimensions.get('window')

export default class AssetExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPass: false,
      textUserName: '',
      textPassword: '',
      messageLoginErr: ''
    };
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin (isBtnSubmit) {
    if (isBtnSubmit || (this.state.textUserName && this.state.textPassword)) {
      if (this.state.textUserName === 'abc' &&
        this.state.textPassword === 'abc'
      ) {
        this.setState({ messageLoginErr: 'to do: set login success => redirect to main!!!'});
      } else {
        this.setState({ messageLoginErr: 'todo: incorrect user => would you like registry???'});
      }
    } else {
      this.setState({ messageLoginErr: ''});
    }
  }


  render() {

    const {
			restartState
		} = this.props;

    return (
      <ImageBackground source={bgImage}
        style={styles.backgroundContainer}>

        <View style={styles.logoContainer}>
          <Image size={128}  style={styles.logo} source={require('../../../assets/opencps_img.jpg')} />
          
          <Text style={styles.logoText}>OPENCPS</Text>
        </View>

        <View style={styles.keyboardShiftH}>
          <KeyboardShift>
            {() => (
              <View>
            
                <View style={styles.inputContainer}>
                  <MaterialIcons style={styles.inputIcon}
                    name={"person-outline"}
                    size={28}
                    color={'rgba(255, 255, 255, 0.7)'}
                  />
                  
                  <TextInput
                    style={styles.input}
                    placehoder={"User name"}
                    placehoderTextColor={"rgba(255, 255, 255, 0.7)"}
                    underlineColorAndroid="transparent"
                    autoCapitalize = 'none'
                    onChangeText={(textUserName) => this.setState({textUserName})}
                    value={this.state.textUserName}
                    blurOnSubmit={true}
                    onSubmitEditing={() => this.submitLogin(false)}
                  />
                  
                </View>

                <View style={styles.inputContainer}>
                  <MaterialIcons style={styles.inputIcon}
                    name={"lock-outline"}
                    size={28}
                    color={'rgba(255, 255, 255, 0.7)'}
                  />
                  <TextInput
                    style={styles.input}
                    placehoder={"Password"}
                    placehoderTextColor={"rgba(255, 255, 255, 0.7)"}
                    underlineColorAndroid="transparent"
                    autoCapitalize= 'none'
                    secureTextEntry={!this.state.showPass}
                    onChangeText={(textPassword) => this.setState({textPassword})}
                    value={this.state.textPassword}
                    blurOnSubmit={true}
                    onSubmitEditing={() => this.submitLogin(false)}
                  />
                  <TouchableOpacity
                    style={styles.buttonEye}
                    onPress={() => {
                      this.setState({
                        showPass: !this.state.showPass
                      })
                    }}
                  >
                    <MaterialCommunityIcons
                      name={this.state.showPass ? "eye-off" : "eye"}
                      size={28}
                      color={'rgba(255, 255, 255, 0.7)'}
                    />
                  </TouchableOpacity>
                </View>

              </View>

            )}
          </KeyboardShift>
        </View>
      
        { this.state.messageLoginErr.length > 0  &&
          <Text style={styles.errorText}>
            <MaterialIcons
              name={"warning"}
              size={28}
              color={'rgba(255, 255, 255, 0.5)'}
            />
            {this.state.messageLoginErr}
          </Text>
        }

        <View>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.submitLogin(true)}
          >
            <Text
              style={styles.buttonText}
            >Login
            </Text>
          </TouchableOpacity>
        </View>

        <View>
        
          <TouchableOpacity
            style={styles.button}
            onPress={restartState}
          >
            <Text
              style={styles.buttonText}
            >Reset intro
            </Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    alignItems: 'center'
  },
  logo: {
    height: 128,
    width: 128,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity:0.5
  },
  inputContainer: {
    marginTop: 16
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 10, left: 37
  },
  buttonEye: {
    position: 'absolute',
    top: 10, right: 37
  },
  button: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(88, 68, 237)'
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30
  },
  keyboardShiftH: {
    height: 135,
    width: WIDTH
  },
  errorText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 16
  }
});
