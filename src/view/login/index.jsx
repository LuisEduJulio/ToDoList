import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import actions from '../../store/configs/rootAction';

import './styles.css';

function Login() {
    const dispatch = useDispatch();
    const matches = useMediaQuery('(min-width:600px)');
    const error = useSelector(state => state.auth.error);
    const message = useSelector(state => state.auth.message);
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const action = (
        <button
            color="secondary"
            size="small"
            onClick={() => actionSnackBar()}
            className="button-login-error"
        >
            <span className="span-login-error">
                Ok
            </span>
        </button>
    );

    const actionSnackBar = () => {
        dispatch(actions.auth.AuthErrorClear())
    }

    const handleOpenHome = (e) => {
        e.preventDefault();
        dispatch(actions.auth.AuthLogin(form))
    };

    useEffect(() => {
        dispatch(actions.auth.AuthErrorClear())
    }, [])

    return (
        <>
            {error === true ? (
                <SnackbarContent
                    style={{ backgroundColor: '#FF0000' }}
                    color="error"
                    message={message}
                    action={action}
                />
            ) : null}
            <div className="container-login">
                <form className="container-login-right" onSubmit={handleOpenHome}>
                    <div className="container-logo-login-right">
                        <span className="spanA-logo-login-right">To</span>
                        <span className="spanB-logo-login-right">Do</span>
                    </div>
                    <div className="container-title-login-right">
                        <span className="span-title-login-right">
                            Faça seu login
                        </span>
                    </div>
                    <div className="container-input-login-right">
                        <div className="container-row-input-login-right">
                            <span className="span-input-login-right">
                                E-mail de acesso
                                <span className="asterisc-input-register-right">
                                    *
                                </span>
                            </span>
                            <input
                                className="input-input-login-right"
                                placeholder="Digite o seu e-mail"
                                type="email"
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                required={true}
                                maxLength='50'
                                size='50'
                                minLength='10'
                            />
                        </div>
                        <div className="container-row-input-login-right">
                            <span className="span-input-login-right">
                                Senha
                                <span className="asterisc-input-register-right">
                                    *
                                </span>
                            </span>
                            <input
                                className="input-input-login-right"
                                placeholder="Digite sua senha"
                                type="password"
                                value={form.password}
                                onChange={e => setForm({ ...form, password: e.target.value })}
                                maxLength='50'
                                size='50'
                                minLength='5'
                            />
                        </div>
                    </div>
                    <div className="container-access-login-right">
                        <button
                            className="button-access-login-right"
                            type='submit'
                        >
                            <span className="access-access-login-right">
                                Entrar
                            </span>
                        </button>
                    </div>
                    <div className="container-add-login-right">
                        <span className="span-add-login-right">
                            Não tem acesso? Entre em contato:
                        </span>
                    </div>
                    <div className="container-add-login-right">
                        <a href="/register">Registre-se</a>
                    </div>
                </form>
                {matches === true ? (
                    <div className="container-login-left">
                        <span className="span-login-left">
                            To Do List
                        </span>
                    </div>
                ) : null}
            </div>

        </>
    );
}

export default Login;
