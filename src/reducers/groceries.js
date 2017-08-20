import {
	UPDATE_GROCERIESVIEW,
} from '../actions/groceries';

//import mockupData from  '../data/data';
import mockupData from '../data/mockupData';

const initialState = {
	groceries: mockupData,
	groceriesView: mockupData,
	error: null,
}

const reducer = (state = initialState, action) => {
	switch (action.type){
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