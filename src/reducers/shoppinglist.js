import {
	GET_INITIAL_DATALIST,
	CHANGE_FILTER_STR,
	UPDATE_FILTERED_LIST,
} from '../actions/shoppinglist';

import mockupData from  '../data/mockupData';

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
		case UPDATE_FILTERED_LIST:
			return {
				...state,
				filteredList: action.filteredList || dataList,
			};
		default:
			return state;
	}
}

export default reducer;