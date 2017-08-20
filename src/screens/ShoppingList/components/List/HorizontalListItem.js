import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
import PropTypes from 'prop-types';
import color from 'color';


const HorizontalListItem = ({title, onPress}) => {

	const containerStyles = [styles.hor_item_container];	
	containerStyles.push({backgroundColor: color(_styles.$primary).alpha(0.5)});

	const textStyles = [styles.hor_item_text];
	textStyles.push({color: color(_styles.$primary).darken(0.5)});
	
	return(
		<TouchableOpacity style={containerStyles} onPress={onPress}>
			<View >
				<Text style={textStyles}>{title}</Text>
			</View>
		</TouchableOpacity>


	);
}

HorizontalListItem.PropTypes = {
	title: PropTypes.string,
	onPress: PropTypes.func,
}

const _styles = EStyleSheet.create({
  	$primary: '$brandingBackground',
  	$gray: '$primaryBoxColor',
  	$white: '#ffff',

});

export default HorizontalListItem;


