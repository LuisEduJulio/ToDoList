import { authActionTypes } from './auth.actionsTypes';

export function AuthLogin(form) {
    return async function (dispatch) {
        dispatch(AuthLoading());
        var users = localStorage.getItem('users');
        if (users === null) {
            dispatch(
                AuthError(
                    'Base sem dados!',
                    false,
                    'Falha no login!',
                    true
                )
            );
        } else {
            var usersParse = JSON.parse(users);
            var userFilter = usersParse.filter((itens) => itens.email === form.email && itens.password === form.password)[0];

            if (userFilter === undefined) {
                dispatch(
                    AuthError(
                        'Email ou senha errados!',
                        false,
                        'Falha no login!',
                        true
                    )
                );
            } else {
                dispatch(
                    AuthSuccess(
                        true,
                        'Login Suc',
                        'fasfasfasfkmasfioiaisrf0qwr3214k5235r2354',
                        userFilter.email,
                        userFilter.name
                    )
                );
            }
        }
    };
}


function AuthLoading() {
    return { type: authActionTypes.AUTH_LOADING };
}

export function AuthErrorClear() {
    return { type: authActionTypes.ERROR_CLEAR };
}

function AuthSuccess(success, title, token, email, name) {
    return {
        type: authActionTypes.AUTH_SUCCESS,
        success: success,
        title: title,
        token: token,
        email: email,
        name: name
    };
}

function AuthError(message, success, title, error) {
    return {
        type: authActionTypes.AUTH_ERROR,
        message: message,
        success: success,
        title: title,
        error: error,
    };
}

export function messageDisable(message) {
    return {
        type: authActionTypes.MESSAGE_DESABLE,
        message: message,
        success: false,
        title: message,
        error: true,
    };
}

export function dismissError() {
    return {
        type: authActionTypes.DISMISS_ERROR,
    };
}

export function AuthClear() {
    return {
        type: authActionTypes.AUTH_CLEAR,
    };
}

export function ResetError() {
    return {
        type: authActionTypes.RESET_ERROR,
    };
}

export function AuthLogout() {
    return async function (dispatch) {
        dispatch({ type: authActionTypes.AUTH_LOGOUT });
    };
}
