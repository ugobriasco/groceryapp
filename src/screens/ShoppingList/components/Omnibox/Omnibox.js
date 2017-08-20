import React from 'react';
import {
	View,
	TextInput,
	Button,	
} from 'react-native';
import PropTypes from 'prop-types';
import {SquareButton} from '../../../../components/Buttons';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './styles';

const Omnibox = (props) => {

	const { onPress, value } = props;

	return(
		<View style={styles.container}>
			<View style={styles.inputform_wrapper}>
				<TextInput
					style={styles.inputform}
					placeholder='Add an item or Search'
					blurOnSubmit={false}
					{...props} 
				/>
			</View>
			<View style={styles.button_wrapper}>
				<SquareButton
				iconName = 'add'
				size = '35'
				borderColor = 'transparent'
				color = {_styles.$primary}
				textColor = {_styles.$white}
				onPress = {onPress}
			/>	
			</View>
		</View>

	);
};

Omnibox.PropTypes = {
	onPress: PropTypes.func,
	value: PropTypes.string,
};

export default Omnibox;

const _styles = EStyleSheet.create({
  	$primary: '$brandingBackground',
  	$danger: '$dangerBackground',
  	$gray: '$primaryBoxColor',
  	$white: '#ffff',

});