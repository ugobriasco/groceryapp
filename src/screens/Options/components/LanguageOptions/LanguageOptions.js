import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,

} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const LanguageOptions = () => {


	return(

		<View style={styles.container}>
			<Text style={styles.section_header}>Languages</Text>
			<Text>Primary Language</Text>
			<Text>Enable Multilanguage</Text>
			<Text>Secondary Language</Text>
			<Text>Tertiary Language</Text>
		</View>
	);
}

LanguageOptions.propTypes = {
	
}

export default LanguageOptions;