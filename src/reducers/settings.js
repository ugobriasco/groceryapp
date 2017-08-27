import {
	SET_LANGUAGES,
	ENABLE_LANG_MULTIPLE
} from '../actions/settings';

import availableLanguages from '../data/localization';

const initialState = {
	availableLanguages: availableLanguages,
	language: [{'id': 'it', 'name': 'Italiano'},{'id': 'de', 'name': 'Deutsch'},{'id': 'pl', 'name': 'Polski'}],
	multipleLanguages: true,
}

let i = 0;

const reducer = (state = initialState, action) => {
	switch (action.type){
		
		case SET_LANGUAGES:
			return{
				...state,
				language: action.selectedLanguages,
			};
		case ENABLE_LANG_MULTIPLE:
			return{
				...state,
				multipleLanguages: action.isMultipleLanguagesEnabled,
			}
		default:
			return state;
	}
}

export default reducer;