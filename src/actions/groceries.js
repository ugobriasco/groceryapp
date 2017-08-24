export const UPDATE_GROCERIES = 'UPDATE_GROCERIES';
export const UPDATE_GROCERIESVIEW = 'UPDATE_GROCERIESVIEW';
export const GET_INITIAL_GROCERIES = 'GET_INITIAL_GROCERIES';


export const REMOTE_GROCERY_REQ_ERROR = 'REMOTE_GROCERY_REQ_ERROR';
export const REMOTE_GROCERY_REQ_RESULT = 'REMOTE_GROCERY_REQ_RESULT';


//get initial state

export const getInitialGroceries = () => ({
	type: GET_INITIAL_GROCERIES,
});

//update listview
export const updateGroceriesView = (updatedGroceriesView) => ({
	type: UPDATE_GROCERIESVIEW,
	updatedGroceriesView,
});


//update the groceries (ment to flag items added to the list)
export const updateGroceries = (updatedGroceries) => ({
	type: UPDATE_GROCERIES,
	updatedGroceries,
});





