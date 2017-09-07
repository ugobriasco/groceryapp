import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';



const DataListContainer = ({children}) => (
	<View style={styles.datalist_container}>
		{children}
	</View>
);
	
DataListContainer.propTypes = {
	children: PropTypes.any,
}

export default DataListContainer;