import React, { useState } from 'react';
import { SnackbarContent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import actions from '../../store/configs/rootAction';

import './styles.css';

function Register() {
    const dispatch = useDispatch();
    const history = useHistory();

    const error = useSelector(state => state.register.error);
    const success = useSelector(state => state.register.success);
    const title = useSelector(state => state.register.title);

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const actionError = (
        <button
            color="secondary"
            size="small"
            onClick={() => actionSnackBarError()}
            className="button-login-error"
        >
            <span className="span-login-error">
                Ok
            </span>
        </button>
    );

    const actionSuccess = (
        <button
            color="secondary"
            size="small"
            onClick={() => actionSnackBarSuccess()}
            className="button-login-error"
        >
            <span className="span-login-error">
                Ok
            </span>
        </button>
    );

    const actionSnackBarError = () => {
        dispatch(actions.register.errorClear());
    }

    const actionSnackBarSuccess = () => {
        dispatch(actions.register.RegisterClear());
        history.push('/');
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const { name, email, password } = form;

        if (name === "" && email === "" && password === "") {

        }

        dispatch(actions.register.Register(form));
    };

    const handleCancel = () => {
        history.push('/');
    };

    return (
        <>
            {error === true ? (
                <SnackbarContent
                    style={{ backgroundColor: '#FF0000' }}
                    color="error"
                    message={title}
                    action={actionError}
                />
            ) : null}
             {success === true ? (
                <SnackbarContent
                    style={{ backgroundColor: '#369403' }}
                    color="success"
                    message={title}
                    action={actionSuccess}
                />
            ) : null}
            <form className="container-register" onSubmit={handleRegister}>
                <div className="container-register-right">
                    <div className="container-logo-register-right">
                        <span className="spanA-logo-register-right">To</span>
                        <span className="spanB-logo-register-right">Do</span>
                    </div>
                    <div className="container-title-register-right">
                        <span className="span-title-register-right">
                            Cadastre-se
                        </span>
                    </div>
                    <div className="container-input-register-right">
                        <div className="container-row-input-register-right">
                            <span className="span-input-register-right">
                                Nome
                                <span className="asterisc-input-register-right">
                                    *
                                </span>
                            </span>
                            <input
                                className="input-input-register-right"
                                placeholder="Digite o seu nome"
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                required={true}
                                maxLength='50'
                                size='50'
                                minLength='10'
                            />
                        </div>
                        <div className="container-row-input-register-right">
                            <span className="span-input-register-right">
                                E-mail de acesso
                                <span className="asterisc-input-register-right">
                                    *
                                </span>
                            </span>
                            <input
                                className="input-input-register-right"
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
                        <div className="container-row-input-register-right">
                            <span className="span-input-register-right">
                                senha{' '}
                                <span className="asterisc-input-register-right">
                                    *
                                </span>
                            </span>
                            <input
                                className="input-input-register-right"
                                placeholder="Digite o seu e-mail"
                                type="password"
                                value={form.password}
                                onChange={e => setForm({ ...form, password: e.target.value })}
                                required={true}
                                maxLength='50'
                                size='50'
                                minLength='10'
                            />
                        </div>
                    </div>
                    <div className="container-access-register-right">
                        <button className="button-access-register-right">
                            <span className="access-access-register-right">
                                Entrar
                            </span>
                        </button>
                    </div>
                    <div className="container-add-register-right">
                        <button
                            className="button-add-register-right"
                            onClick={handleCancel}
                        >
                            <span className="span-link-add-register-right">
                                Cancelar
                            </span>
                        </button>
                    </div>
                </div>
                <div className="container-register-left">
                    <span className="span-register-left">
                        Sistema de listagem
                    </span>
                </div>
            </form>
        </>
    );
}

export default Register;
