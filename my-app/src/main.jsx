import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nag from './nag.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

  <Nag/>
  </StrictMode>,
)
