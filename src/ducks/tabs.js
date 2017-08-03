export const ADD_TAB = 'ADD_TAB';

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_TAB:
            return {
                ...state,
                [action.tab.id]: action.tab,
            };
        default:
            return state;
    }
};

export const addTab = tab => ({
    type: ADD_TAB,
    tab,
});
