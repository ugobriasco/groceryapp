import { combineReducers } from 'redux';
import shoppinglist from './shoppinglist';
import groceries from './groceries';
import settings from './settings';


export default combineReducers({
	shoppinglist,
	groceries,
	settings,
});