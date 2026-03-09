
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './src/index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('React app rendered successfully');
  } catch (error) {
    console.error('Error rendering React app:', error);
    // Fallback: render a simple message
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    rootElement.innerHTML = `
      <div style="color: white; background: #0D0D0D; padding: 20px; font-family: Arial, sans-serif;">
        <h1>Maison d'Or Patisserie</h1>
        <p>La aplicación se está cargando...</p>
        <p style="color: #C8A96A;">Error: ${errorMessage}</p>
      </div>
    `;
  }
} else {
  console.error('Root element not found');
}
