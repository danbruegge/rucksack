import React from 'react';

import { clearStorage } from 'app/storage';

const ClearStorage = () => <button onClick={onClick}>Clear storage</button>;

function onClick() {
    clearStorage();
}

export default ClearStorage;
