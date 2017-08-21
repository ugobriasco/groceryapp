import { combineReducers } from 'redux';
import shoppinglist from './shoppinglist';
import groceries from './groceries';
import system from './system';

export default combineReducers({
	shoppinglist,
	groceries,
	system,
});