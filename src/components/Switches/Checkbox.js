import React from 'react';
import {
	View
} from 'react-native';
import Icon from  'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import PropTypes from 'prop-types';

const Checkbox = ({isChecked, onPress, size}) => {

	let iconName = isChecked === true ? 'check-box' : 'check-box-outline-blank';

	return(
		

			<Icon.Button
				name={iconName}
				color='#777'
				backgroundColor ='rgba(0,0,0,0)'
				underlayColor ='rgba(0,0,0,0)'
				size = {size ? parseInt(size) : 30}
				iconStyle={{marginLeft: 0, marginRight: 0}}
				activeOpacity={1}
				borderRadius={5}
				onPress={onPress}
			/>




	);
};

Checkbox.PropTypes = {
	isChecked: PropTypes.bool,
	onPress: PropTypes.func,
	size: PropTypes.string
}

export default Checkbox;