import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
	
	container: {
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
  	}


	
});