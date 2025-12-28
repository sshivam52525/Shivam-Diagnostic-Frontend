import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AllData from './AllData.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About.jsx'
import Packages from './Pages/Packages.jsx'
import Contact from './Pages/Contact.jsx'
import './App.css'



const App = () => {

      const router = createBrowserRouter([
        {
          path: '/',
          element: <AllData />,
          children:[
            {
              path: '/',
              element: <Home/>
            },
            {
              path: '/about',
              element: <About/>
            },
            {
              path:'/packages',
              element:<Packages/>
            },
            {
              path:'/contact',
              element:<Contact/>
            },
            {
              path:'https://lab.flabslis.com/login',
              element: null
            },

          ]
        }
      ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App