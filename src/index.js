import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// require('dotenv').config();
// const { BlobServiceClient } = require("@azure/storage-blob");
// const storageAccountConnectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
// const blobServiceClient = BlobServiceClient.fromConnectionString(storageAccountConnectionString);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
