import React from 'react';
import { 
	View,
	TouchableOpacity,
	Image,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';



//this is a stateless component
const Header = ({onPress}) => (
	
	<View style={styles.container}>
		<TouchableOpacity style={styles.button} onPress={onPress} >
			<Image resizeMode="contain" style={styles.icon} source={require('./images/gear.png')}/>
		</TouchableOpacity>
	</View>

);

Header.PropTypes = {
	onPress: PropTypes.func
	
};

export default Header;



