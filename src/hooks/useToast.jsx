import React, { useState, createContext, useContext } from 'react';

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const showToast = (msg) => {
    setMessage(msg);
    setVisible(true);
  };

  const hideToast = () => {
    setVisible(false);
  };
  return (
    <ToastContext.Provider value={{ message, visible, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
