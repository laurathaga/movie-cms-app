import React from 'react'
import ReactDOM from 'react-dom/client'
import MainProvider from './context/index.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('content')!).render(
    <React.StrictMode>
        <MainProvider>
            <App />
        </MainProvider>
    </React.StrictMode>,
)
