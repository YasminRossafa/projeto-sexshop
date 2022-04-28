import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
