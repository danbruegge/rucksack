import React from 'react';
import ReactDOM from 'react-dom';

import { TabLists, ClearStorage } from 'app/components';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<TabLists />, document.getElementById('TabListContainer'));
    ReactDOM.render(<ClearStorage />, document.getElementById('ClearStorage'));
});
