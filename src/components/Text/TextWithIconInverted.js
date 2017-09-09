import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from  'react-native-vector-icons/MaterialIcons';

const TextWithIconInverted = ({text, backgroundColor, textColor, iconName}) => {

	let wrapperStyle = [styles.text_with_icon_inverted_box];
	let textStyle = [styles.text_with_icon_inverted_text];
	let iconStyle = [styles.text_with_icon_inverted_icon];

	if(backgroundColor) wrapperStyle.push({backgroundColor: backgroundColor});
	if(textColor) { textStyle.push({color: textColor})};
	
	return (
		<View style={wrapperStyle}>
			<Text style={textStyle}>{text}</Text>
			<Icon style={iconStyle} name={iconName} size={40} color={textColor}/>	
        </View>
	);	
}

TextWithIconInverted.PropTypes = {
	text: PropTypes.string,
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	iconName: PropTypes.string,
}

export default TextWithIconInverted;




