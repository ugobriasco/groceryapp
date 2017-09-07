import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Container = ({children, backgroundColor}) => {

	const containerStyle = [styles.container];
	if(backgroundColor) containerStyle.push({backgroundColor})


	return(
		<View style={containerStyle}>
		{children}
	</View>


	);
}

	
Container.propTypes = {
	children: PropTypes.any,
}

export default Container;