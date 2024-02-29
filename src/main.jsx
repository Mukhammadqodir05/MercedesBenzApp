import React, { Suspense, lazy, useEffect  } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

const Contact = lazy(() => import('./componets/contact.jsx'));
const C_ClassSedan = lazy(() => import('./CarBackgroundDetails/C_classSedan/c_class_sedan.jsx'));
const E_ClassSedan = lazy(() => import('./CarBackgroundDetails/E_classSedan/eClassSedan.jsx'));
const E_classWagon = lazy(() => import('./CarBackgroundDetails/E_classWagon/e_classWagon.jsx'));
const EQS_sedan = lazy(() => import('./CarBackgroundDetails/EQS_sedan/eqs_sedan.jsx'));
const Maybach_SClass = lazy(() => import('./CarBackgroundDetails/Maybach_sedan/maybach_SClass.jsx'));

import { ScaleLoader } from 'react-spinners'

const ScrollToTop = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigate]);

    return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className='flex w-full h-screen justify-center items-center '> <ScaleLoader color='#f700ff' loading='loading' size={350} /></div>}>
              <Routes>
                  <Route path='/' element={<App />} />
                  <Route path='/contact' element={<Contact />} />
                  {/* Sedan&Wagons */}
                  <Route path='/c_ClassSedan' element={<C_ClassSedan />} />
                  <Route path='/e_ClassSedan' element={<E_ClassSedan />} />
                  <Route path='/e_ClassWagon' element={<E_classWagon />} />
                  <Route path='/EQS_sedan' element={<EQS_sedan />} />
                  <Route path='/Maybach_Sclass' element={<Maybach_SClass />} />
              </Routes>
          </Suspense>
      </BrowserRouter>
  </React.StrictMode>,
);
