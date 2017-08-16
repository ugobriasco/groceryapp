export const GET_INITIAL_DATALIST =' GET_INITIAL_DATALIST';
export const CHANGE_FILTER_STR = 'CHANGE_FILTER_STR';
export const UPDATE_FILTERED_LIST ='UPDATE_FILTERED_LIST';

export const getInitialDataList = () => ({
	type: GET_INITIAL_DATALIST,
});

export const changeFilterText = (filterString) => ({
	type: CHANGE_FILTER_STR,
	filterString,
});

export const filterDatalist = (filteredList) => ({
	type: UPDATE_FILTERED_LIST,
	filteredList

});

