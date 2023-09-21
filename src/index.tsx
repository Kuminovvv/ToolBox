import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/components/App/App';
import '../src/core/components/App/App.scss'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

