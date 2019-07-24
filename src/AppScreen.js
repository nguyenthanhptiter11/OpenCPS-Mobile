import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';

// data from store
import AsyncStorageUtils from './modules/utils/AsyncStorageUtils';
// You can import from local files
import Login from './modules/login/Main';
import Intro from './modules/Intro/Main';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      isIntro: false
    };
    this._setAppState();
  }

  async _setAppState() {

    const store = await AsyncStorageUtils.getAllAsynStorage();
    // TODO: check sesion expired date
    let isLogin = store && store[AsyncStorageUtils.checkLoginKey];
    let isIntro = store && store[AsyncStorageUtils.checkIntroKey];

    this.props.setIntroState({
      isIntro: isIntro,
      isLogin: isLogin
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.props.isIntro &&
          <Intro setIntroState={this.props.setIntroState}/>
        }
        {this.props.isIntro && !this.props.isLogin &&
          <Login
            restartState={this.props.restartState}
            setLoginState={this.props.setLoginState}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 0,
  }
});
