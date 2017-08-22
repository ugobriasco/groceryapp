import { takeEvery, select, call, put } from 'redux-saga/effects';

import {
	GET_INITIAL_GROCERIES,
	REMOTE_GROCERY_REQ_ERROR,
	REMOTE_GROCERY_REQ_RESULT,
} from '../actions/groceries';

const url = 'http://gb.mathyourtie.com/api/';
const getLatestGroceries = (groceries) => fetch(url + `item/`);

function* fetchLatestGroceries(action){
	try{

		let groceriesData = action.groceriesData;

		if( groceriesData === undefined){
			groceriesData = yield select(state => state.groceries.groceriesData);
		}

		const response = yield call(getLatestGroceries);
		const result = yield response.json();

		if(result.error){
			yield put({ type: REMOTE_GROCERY_REQ_ERROR, error: result.error });
		} else {
			yield put({type: REMOTE_GROCERY_REQ_RESULT, result})
		}

	} catch(e){
		yield put({ type: REMOTE_GROCERY_REQ_ERROR, error: e.message });
	}
}

export default function* rootSaga(){
	yield takeEvery(GET_INITIAL_GROCERIES, fetchLatestGroceries);
}
