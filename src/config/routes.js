import { StackNavigator } from 'react-navigation';


import ShoppingList from '../screens/ShoppingList';
import Options from '../screens/Options';
import AvailableGroceries from '../screens/AvailableGroceries';


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
	},
	Groceries: {
		screen: AvailableGroceries,
		navigationOptions: {
			headerTitle: 'Available Groceries',
		}
	},
},{
	headerMode: 'screen',
	mode: 'card',
});