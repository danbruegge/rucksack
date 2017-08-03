import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ducks from 'app/ducks';
import { TabLists, ClearStorage } from 'app/components';

const store = createStore(ducks);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
            <TabLists />
        </Provider>,
        document.getElementById('TabListContainer'),
    );
    ReactDOM.render(
        <Provider store={store}>
            <ClearStorage />
        </Provider>,
        document.getElementById('ClearStorage'),
    );
});
