import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { inputPlaceholder } from '../utils/Colors';

const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
	<View style={{ 
		paddingTop: 10,
		paddingRight: 15
	  }}>
	<TextInput
		style={styles.input}
		value={inputValue}
		onChangeText={onChangeText}
		placeholder="Type here to add note."
		placeholderTextColor={inputPlaceholder}
		multiline={true}
		autoCapitalize="sentences"
		underlineColorAndroid="transparent"
		selectionColor={'white'}
		maxLength={30}
		returnKeyType="done"
		autoCorrect={false}
		blurOnSubmit={true}
		onSubmitEditing={onDoneAddItem}
	/>
	  </View>
);

const styles = StyleSheet.create({
	input: {
		fontSize: 24,
		color: 'white',
		fontWeight: '500',

		borderWidth: 2,  // size/width of the border
		borderColor: 'lightgrey',  // color of the border,
		borderRadius: 10,
		paddingLeft: 10,
		height: 75
	}
});

export default Input;