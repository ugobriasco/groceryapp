import reducer from '../groceries';


// opt: no snapshots usage
// it('sets initial state', () => {
// 	const expected={
// 		groceriesData: {list: []},
// 		groceriesView: [],
// 		error: null
// 	};
// 	const actual = reducer(undefined, {});
// 	expect(actual).toEqual(expected)

// });

it('sets initial state', () => {
	expect(reducer(undefined,{})).toMatchSnapshot();
});



