import {
	SET_LANGUAGES,
	ENABLE_LANG_MULTIPLE
} from '../actions/settings';

import availableLanguages from '../data/localization';

const initialState = {
	availableLanguages: availableLanguages,
	selectedLanguages: ['it','de','pl'],
	multipleLanguagesEnabled: true,
}

const reducer = (state = initialState, action) => {
	switch (action.type){
		
		case SET_LANGUAGES:
			return{
				...state,
				selectedLanguages: action.selectedLanguages,
			};
		case ENABLE_LANG_MULTIPLE:
			return{
				...state,
				multipleLanguagesEnabled: action.isMultipleLanguagesEnabled,
			}
		default:
			return state;
	}
}

export default reducer;