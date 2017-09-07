import {
	getInitialGroceries, 
	GET_INITIAL_GROCERIES,
	updateGroceriesView,
	UPDATE_GROCERIESVIEW,
	updateGroceries,
	UPDATE_GROCERIES,

} from '../groceries';

it('create a GET_INITIAL_GROCERIES action', () => {
	expect(getInitialGroceries()).toMatchSnapshot();
});

it('create a UPDATE_GROCERIESVIEW action', () => {
	expect(updateGroceriesView([{id:'1'}])).toMatchSnapshot();
});

it('create a UPDATE_GROCERIES action', () => {
	expect(updateGroceries([{id:'1'}])).toMatchSnapshot();
});



