import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import PageError from './page-error';
import Gallery from './routes/gallery';
import ServicesMenu from './routes/services-menu';
import Manicure from './routes/manicure'
import Pedicure from './routes/pedicure'
import Wax from './routes/wax'
import More from './routes/more'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageError />,
    children: [
      {
        path: "/gallery",
        element: <Gallery />,
        errorElement: <PageError />
      },
      {
        path: "/services-menu",
        element: <ServicesMenu />,
        errorElement: <PageError />,
        children: [
          {
            path: "manicure",
            element: <Manicure />,
            errorElement: <PageError />
          },
          {
            path: "pedicure",
            element: <Pedicure />,
            errorElement: <PageError />
          },
          {
            path: "wax",
            element: <Wax />,
            errorElement: <PageError />
          },
          {
            path: "more",
            element: <More />,
            errorElement: <PageError />
          },
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
