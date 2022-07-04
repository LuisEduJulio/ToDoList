import { registerTypes } from './register.actionsTypes';

const initialState = {
    error: false,
    message: '',
    title: '',
    success: false,
    loading: false,
    name: '',
    email: '',
    password: ''
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case registerTypes.REGISTER_LOADING:
            return { ...state, loading: true };
        case registerTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                title: action.title,
                error: initialState.error,
                name: action.name,
                email: action.email,
                password: action.password,
                message: action.message,
                success: action.success
            };
        case registerTypes.REGISTER_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                title: action.title,
                message: action.message,
                name: action.name,
                email: action.email,
                password: action.password,
                success: initialState.success
            };
        case registerTypes.REGISTER_ERROR_CLEAR:
            return {
                ...state,
                error: initialState.error,
                success: initialState.success,
                loading: false
            };
        case registerTypes.REGISTER_CLEAR:
            return {
                ...state,
                token: initialState.token,
                error: initialState.error,
                message: initialState.message,
                title: initialState.title,
                success: initialState.success,
                loading: initialState.loading,
                parkingId: initialState.parkingId,
            };      
        default:
            return state;
    }
}
