import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { AvailablePointsProvider } from './hooks/useAvailablePoints';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AvailablePointsProvider>
      <App />
    </AvailablePointsProvider>
  </React.StrictMode>
);
