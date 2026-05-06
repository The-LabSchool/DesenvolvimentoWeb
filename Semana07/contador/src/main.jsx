import { StrictMode } from 'react'
import { createRoot  } from 'react-dom/client'
import './global.css'

import Dashboard from "./pages/Dashboard/Dashboard.jsx"

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <Dashboard/> 
  </StrictMode>,
)
