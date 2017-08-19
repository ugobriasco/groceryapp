import React from 'react';
import {
	View
} from 'react-native';
import Icon from  'react-native-vector-icons/MaterialIcons';
import styles from './styles';


const Checkbox = ({isChecked, onPress}) => {

	let iconName = isChecked === true ? 'check-box' : 'check-box-outline-blank';

	return(
		<View style={styles.checkbox_container}>
			<Icon.Button
				name={iconName}
				color='#777'
				backgroundColor ='rgba(0,0,0,0)'
				underlayColor ='rgba(0,0,0,0)'
				size = {30}
				iconStyle={{marginLeft: -10, marginRight: 0}}
				activeOpacity={1}
				borderRadius={5}
				onPress={onPress}
			/>
		</View>


	);
};

export default Checkbox;