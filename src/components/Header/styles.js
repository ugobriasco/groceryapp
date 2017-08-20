import EStylesheeSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStylesheeSheet.create({
	container: {
      backgroundColor: '$brandingBackground',
    	position: 'relative',
    	left: 0,
    	top: 0,
    	right: 0,
    	'@media ios': {
      		paddingTop: 20,
    	},
    	// '@media android': {
     //  		paddingTop: StatusBar.currentHeight,
    	// },
  	},
  	button: {
    	alignSelf: 'flex-end',
    	paddingVertical: 5,
    	paddingHorizontal: 20,
  	},
  	icon: {
  		width: 18,
 	},



});