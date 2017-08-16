import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
	container: {
	    flexDirection: 'row',  
	    backgroundColor: "$primaryBoxColor", 
	    borderBottomWidth:1, 
	    borderColor: '#eee',
	    minHeight: 60,
	    paddingLeft: 10,
	    paddingTop: 10,
	    paddingBottom: 10,
	    marginTop: 10,
	    marginLeft: 10,
	    marginRight: 10,
	
	},
	checkbox_container:{
	    paddingLeft: 10,   
	},
	contentBox: {
	    flex: 1,
	    flexDirection: 'column'
	},
	title_text:{
		fontSize: 18,
		fontWeight: 'bold',
	},
	subtitle_text:{

	},
	imageBox: {
		flex: 0.4,
	    flexDirection: 'row',
	    justifyContent: 'flex-end'
	},
	card_image:{
	    width:60,
	    marginRight: 0,
	    resizeMode: 'cover'
	},
	separator: {
		marginLeft: 20,
		backgroundColor: '$border',
		flex: 1,
		height: StyleSheet.hairlineWidth,
	},
});