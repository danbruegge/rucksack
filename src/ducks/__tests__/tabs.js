import deepFreeze from 'deep-freeze';

import reducer, { ADD_TAB, addTab } from 'app/ducks/tabs';

const TAB = {
    id: 1,
};
const EXPECTED = {
    1: {
        id: 1,
    },
};
const ACTION = {
    type: ADD_TAB,
    tab: TAB,
};

describe('Actions', () => {
    it('Should create an action to add a tab', () => {
        const expected = deepFreeze(ACTION);

        expect(addTab(TAB)).toEqual(expected);
    });
});

describe('Reducer', () => {
    it('should provide the initial state', () => {
        const actual = reducer(undefined, {});
        expect(actual).toEqual({});
    });

    it('should handle ADD_TAB', () => {
        const state = deepFreeze({});
        const actual = reducer(state, ACTION);

        expect(actual).toEqual(EXPECTED);
    });
});
