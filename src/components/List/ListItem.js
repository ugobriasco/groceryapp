import React from 'react';
import { 
	View,
	Text,
	TouchableHighlight,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';



//this is a stateless component
const ListItem = ({
	text, 
	onPress,
	customIcon = null,  
}) => {

	

	//the props property can be passed to a child component by using ...props
	return(
		<TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
			<View style={styles.row} >
				<Text style={styles.text} >{text}</Text>
				{customIcon}
			</View>
		</TouchableHighlight>

	);

};

ListItem.PropTypes = {

	text: PropTypes.string,
	onPress: PropTypes.func,
	customIcon: PropTypes.element,
	
};

export default ListItem;