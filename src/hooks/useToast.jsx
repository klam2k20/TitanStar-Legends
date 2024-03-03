import React, { useState, createContext, useContext } from 'react';

const ToastContext = createContext();

/**
 * Keep track of toast info
 */
const ToastProvider = ({ children }) => {
  const [isSuccess, setIsSuccess] = useState(1);
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState();

  const showToast = (msg, type = 1) => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsSuccess(type);
    setMessage(msg);
    setVisible(true);
    setTimeoutId(setTimeout(hideToast, 5000));
  };

  const hideToast = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsSuccess(1);
    setMessage('');
    setVisible(false);
  };

  return (
    <ToastContext.Provider value={{ isSuccess, message, visible, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
