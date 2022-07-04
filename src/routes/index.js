import React from 'react';
import { Switch } from 'react-router-dom';

import Auth from './authRoute';

import Home from '../view/home/index.jsx';
import Login from '../view/login/index.jsx';
import Register from '../view/register/index.jsx';

const Routes = () => {
    return (
        <Switch>
            <Auth exact path="/" component={Login} />
            <Auth exact path="/register" component={Register} />
            <Auth exact path="/home" component={Home} isPrivate />
        </Switch>
    );
};

export default Routes;
