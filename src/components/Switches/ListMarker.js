import React from 'react';
import { View } from 'react-native';
import styles from './styles'; 
import Icon from  'react-native-vector-icons/MaterialIcons';


const ListMarker = ({isChecked, color}) => {

	let icon = (<View></View>);
	
	if(isChecked){
		icon = (<Icon
			name='shopping-cart'
			color={color}
			backgroundColor='rgba(0,0,0,0)'
			size = {30}
		/>);
	}

	return(
		<View style={styles.listmarker_container}>
			{icon}	
		</View>


	);
}

export default ListMarker;