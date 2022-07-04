import { combineReducers } from 'redux';

import authReducer from '../modules/auth/auth.reducers';
import registerReducer from '../modules/register/register.reducers';

import { authActionTypes } from '../modules/auth/auth.actionsTypes';

const appReducer = combineReducers({
    auth: authReducer,
    register: registerReducer
});

const rootReducer = (state, action) => {
    if (action.type === authActionTypes.AUTH_LOGOUT) {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;
