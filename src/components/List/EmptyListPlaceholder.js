import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import styles from './styles';

const EmptyListPlaceholder = ({_opt}) => {

	let placeholder = (<View><Text>{_opt}</Text></View>);
	if (_opt == 'empty-list') placeholder = (<Text style={styles.placeholderText}>Your list is empty!</Text>);
	if (_opt == 'empty-filter') placeholder = (<Text style={styles.placeholderText}>No item found! You may add a new one</Text>);
	
	return(
		<View style = {styles.emptyListWrapper}>
			{placeholder}
		</View>
	);
}

export default EmptyListPlaceholder;