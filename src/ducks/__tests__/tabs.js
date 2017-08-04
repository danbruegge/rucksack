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
    it('should provide the initial state with empty action', () => {
        const actual = reducer(undefined, {});
        expect(actual).toEqual({});
    });

    it('should provide the initial state with unknown type', () => {
        const actual = reducer(undefined, { type: 'unknown' });
        expect(actual).toEqual({});
    });

    it('should provide add an tab', () => {
        const state = deepFreeze({});
        const actual = reducer(state, ACTION);

        expect(actual).toEqual(EXPECTED);
    });
});
