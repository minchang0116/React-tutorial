import {
    createReducer,
    createSetValueAction,
    setValueReducer,
} from '../../common/redux-helper';
// enum

export const Types = {
    SetValue: 'search/SetValue',
    FetchUser: 'user/FetchUser',
};

export const actions = {
    setValue: createSetValueAction(Types.SetValue),
    fetchUser: name => ({ type: Types.FetchUser, name }),
};

const INITIAL_STATE = {
    user: undefined,
};
const reducer = createReducer(INITIAL_STATE, {
    [Types.SetValue]: setValueReducer,
});
export default reducer;