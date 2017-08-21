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
			style = {{flex: 0.1, backgroundColor: 'transparent'}}
			horizontal={true}
		  	data={data}
		  	renderItem={({item}) => (
		  		<HorizontalListItem
		  			 title={item.name.it.main}
		  			 onPress = {() => {onAutocompletePress(item)}}
		  		/>
		  	)}
		  	keyExtractor = {item => item._id}
		  	 			
		/>	
	);
}

export default Autocomplete;