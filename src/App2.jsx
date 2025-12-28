
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Packages from './Pages/Packages.jsx'



function App() {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
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
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/packages',
          element:<Packages/>
        },
        {
          path:'/downloadreports',
          element:<Packages/>
        }
      ]
    }
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
