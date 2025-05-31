import React from 'react';
import { Toaster } from 'sonner@2.0.3';

export function ToastProvider() {
  return (
    <Toaster 
      position="top-right"
      toastOptions={{
        style: {
          background: '#fff',
          color: '#32343a',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        },
      }}
    />
  );
}