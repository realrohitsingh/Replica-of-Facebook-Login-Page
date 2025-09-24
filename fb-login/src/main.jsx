import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Facebook from './Facebook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Facebook />
  </StrictMode>,
)
