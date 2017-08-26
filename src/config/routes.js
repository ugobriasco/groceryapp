import { StackNavigator, DrawerNavigator } from 'react-navigation';


import ShoppingList from '../screens/ShoppingList';
import Settings from '../screens/Settings';
import AvailableGroceries from '../screens/AvailableGroceries';
import LanguagesList from '../screens/LanguagesList';


const HomeStack = StackNavigator({
	ShoppingList: {
		screen: ShoppingList,
		navigationOptions: {
			header: () => null,
		},
	},
	Settings: {
		screen: Settings,
		navigationOptions: {
			headerTitle: 'Settings',
		},
	},
	LanguagesList:{
		screen: LanguagesList,
		navigationOptions: ({ navigation }) => ({
			headerTitle: navigation.state.params.title,
		}),
	},
},{
	headerMode: 'screen',
	mode: 'card',
});


export default  StackNavigator({
	Home:{
		screen: HomeStack
	},
},{
	mode: 'modal',
	cardstyle:{
		paddingTop: 0
	},
	headerMode: 'none'

});





// export default DrawerNavigator({
// 	Home: {
// 		screen: ShoppingList,
// 	},
// 	Settings:{
// 		screen: Options,

// 	},


// });
