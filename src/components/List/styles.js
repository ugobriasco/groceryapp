import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
	
	$boxMargin: 10,
	$boxMinHeight: 60,


	container: {
	    flexDirection: 'row',  
	    backgroundColor: "$primaryBoxColor", 
	    minHeight: '$boxMinHeight',
	    marginTop: '$boxMargin',
	    marginLeft: 10,
	    marginRight: 10,
	
	},
	checkbox_container:{
	    paddingLeft: 10,   
	},
	checkbox:{
		backgroundColor: "$primaryBoxColor",
		overlayColor: "$primaryBoxColor",
	},
	contentBox: {
	    flex: 1,
	    flexDirection: 'column',
	    paddingLeft: 10,
	    paddingTop: 10,
	    paddingBottom: 10,
	},
	title_text:{
		fontSize: 18,
		fontWeight: 'bold',
	},
	subtitle_text:{

	},
	imageBox: {
		minHeight: '$boxMinHeight',
		flex: 0.4,
	    flexDirection: 'row',
	    justifyContent: 'flex-end'
	},
	card_image:{
	    width: 70,
	    marginRight: 0,
	    resizeMode: 'cover'
	},
	rightSwipeWrapper: {
	    flex: 1,
	    flexDirection: 'row',
	    marginTop: '$boxMargin',
	    backgroundColor: '$dangerBackground',
	    minHeight: '$boxMinHeight',
		alignItems: 'center',
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
	leftSwipeWrapper: {
	    flex: 1,
	    flexDirection: 'row',
	    marginTop: '$boxMargin',
	    backgroundColor: '$brandingBackground',
	    minHeight: '$boxMinHeight',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	leftSwipeIcon:{
		paddingRight: 20,
	},
	leftSwipeText:{
		fontSize: 18,
		fontWeight: 'bold',
		paddingRight: 20,
		color: '#fff',
	},
	separator: {
		marginLeft: 20,
		backgroundColor: '$border',
		flex: 1,
		height: StyleSheet.hairlineWidth,
	},
	emptyListWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	placeholderText: {
		fontSize: 18,
		color:'$brandingBackground'

	}
});