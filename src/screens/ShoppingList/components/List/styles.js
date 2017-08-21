import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
	
	$boxMargin: 10,
	$boxMinHeight: 60,

	card_image:{
	    width: 70,
	    marginRight: 0,
	    resizeMode: 'cover'
	},	
	right_swipeable_wrapper:{
	    flex: 1,
	    marginTop: '$boxMargin',
	    minHeight: '$boxMinHeight',
	},
	left_swipeable_wrapper:{
	    flex: 1,
	    marginTop: '$boxMargin',
	    minHeight: '$boxMinHeight',
	},

	container: {
	    flexDirection: 'row',  
	    backgroundColor: "$primaryBoxColor", 
	    minHeight: '$boxMinHeight',
	    marginTop: '$boxMargin',
	    marginLeft: 10,
	    marginRight: 10,
	
	},
	imageBox: {
		minHeight: '$boxMinHeight',
		flex: 0.4,
	    flexDirection: 'row',
	    justifyContent: 'flex-end'
	},
	
});