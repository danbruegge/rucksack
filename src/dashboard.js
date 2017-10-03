import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(() => {});

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
            <p>Hello Rucksack!</p>
        </Provider>,
        document.getElementById('Tabs'),
    );
});
