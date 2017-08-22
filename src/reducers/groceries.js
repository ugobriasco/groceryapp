import {
	UPDATE_GROCERIESVIEW,
	GET_INITIAL_GROCERIES,
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
		default:
			return state;
	}
}

export default reducer;