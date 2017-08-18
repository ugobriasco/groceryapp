

export const FILTER_DATALIST ='FILTER_DATALIST';

export const UPDATE_ALL_LISTS = 'UPDATE_ALL_LISTS';

//

export const GET_INITIAL_DATALIST =' GET_INITIAL_DATALIST';
export const CHANGE_FILTER_STR = 'CHANGE_FILTER_STR';
export const SYNC_LISTS = 'SYNC_LISTS';
export const UPDATE_LISTVIEW = 'UPDATE_LISTVIEW';
export const UPDATE_DATALIST = 'UPDATE_DATALIST';

//retrive initial status
export const getInitialDataList = () => ({
	type: GET_INITIAL_DATALIST,
});

//modify filter
export const changeFilterText = (filterString) => ({
	type: CHANGE_FILTER_STR,
	filterString,
});

//sync datalist and listview
export const syncLists = (listToBeSynced) => ({
	type: SYNC_LISTS,
	listToBeSynced,
});


//update listview
export const updateListView = (updatedList) => ({
	type: UPDATE_LISTVIEW,
	updatedList,
});

//update datalist
export const updateDataList = (updatedList) => ({
	type: UPDATE_DATALIST,
	updatedList,

});



//obsoletes

export const filterDataList = (filteredList, filterString) => ({
	type: FILTER_DATALIST,
	filteredList,
	filterString,

});



export const updateLists = (updatedList) => ({
	type: UPDATE_ALL_LISTS,
	updatedList,
})


