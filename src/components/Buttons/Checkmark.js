import React from 'react';
import { 
	View,
	TouchableHighlight,
	Image

} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';


//this is a stateless component
const Icon = ({checkmark = true, isVisible, iconBackground}) => {

	const iconStyles = [styles.checkmark_icon];
	if(isVisible) {
		iconStyles.push(styles.checkmark_iconVisible);
	}

	if(iconBackground){
		iconStyles.push({ backgroundColor: iconBackground});
	}

	return(
		<View style={iconStyles}>
			{checkmark 
				? <Image 
					style={styles.checkmark_checkIcon} 
					resizeMode="contain"
					source={require('./images/check.png')}
				/> 
				: null}			
		</View>
	);

};

Icon.PropTypes = {
	checkmark: PropTypes.bool,
	isVisible: PropTypes.bool,
	iconBackground: PropTypes.string,
	
};

export default Icon;