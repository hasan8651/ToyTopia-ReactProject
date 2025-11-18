import { StrictMode } from 'react'
import "aos/dist/aos.css";
import './index.css'
import { createRoot } from 'react-dom/client'
import AuthProvider from './context/AuthProvider'
import { RouterProvider } from 'react-router'
import { router } from './routes/router'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
