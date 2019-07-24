import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import bgImage from '../../../assets/photo-bg-resized-5.png'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


/**
 * All screens need to be added here
 */
import AppIntro from './AppIntro'

const { width: WIDTH } = Dimensions.get('window')

export default class AssetExample extends React.Component {

  render() {
    return (
      <ImageBackground source={bgImage}
      style={styles.backgroundContainer}>
        <View>
          <AppIntro setIntroState={this.props.setIntroState}/>
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
  }
});
