import EStylesheeSheet from 'react-native-extended-stylesheet';

export default EStylesheeSheet.create({

		
	//Component: ButtonWithIcon
	button_with_icon_container: {
		borderRadius: 4,
    	borderWidth: 5,
	},
	button_with_icon_wrapper: {
		alignItems: 'center',
		justifyContent: 'center',

	},

	//Component: Checkmark
	checkmark_icon: {
		backgroundColor: 'transparent',
		width: 30,
		height: 30,
		borderRadius: 15,  //1/2 of the height --> circle
		justifyContent: 'center',
		alignItems: 'center'

	},
	checkmark_iconVisible: {
		backgroundColor: '$brandingBackground',
	},
	checkmark_checkIcon: {
		width: 18
	}
	
});