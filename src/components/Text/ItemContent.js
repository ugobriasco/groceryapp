import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ItemContent = ({title, subtitle1, subtitle2, color}) => {

	const titleStyle = [styles.item_title_text];
	const subtitleStyle = [styles.item_subtitle_text];

	if(color) {
		titleStyle.push({color: color});
		subtitleStyle.push({color: color});
	}

	return (
			<View style={styles.item_content_box}>
				<Text style = {titleStyle}>{title}</Text>
				<Text style = {subtitleStyle}>{subtitle1}</Text>
				<Text style = {subtitleStyle}>{subtitle2}</Text>
			</View>
	);	

}

export default ItemContent;