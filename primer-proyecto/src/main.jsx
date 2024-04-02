import React from 'react'
import ReactDOM from 'react-dom/client'
import {PrimerComponente} from './PrimerComponente'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <PrimerComponente titulo="titulo de react vite" sub={75} elvin="hola" />
  </React.StrictMode>,
)
