import { StackNavigator } from 'react-navigation';


import ShoppingList from '../screens/ShoppingList';
import Options from '../screens/Options';


export default  StackNavigator({
	ShoppingList: {
		screen: ShoppingList,
		navigationOptions: {
			header: () => null,
		},
	},
	Options: {
		screen: Options,
		navigationOptions: {
			headerTitle: 'Options',
		},
	}
},{
	headerMode: 'screen',
	mode: 'card',
});