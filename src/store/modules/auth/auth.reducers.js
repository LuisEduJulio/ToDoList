import { authActionTypes } from './auth.actionsTypes';

const initialState = {
    token: '',
    email: '',
    error: false,
    message: '',
    title: '',
    success: false,
    loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case authActionTypes.AUTH_LOADING:
            return { ...state, loading: true };
        case authActionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                email: action.email,
                loading: false,
                title: action.title,
                name: action.name,
                error: initialState.error,
            };
        case authActionTypes.AUTH_ERROR:
            return {
                ...state,
                error: action.error,
                email: action.email,
                loading: false,
                title: action.title,
                message: action.message,
            };
        case authActionTypes.AUTH_CLEAR:
            return {
                ...state,
                token: initialState.token,
                email: initialState.email,
                error: initialState.error,
                message: initialState.message,
                title: initialState.title,
                success: initialState.success,
                loading: initialState.loading,
            };
        case authActionTypes.MESSAGE_DESABLE:
            return {
                ...state,
                error: action.error,
                loading: false,
                title: action.title,
                message: action.message,
            }
        case authActionTypes.ERROR_CLEAR:
            return {
                ...state,
                error: initialState.error,
            };
        case authActionTypes.DISMISS_ERROR:
            return { ...state, error: initialState.error };
        case authActionTypes.AUTH_LOGOUT:
            return initialState;
        default:
            return state;
    }
}
