import React from 'react';
import {
	TouchableHighlight,
	View,
	Text,
	Image,
} from 'react-native';

import PropTypes from 'prop-types';
import Icon from  'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const ListItem = ({
	title,
	subtitle1,
	subtitle2,
	imageSource,
}) => {


	if(imageSource) img = (
		<Image 
		style={styles.card_image} 
		source={{uri: imageSource}}
		/>
	);
	else img = (<View></View>);

	return(
		<TouchableHighlight>
			<View style={styles.container}>
				<View style={styles.contentBox}>
					<Text style = {styles.title_text}>{title}</Text>
					<Text style = {styles.subtitle_text}>{subtitle1}</Text>
					<Text style = {styles.subtitle_text}>{subtitle2}</Text>
				</View>
				<View style={styles.imageBox}>
					{img}
				</View>
			</View>
		</TouchableHighlight>

	);
};

ListItem.PropTypes = {
	title: PropTypes.string,
	subtitle1: PropTypes.string,
	subtitle2: PropTypes.string,
	imageSource: PropTypes.string,

};

export default ListItem;