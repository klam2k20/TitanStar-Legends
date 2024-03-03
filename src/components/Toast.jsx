import React from 'react';
import { useToast } from '../hooks/useToast';
import '../styles/toast.css';

function Toast() {
  const { message, visible } = useToast();
  return (
    <div className={visible ? 'toast-wrapper flex-row visible' : 'toast-wrapper flex-row'}>
      {message}
    </div>
  );
}

export default Toast;
