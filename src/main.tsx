import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { SITE } from './config'
import './index.css'

document.title = `${SITE.name1} & ${SITE.name2} - Zaproszenie na ślub`

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
