import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from  'react-native-vector-icons/MaterialIcons';

const TextWithIcon = ({text, backgroundColor, textColor, iconName}) => {

	let wrapperStyle = [styles.text_with_icon_box];
	let textStyle = [styles.text_with_icon_text];
	let iconStyle = [styles.text_with_icon_icon];

	if(backgroundColor) wrapperStyle.push({backgroundColor: backgroundColor});
	if(textColor) { textStyle.push({color: textColor})};
	
	return (
		<View style={wrapperStyle}>
			<Icon style={iconStyle} name={iconName} size={40} color={textColor}/>
			<Text style={textStyle}>{text}</Text>
        </View>
	);	
}

TextWithIcon.PropTypes = {
	text: PropTypes.string,
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	iconName: PropTypes.string,
}

export default TextWithIcon;




