import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Sedans
import C_ClassSedan from './CarBackgroundDetails/C_classSedan/c_class_sedan.jsx'
import E_ClassSedan from './CarBackgroundDetails/E_classSedan/eClassSedan.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/c_ClassSedan' element={< C_ClassSedan/>}/>
            <Route path='/e_ClassSedan' element={< E_ClassSedan/>}/>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
