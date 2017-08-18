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

const ListItem = ({
	title,
	subtitle1,
	subtitle2,
	imageSource,
	onCheckBoxPress,
	onSwipeRightComplete,
	onSwipeLeftComplete,
	isMarked,
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
	let iconName = isMarked === true ? 'check-box' : 'check-box-outline-blank';

	let switchMark = isMarked === true 
		? <Text style= {styles.leftSwipeText} >Unmark</Text> 
		: <Text style= {styles.leftSwipeText} >Mark</Text>

	
 
	return(
		<Swipeable 
			rightActionActivationDistance={200}
			leftActionActivationDistance={200}
			
			rightContent={(
				<View style={styles.rightSwipeWrapper}>
		          <Icon style={styles.rightSwipeIcon} name="delete" size={40} color="#fff"/>
		          <Text style={styles.rightSwipeText}>Swipe to delete ...</Text>
		        </View>
        	)}

        	leftContent={(
				<View style={styles.leftSwipeWrapper}>
		          {switchMark}
		        </View>
        	)}

        	onRightActionComplete={onSwipeRightComplete}
        	onLeftActionComplete={onSwipeLeftComplete}
		>
			<View style={styles.container}>
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
						onPress={onCheckBoxPress}
					/>
				</View>
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

ListItem.PropTypes = {
	title: PropTypes.string,
	subtitle1: PropTypes.string,
	subtitle2: PropTypes.string,
	imageSource: PropTypes.string,

};

export default ListItem;