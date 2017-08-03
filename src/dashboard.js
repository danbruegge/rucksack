import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from 'app/ducks/store';
import { TabLists } from 'app/components';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
            <TabLists />
        </Provider>,
        document.getElementById('TabListContainer'),
    );
});
