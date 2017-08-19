import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import styles from './styles';

const EmptyListPlaceholder = (opt) => {

	let placeholder = (<View></View>);
	if (opt = 'empty-list') placeholder = (<Text style={styles.placeholderText}>Your list is empty!</Text>);
	if (opt = 'empty-filter') placeholder = (<Text style={styles.placeholderText}>No item found!</Text>);
	
	return(
		<View style = {styles.emptyListWrapper}>
			{placeholder}
		</View>
	);
}

export default EmptyListPlaceholder;