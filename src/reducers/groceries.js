import {
	UPDATE_GROCERIES,
	UPDATE_GROCERIESVIEW,
	GET_INITIAL_GROCERIES,
	REMOTE_GROCERY_REQ_RESULT,
	REMOTE_GROCERY_REQ_ERROR,
} from '../actions/groceries';

//import mockupData from  '../data/data';
import mockupData from '../data/mockupData';

const initialState = {
	groceriesData: {
		list: [],
	},
	groceriesView: [],
	error: null
}

const setGroceries = () => {
	let groceriesSource = {
		isFetching: true,
		date: '',
		list: mockupData,
	}
	return groceriesSource;
};


const reducer = (state = initialState, action) => {
	switch (action.type){
		case GET_INITIAL_GROCERIES:
			return{
				...state,
				groceriesData: setGroceries()
			}
		case UPDATE_GROCERIESVIEW:
			return {
				...state,
				groceriesView: action.updatedGroceriesView,
			}
		case UPDATE_GROCERIES:
			return {
				...state,
				groceriesData:{
					list: action.updatedGroceries,
				},
				groceriesView: action.updatedGroceries,
			}
		case REMOTE_GROCERY_REQ_RESULT:
			return {
				...state,
				groceriesData: {
					isFetching: false,
					date: new Date(),
					list: action.result.data
				},
				groceriesView: action.result.data

			}
		case REMOTE_GROCERY_REQ_ERROR:
			return {
				...state,
			}
		default:
			return state;
	}
}

export default reducer;