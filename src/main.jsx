import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import './index.css'
import App from './App.jsx'
const router = new createBrowserRouter([
  {
      path: '/',
      element: <Navigate to="/home" replace />,
  },
  {
    path: "/:name",
    element: <App/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
