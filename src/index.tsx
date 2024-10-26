import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@/css/index.css';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Could not find root element!');
}

const rootElement = createElement(() => {
    return (
        <App />
    );
});

createRoot(root).render(rootElement);
