export const SET_LANGUAGES = 'SET_LANGUAGES';
export const ENABLE_LANG_MULTIPLE = 'ENABLE_LANG_MULTIPLE';



// selectedLanguages: ['it','de','pl'],
export const setLanguages = (selectedLanguages) => ({
	type: SET_LANGUAGES,
	selectedLanguages,
});


// 	multipleLanguagesEnabled: true,
export const setOptMutipleLanguages = ( isMultipleLanguagesEnabled) => ({
	type: ENABLE_LANG_MULTIPLE,
	isMultipleLanguagesEnabled,
});



