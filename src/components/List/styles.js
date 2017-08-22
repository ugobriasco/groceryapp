import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
	
	$underlayColor: '$border',


	row:{
		paddingHorizontal: 20,
		paddingVertical: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	text:{
		fontSize: 16,
		color: '#777',

	},
	separator: {
		backgroundColor: '$border',		
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