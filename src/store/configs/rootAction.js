import * as authAction from '../modules/auth/auth.actions';
import * as registerAction from '../modules/register/register.actions';

const rootAction = {
    auth: authAction,
    register: registerAction
};

export default rootAction;
