import React from 'react';
import {
	View,
	TextInput,
	Button,	
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from  'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Omnibox = (props) => {

	const { onPress, value,  } = props;

	return(
		<View style={styles.container}>
			<View style={styles.inputform_wrapper}>
				<TextInput
					style={styles.inputform}
					value={ value }
					placeholder='Add an item or Search'
					blurOnSubmit={false}
					{...props} 
				/>
			</View>
			<View style={styles.button_wrapper}>
				<Button
					color='#18bc9c'
					title="add"
					onPress={onPress}
				/>
			</View>
		</View>

	);
};

Omnibox.PropTypes = {
	onPress: PropTypes.func,

};



export default Omnibox;