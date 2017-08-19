import React from 'react';
import {
	TouchableOpacity,
	TouchableHighlight,
	View,
	Text,
	Image,
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import PropTypes from 'prop-types';
import Icon from  'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const ItemToShoppingList = ({
	title,
	subtitle1,
	subtitle2,
	imageSource,
	onCheckBoxPress,
	onSwipeRightComplete,
	onSwipeLeftComplete,
	isChecked,
}) => {
	
	//handle item image
	if(imageSource) img = (
		<Image 
		style={styles.card_image} 
		source={{uri: imageSource}}
		/>
	);
	else img = (<View></View>);

	//handle checkbox
	let iconName = isChecked === true ? 'check-box' : 'check-box-outline-blank';

	let switchMark = isChecked === true 
		? <Text style= {styles.leftSwipeText}></Text> 
		: <Text style= {styles.leftSwipeText}></Text>

	//handle swipe content
	const leftContent=(
		<View style={styles.leftSwipeWrapper}>
			<Text style={styles.leftSwipeText}>Swipe to add to the list</Text>
          	{switchMark}
        </View>
	)

	const rightContent=(
		<View style={styles.rightSwipeWrapper}>
			<Text style={styles.rightSwipeText}>Swipe to add to the list</Text>
          	{switchMark}
        </View>
	)

	
 
	return(
		<Swipeable 

			rightActionActivationDistance={200}
			leftActionActivationDistance={200}		
			rightContent={rightContent}
        	leftContent={leftContent}
        	onRightActionComplete={onSwipeRightComplete}
        	onLeftActionComplete={onSwipeLeftComplete}
		>
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
		</Swipeable>

	);
};

ItemToShoppingList.PropTypes = {
	title: PropTypes.string,
	subtitle1: PropTypes.string,
	subtitle2: PropTypes.string,
	imageSource: PropTypes.string,
};

export default ItemToShoppingList;