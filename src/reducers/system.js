import {
	UPDATE_KEYBOARD,
} from '../actions/system';

//import mockupData from  '../data/data';
import mockupData from '../data/mockupData';

const initialState = {
	keyboardShown: false,
}

const reducer = (state = initialState, action) => {
	switch (action.type){
		case UPDATE_KEYBOARD:
			return {
				...state,
				keyboardShown: action.isShown,
			}
		default:
			return state;
	}
}

export default reducer;