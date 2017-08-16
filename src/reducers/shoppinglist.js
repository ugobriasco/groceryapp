import {
	GET_INITIAL_DATALIST,
	CHANGE_FILTER_STR,
	FILTER_DATALIST,
	UPDATE_DATALIST,
} from '../actions/shoppinglist';

import mockupData from  '../data/data';

const initialState = {
	dataList: mockupData,
	filteredList: mockupData,
	filterString: '',
	error: null,
}

const reducer = (state = initialState, action) => {
	switch (action.type){
		case CHANGE_FILTER_STR:
			return {
				...state,
				filterString: action.filterString || '',
			};
		case FILTER_DATALIST:
			return {
				...state,
				filteredList: action.filteredList || dataList,
				filterString: action.filterString || '',
			};
		case UPDATE_DATALIST:
			return {
				...state,
				dataList: action.updatedList,
			};
		default:
			return state;
	}
}

export default reducer;