import { useState } from 'react'
import './App.css'
import LayOut from './Components/LayOut/LayOut'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Framwork from './Components/Framwork/Framwork'
import NotFound from './Components/NotFound/NotFound'

function App() {
  
  let x = createBrowserRouter([
    {path:"/", element: <LayOut />, children: [
      {path:"About", element: <About />},
      {path:"Portfolio", element: <Portfolio />},
      {path:"Contact", element: <Contact />},
      {index: true, element: <Framwork />},
      {path:"*", element: <NotFound />}
    ]}
  ])
  
  return (
    <RouterProvider router={x}>
    <LayOut />
    </RouterProvider>
  )
}

export default App