import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./Components/index.js"

// ARRAY of objects with path and element.
import { createBrowserRouter, RouterProvider,BrowserRouter, Router,Route } from 'react-router-dom'

import About from './Components/About/About.jsx'
import Header from "./Components/Header/Header";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import User from './Components/User.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    children: [
      {
        path : "/about-me",
        element : <About/>
      },
      {
        path : "/education",
        element : <Education/>
      },
    {
      path: "/skills",
      element: <Skills/>
    },
    {
      path: "/Projects",
      element: <Projects/>
    },
    {
      path:"/Contact-Me",
      element:<Contact/>
    },
    {
      path:"/user/:userid",
      element:<User/>
    }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

// react router set karne ke baad hame 
// App component ki jarurat ni ha
