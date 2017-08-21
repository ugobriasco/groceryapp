import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
import color from 'color';

export default EStyleSheet.create({
	
	container:{
		marginBottom: 0,
		height: 100,
		

	},
	input_group: {
	    flexDirection: 'row',
	    height: 50,
	    padding: 4,
	    marginBottom: 0,
	    borderWidth: 1, 
	    borderColor: '#eee', 
	    backgroundColor: '#fff' 
  	},
	button_wrapper: {
	    flex: 1,
	    width: 10,
	    marginRight: 0,
	},
	inputform_wrapper:{
	    flex: 5,
  	},
  	inputform:{
  		fontSize: 16,
	   
  	},
  	hor_list:{
  		backgroundColor:  'rgba(0,0,0,0)',
  	},
  	hor_item_container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: 80,
		paddingRight: 10,
		paddingLeft: 10,
		borderRightWidth: StyleSheet.hairlineWidth,
		borderColor: '$border',
	},

	hor_item_text: {
		fontSize: 16,
		

	},


	
});