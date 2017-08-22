import { combineReducers } from 'redux';
import shoppinglist from './shoppinglist';
import groceries from './groceries';


export default combineReducers({
	shoppinglist,
	groceries,
});