import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from '@state/reducers';

const persistConfig = {
	key: 'sample-project',
	storage,
	whitelist: ['auth'],
	blacklist: []
};

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistentStore = persistStore(store);

export {
	store,
	persistentStore,
};