import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { AvailablePointsProvider } from './hooks/useAvailablePoints';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AvailablePointsProvider>
      <App />
    </AvailablePointsProvider>
  </React.StrictMode>
);
