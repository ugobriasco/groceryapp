'use strict'
import React, { Component} from 'react';
import Estylesheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import store from './config/store';


import Home from './screens/Home';
import ShoppingList from './screens/ShoppingList';
import AvailableGroceries from './screens/AvailableGroceries';

Estylesheet.build({
	$brandingBackground: '#18bc9c',
	$primaryBackground: '#FFFF',
	$dangerBackground: '#ea5a4d',
	$successBackground: '#18bc9c',
	$primaryBoxColor: '#EFF0F1',
	$primaryTextColor: '#777777',
	$border: '#77777b',

});


export default () => (
	<Provider store = {store}>
		<ShoppingList />
	</Provider>
);




