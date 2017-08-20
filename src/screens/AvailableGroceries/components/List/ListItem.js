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
import EStyleSheet from 'react-native-extended-stylesheet';



import {Checkbox, ListMarker} from '../../../../components/Switches';
import {ItemContent, TextWithIcon} from '../../../../components/Text';
import styles from './styles';

const ListItem = ({
	title,
	subtitle1,
	subtitle2,
	imageSource,
	onSwipeRightComplete,
	isChecked,
}) => {
	
	//handles item image
	if(imageSource) img = (
		<Image 
		style={styles.card_image} 
		source={{uri: imageSource}}
		/>
	);
	else img = (<View></View>);

	
	//handles swipe content
	const rightContent=(	
        <View style={styles.right_swipeable_wrapper}>
        	<TextWithIcon
        	text='Swipe to add'
        	backgroundColor= {_styles.$green} 
        	textColor= {_styles.$white}
        	iconName='add-shopping-cart'
        />
        </View>      
	);

	//handles row selection
	const primaryColor = '#fff';
	const backgroundColor = isChecked ? _styles.$green : _styles.$gray;
	const containerStyles = [styles.container];
	containerStyles.push({ backgroundColor: backgroundColor});

	return(
		<Swipeable 
			rightActionActivationDistance={200}	
			rightContent={rightContent}
        	onRightActionComplete={onSwipeRightComplete}
		>
			<View style={containerStyles}>

				<View style={{flex: 1}}>
					<ItemContent
						color = {isChecked ? '#fff' : null}
						title={title}
						subtitle1={subtitle1}
						subtitle2={subtitle2}
					/>
				</View>
				<View style={styles.marker_container}>
					<ListMarker color={primaryColor} isChecked={isChecked}/>
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
	onSwipeRightComplete: PropTypes.func,
	isChecked: PropTypes.bool,
};

export default ListItem;

const _styles = EStyleSheet.create({
  	$green: '$brandingBackground',
  	$gray: '$primaryBoxColor',
  	$white: '#ffff',

});

