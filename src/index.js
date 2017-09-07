'use strict'
import React, { Component} from 'react';
import Estylesheet from 'react-native-extended-stylesheet';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import store from './config/store';


import Home from './screens/Home';
import ShoppingList from './screens/ShoppingList';
import Settings from './screens/Settings';
import LanguagesList from './screens/LanguagesList';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';

Estylesheet.build({
	$brandingBackground: '#18bc9c',
	$primaryBackground: '#FFFF',
	$dangerBackground: '#ea5a4d',
	$successBackground: '#18bc9c',
	$primaryBoxColor: '#EFF0F1',
	$primaryTextColor: '#777777',
	$border: '#77777b',

});


// export default () => (
// 	<Provider store = {store}>
// 		<AlertProvider>
// 			<Navigator onNavigationStateChange={null} />
// 		</AlertProvider>
// 	</Provider>
// );

class App extends Component {

	componentDidMount(){
		SplashScreen.hide();

	}

	render(){
		return(
			<Provider store = {store}>
				<AlertProvider>
 					<Navigator onNavigationStateChange={null} />	
				</AlertProvider>
			</Provider>
		);
	}
}

export default App;


