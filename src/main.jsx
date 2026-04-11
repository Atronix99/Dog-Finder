import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import { FavouritesProvider } from './context/FavouritesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <FavouritesProvider>
        <App />
      </FavouritesProvider>
    </HashRouter>
  </StrictMode>,
)
