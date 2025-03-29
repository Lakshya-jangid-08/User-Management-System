import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContext from './Context/AppContext.jsx'
import Protector from './Components/Protector.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContext>
        <Protector>
          <App />
        </Protector>
      </AppContext>
    </BrowserRouter>
  </StrictMode>,
)
