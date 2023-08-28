import React from 'react';
import ReactDOM from 'react-dom/client';
import MainProvider from './context/';
import Layout from './components/layout/Layout.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('content')!).render(
    <React.StrictMode>
        <MainProvider>
            <Layout>
                <App />
            </Layout>
        </MainProvider>
    </React.StrictMode>,
)
