import { registerTypes } from './register.actionsTypes';

export function Register(form) {
    return async function (dispatch) {
        dispatch(RegisterLoading());
        
        var users = localStorage.getItem('users');
        if (users === null) {
            const user = [];
            user.push(form);
            localStorage.setItem('users', JSON.stringify([{
                email: form.email,
                password: form.password,
                name: form.name
            }]));
            dispatch(
                RegisterSuccess(
                    true,
                    'register',
                    'Registro realizado com sucesso',
                    form.name,
                    form.email,
                    form.password
                )
            );
        } else {
            var usersParse = JSON.parse(users);
            var userFilter = usersParse.filter((itens) => itens.email === form.email)[0];

            if (userFilter === undefined) {
                localStorage.setItem('users', JSON.stringify([users, {
                    email: form.email,
                    password: form.password,
                    name: form.name
                }]));

                dispatch(
                    RegisterSuccess(
                        true,
                        'register',
                        'Registro realizado com sucesso',
                        form.name,
                        form.email,
                        form.password
                    )
                );
            } else {
                dispatch(
                    RegisterError(
                        'Email possui registro!',
                        false,
                        'Falha no registro!',
                        true
                    )
                );
            }
        }
    };
}

function RegisterLoading() {
    return { type: registerTypes.REGISTER_LOADING };
}

function RegisterSuccess(success, message, title, name, email, password) {
    return {
        type: registerTypes.REGISTER_SUCCESS,
        success: success,
        title: title,
        message: message,
        name: name,
        email: email,
        password: password,
        message: message
    };
}

function RegisterError(message, success, title, error) {
    return {
        type: registerTypes.REGISTER_ERROR,
        message: message,
        success: success,
        title: title,
        error: error,
    };
}

export function errorClear() {
    return { type: registerTypes.REGISTER_ERROR_CLEAR };
}

function messageDisable(message) {
    return {
        type: registerTypes.MESSAGE_DESABLE,
        message: message,
        success: false,
        title: message,
        error: true,
    };
}

function dismissError() {
    return {
        type: registerTypes.DISMISS_ERROR,
    };
}

export function RegisterClear() {
    return {
        type: registerTypes.REGISTER_CLEAR,
    };
}

function ResetError() {
    return {
        type: registerTypes.RESET_ERROR,
    };
}