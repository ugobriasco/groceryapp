export const UPDATE_GROCERIESVIEW = 'UPDATE_GROCERIESVIEW';
export const GET_INITIAL_GROCERIES = 'GET_INITIAL_GROCERIES';


//get initial state

export const getInitialGroceries = () => ({
	type: GET_INITIAL_GROCERIES,
});

//update listview
export const updateGroceriesView = (updatedGroceriesView) => ({
	type: UPDATE_GROCERIESVIEW,
	updatedGroceriesView,
});






