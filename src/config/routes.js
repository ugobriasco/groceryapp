import { StackNavigator, DrawerNavigator } from 'react-navigation';


import ShoppingList from '../screens/ShoppingList';
import Options from '../screens/Options';
import AvailableGroceries from '../screens/AvailableGroceries';
import LanguagesList from '../screens/LanguagesList';


const HomeStack = StackNavigator({
	ShoppingList: {
		screen: ShoppingList,
		navigationOptions: {
			header: () => null,
		},
	},
	Options: {
		screen: Options,
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
