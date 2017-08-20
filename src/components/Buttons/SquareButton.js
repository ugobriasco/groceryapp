import React from 'react';
import {
	TouchableOpacity, 
	View
} from 'react-native';
import Icon from  'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import styles from './styles';


const SquareButton = ({
	onPress, 
	iconName, 
	size, 
	color, 
	textColor, 
	borderColor,

}) => {

	const buttonSize = size ? parseInt(size) : 60
	const bgColor = color ? color : 'transparent'
	const txColor = textColor ? textColor : '#000'
	const borColor = borderColor ? borderColor : txColor

	let containerStyle = [styles.button_with_icon_container];
	let iconStyle = [styles.icon]

	containerStyle.push({backgroundColor: bgColor, borderColor: borColor});
	

	iconStyle.push({color: txColor});


	return(
		<TouchableOpacity style={containerStyle} onPress={onPress}>
			<View style={styles.button_with_icon_wrapper} >
				<Icon style={iconStyle} name={iconName} size={buttonSize}/>
			</View>
		</TouchableOpacity>
	);

	
};

SquareButton.PropTypes = {
	iconName: PropTypes.string,
	size: PropTypes.string,
	color: PropTypes.string,
	textColor: PropTypes.string,
	borderColor: PropTypes.string,
	onPress: PropTypes.func,
};

export default SquareButton;