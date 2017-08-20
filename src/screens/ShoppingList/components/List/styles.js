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
	leftSwipeWrapper: {
	    flex: 1,
	    flexDirection: 'row',
	    marginTop: '$boxMargin',
	    backgroundColor: '$brandingBackground',
	    minHeight: '$boxMinHeight',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	leftSwipeText:{
		fontSize: 18,
		fontWeight: 'bold',
		paddingRight: 20,
		color: '#fff',
	},
	leftSwipeIcon:{
		paddingRight: 20,
	},
	rightSwipeIcon:{
		paddingLeft: 20,
	},
	rightSwipeText:{
		fontSize: 18,
		fontWeight: 'bold',
		paddingLeft: 20,
		color: '#fff',
	},
	rightSwipeWrapper: {
	    flex: 1,
	    flexDirection: 'row',
	    marginTop: '$boxMargin',
	    backgroundColor: '$dangerBackground',
	    minHeight: '$boxMinHeight',
		alignItems: 'center',
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