import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Settings from './pages/Settings';
import AppLayout from './AppLayout';
import ErrorPage from './pages/ErrorPage';
import Analytics from './pages/Analytics';
import Product from './pages/Product';

const routes = createBrowserRouter([
  {
    path: '/', element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "settings", element: <Settings /> },
      { path: "analytics", element: <Analytics /> },
    ]
  },


])

const App = () => {
  return (
    <>

      <RouterProvider router={routes} />
    </>
  )
}

export default App