import { StrictMode } from 'react'
import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import App from './App.jsx'


// ARRAY of objects with path and element.
// import { createBrowserRouter, RouterProvider,BrowserRouter, Router,Route } from 'react-router-dom'
// const router = createBrowserRouter([
//   {
//     path: '/', element: <App/>,
//     children: [
//       {
//         path : "/about-me",
//         element : <About/>
//       },
//       {
//         path : "/education",
//         element : <Education/>
//       },
//     {
//       path: "/skills",
//       element: <Skills/>
//     },
//     {
//       path: "/Projects",
//       element: <Projects/>
//     },
//     {
//       path:"/Contact-Me",
//       element:<Contact/>
//     }
//     ]
//   }
// ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <App/>
    </HashRouter>
  </StrictMode>
)

// react router set karne ke baad hame 
// App component ki jarurat ni ha
