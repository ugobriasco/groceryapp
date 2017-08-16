export const GET_INITIAL_DATALIST =' GET_INITIAL_DATALIST';
export const CHANGE_FILTER_STR = 'CHANGE_FILTER_STR';
export const FILTER_DATALIST ='FILTER_DATALIST';
export const UPDATE_DATALIST = 'UPDATE_DATALIST';

export const getInitialDataList = () => ({
	type: GET_INITIAL_DATALIST,
});

export const changeFilterText = (filterString) => ({
	type: CHANGE_FILTER_STR,
	filterString,
});

export const filterDataList = (filteredList, filterString) => ({
	type: FILTER_DATALIST,
	filteredList,
	filterString,

});

export const updateDataList = (updatedList) => ({
	type: UPDATE_DATALIST,
	updatedList,

});

