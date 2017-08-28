import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from '../reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
	middleware.push(logger);
}

const store = createStore(
	reducers, 
	applyMiddleware(...middleware),
	autoRehydrate()
);

persistStore(store, { storage: AsyncStorage });
sagaMiddleware.run(rootSaga);

export default store;