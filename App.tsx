import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';
import { Provider, connect } from 'react-redux';
import mapDispatchToProps from './src/store/common/actions';
import store from './src/store/common/reducers';

// data from store
import AppScreen from './src/AppScreen';

const mapStateToProps = state => {
  return { ...state };
};

const ConnectedAppScreen = connect(mapStateToProps, mapDispatchToProps)(AppScreen);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedAppScreen />
      </Provider>
    );
  }
}

