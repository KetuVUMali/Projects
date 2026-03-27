import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />                 
    {
      /* This is the main component of the application. */
      /* It is rendered in the root element of the HTML document. */
      /* The App component is imported from the App.jsx file. */
      
    }
  </StrictMode>,
)
