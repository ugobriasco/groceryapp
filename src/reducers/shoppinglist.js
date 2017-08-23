import {
	GET_INITIAL_DATALIST,
	CHANGE_FILTER_STR,
	SYNC_LISTS,
	UPDATE_LISTVIEW,
	UPDATE_DATALIST,
} from '../actions/shoppinglist';

//import mockupData from  '../data/data';
import ItemModel from '../models/ItemModel';
//import mockupData from '../data/mockupData';

const initialData = [
  new ItemModel('Mele','Äpfel','Jabłka','http://knowledge.wharton.upenn.edu/wp-content/uploads/2014/03/apple-1024x440.jpg'),
];

const initialState = {
	dataList: initialData,
	listView: initialData,
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
		case SYNC_LISTS:
			return {
				...state,
				dataList: action.listToBeSynced,
				listView: action.listToBeSynced,
			}
		case UPDATE_LISTVIEW:
			return {
				...state,
				listView: action.updatedList,
			}
		case UPDATE_DATALIST:
			return {
				...state,
				dataList: action.updatedList,
			}
		default:
			return state;
	}
}

export default reducer;