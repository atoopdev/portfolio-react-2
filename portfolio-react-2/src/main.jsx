import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route,} from "react-router-dom"
import './index.css'
import Root from "./routes/root"
import ErrorPage from './routes/error-page'
import Projects from "./routes/projects"
import Main from "./routes/main"

// manages routing


// routes go here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"projects/",
        element: <Projects />,
      },
      {
        path:"main/",
        element:<Main />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
