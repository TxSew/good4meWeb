import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Globalstyle from './components/GlobalStyle/Globalstyle.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <Globalstyle>
       <ToastContainer/>
    <App/>
    </Globalstyle>
    </Router>
  </React.StrictMode>,
)
