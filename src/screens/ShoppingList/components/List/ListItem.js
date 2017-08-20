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

import {Checkbox} from '../../../../components/Switches';
import {ItemContent} from '../../../../components/Text';


const ListItem = ({
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


	let switchMark = isChecked === true 
		? <Text style= {styles.leftSwipeText}>Swipe to unmark</Text> 
		: <Text style= {styles.leftSwipeText}>Swipe to mark</Text>

	//handle swipe content
	const rightContent = (
		<View style={styles.rightSwipeWrapper}>
		        <Icon style={styles.rightSwipeIcon} name="delete" size={40} color="#fff"/>
		        <Text style={styles.rightSwipeText}>Swipe to delete</Text>
        </View>
	) 
	const leftContent=(
		<View style={styles.leftSwipeWrapper}>
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
				
				<Checkbox
					onPress={onCheckBoxPress}
					isChecked={isChecked}
				/>
				<View style={{flex: 1}}>
					<ItemContent
						title={title}
						subtitle1={subtitle1}
						subtitle2={subtitle2}
					/>
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