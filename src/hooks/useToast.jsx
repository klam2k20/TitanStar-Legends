import React, { useState, createContext, useContext } from 'react';

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState();

  const showToast = (msg) => {
    if (timeoutId) clearTimeout(timeoutId);
    setMessage(msg);
    setVisible(true);
    setTimeoutId(setTimeout(hideToast, 5000));
  };

  const hideToast = () => {
    if (timeoutId) clearTimeout(timeoutId);
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
