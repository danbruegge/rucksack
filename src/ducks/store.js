import { createStore, combineReducers } from 'redux';
import * as reducers from 'app/ducks';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);

export default store;
