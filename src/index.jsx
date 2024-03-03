import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { AvailablePointsProvider } from './hooks/useAvailablePoints';
import './styles/index.css';
import { ToastProvider } from './hooks/useToast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <AvailablePointsProvider>
        <App />
      </AvailablePointsProvider>
    </ToastProvider>
  </React.StrictMode>
);
