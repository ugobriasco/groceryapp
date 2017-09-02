import EStylesheeSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStylesheeSheet.create({
	container: {
    flexDirection: 'row',
    backgroundColor: '$brandingBackground',
  	position: 'relative',
  	left: 0,
  	top: 0,
  	right: 0,
  	'@media ios': {
    		paddingTop: 20,
  	},
  	'@media android': {
    		paddingTop: StatusBar.currentHeight,
  	},
  },
  button: {
      flex: 0.4,
    	alignItems: 'flex-end',
    	paddingBottom: 5,
    	paddingHorizontal: 20,
  },
  icon: {
  		width: 18,
 	},
  title_container:{
    flex: 1,
    paddingLeft: 10,
    marginBottom: 0,

  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',

  }



});