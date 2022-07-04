import React from 'react';

import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { persistor } from './store';

import './index.css';

function App() {
    return (
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </PersistGate>
    );
}

export default App;


