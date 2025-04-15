import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import AppLayout from './components/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App 