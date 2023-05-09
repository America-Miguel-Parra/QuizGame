import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuPrincipal from './MenuPrincipal.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MenuCapturar from './modulos/capturar/MenuCapturar.jsx';
import MenuJugar from './modulos/juego/MenuJugar.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPrincipal/>,
  },

  {
    path: "/capturar",
    element: <MenuCapturar/>,
  },

  {
    path: "/juego",
    element: <MenuJugar/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
