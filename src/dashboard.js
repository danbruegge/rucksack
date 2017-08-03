import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import * as reducers from 'app/ducks';
import { TabLists } from 'app/components';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
            <TabLists />
        </Provider>,
        document.getElementById('TabListContainer'),
    );
});
