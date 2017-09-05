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
import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Checkbox} from '../../../../components/Switches';
import {ItemContent, TextWithIcon, TextWithIconInverted} from '../../../../components/Text';


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


	let switchMark = isChecked ? 'Swipe to unmark...' : 'Swipe to mark...'

	//handle swipe content
	const rightContent = (	
        <View style={styles.right_swipeable_wrapper}>
        	<TextWithIcon
	        	text='Swipe to delete'
	        	backgroundColor= {_styles.$danger} 
	        	textColor= {_styles.$white}
	        	iconName='delete'
	        />    	
        </View>
        
	) 
	const leftContent=(
		
        
        <View style={styles.left_swipeable_wrapper}>
        	<TextWithIconInverted
        		text = {switchMark}
        		backgroundColor = {_styles.$primary}
        		textColor={_styles.$white}
        	/>
        </View>
        
	)

	return(
		<Swipeable 
			rightActionActivationDistance={200}
			leftActionActivationDistance={100}		
			rightContent={rightContent}
        	leftContent={leftContent}
        	onRightActionComplete={onSwipeRightComplete}
        	onLeftActionComplete={onSwipeLeftComplete}
		>
			<View style={styles.container}>
				
				<View style={{flex: 0.2, alignItems: 'flex-end'}}>
					<Checkbox
					onPress={onCheckBoxPress}
					isChecked={isChecked}
				/>	
				</View>
				
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

const _styles = EStyleSheet.create({
  	$primary: '$brandingBackground',
  	$danger: '$dangerBackground',
  	$gray: '$primaryBoxColor',
  	$white: '#ffff',

});


export default ListItem;