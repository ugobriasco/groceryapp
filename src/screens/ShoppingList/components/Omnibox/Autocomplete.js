import React from 'react';
import {
	View,
	FlatList,
} from 'react-native';
import styles from './styles';

import HorizontalListItem from './HorizontalListItem';

const Autocomplete = (props) => {

	const {onAutocompletePress, data } = props;

	return(
		<FlatList
			style = {styles.hor_list}
			horizontal={true}
			
			keyboardShouldPersistTaps='always'
		  	data={data}
		  	renderItem={({item}) => (
		  		<HorizontalListItem
		  			 title={`${item.name.it.main} ${item.name.it.spec}`}
		  			 onPress = {() => {onAutocompletePress(item)}}
		  		/>
		  	)}
		  	keyExtractor = {item => item._id}
		  	{...props}
		  	 			
		/>	
	);
}

export default Autocomplete;