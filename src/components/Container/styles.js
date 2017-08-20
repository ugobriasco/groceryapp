import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '$primaryBackground'
	},
	datalist_container:{
		flex: 1,
		backgroundColor: '$primaryBackground',
	},
	autocomplete_container:{
		flexDirection: 'row',
		marginBottom: 0,
		height: 60,
		backgroundColor: 'transparent'
	}

});