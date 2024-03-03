import React, { useEffect } from 'react';
import { useToast } from '../hooks/useToast';
import '../styles/toast.css';

function Toast() {
  const { message, visible, hideToast } = useToast();

  return (
    <div className={visible ? 'toast-wrapper flex-row visible' : 'toast-wrapper flex-row'}>
      {message}
      <button className='close' onClick={hideToast}>
        X
      </button>
    </div>
  );
}

export default Toast;
