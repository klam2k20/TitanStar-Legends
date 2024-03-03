import React from 'react';
import { useToast } from '../hooks/useToast';
import '../styles/toast.css';

function Toast() {
  const { isSuccess, message, visible, hideToast } = useToast();

  return (
    <div
      className={`toast-wrapper flex-row ${visible ? 'visible' : ''} ${!isSuccess ? 'error' : ''}`}>
      {message}
      <button className='close' onClick={hideToast}>
        X
      </button>
    </div>
  );
}

export default Toast;
