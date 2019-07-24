import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image , Alert} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { LinearGradient } from 'expo';
// data from store
import AsyncStorageUtils from '../utils/AsyncStorageUtils';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const slides = [
  {
    key: 'requiredStep',
    title: 'Step 1',
    text: 'text step 1',
    icon: 'ios-images-outline',
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: 'requiredStep2',
    title: 'Step 2',
    text:
      'text step 2',
    icon: 'ios-options-outline',
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'requiredStep3',
    title: 'Step 3',
    text: 'Text step 3',
    icon: 'ios-beer-outline',
    colors: ['#29ABE2', '#4F00BC'],
  },
];

export default class AppIntro extends React.Component {
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };
  _renderItem = (props) => {
    return (
      <LinearGradient
        style={[
          styles.mainContent
        ]}
        colors={props.item.colors}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0.1, y: 1 }}
      >
        <Image
          style={styles.image}
          source={require('../../../assets/opencps_img.jpg')}
        />
        <View>
          <Text style={styles.title}>{props.item.title}</Text>
          <Text style={styles.text}>{props.item.text}</Text>
        </View>
      </LinearGradient>
    );
  }

  _onDone = async () => {
    let item = {};
    item[AsyncStorageUtils.checkIntroKey] = true;
    this.props.setIntroState(item)
  }

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderItem={this._renderItem}
        onDone={this._onDone}
      />
    );
  }
}