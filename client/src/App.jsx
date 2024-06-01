import './App.css'
import React from 'react'
import LandingPage from './pages/LandingPage'
import { createBrowserRouter , RouterProvider, Outlet} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import TourButton from './components/TourButton'
import AboutUs from './pages/AboutUs'
import HowWeWork from './components/HowWeWork'
import FindHouseSit from './components/FindHouseSit'
import FindPetSitter from './components/FindPetSitter'
import FAQ from './components/faq'
import Contact from './components/Contact'
function App() {
  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Hero />
        },
        {
          path: '/home',
          element: <Hero />
        },
        {
          path: '/about',
          element: <AboutUs />
        },
        {
          path: '/how-it-works',
          element: <HowWeWork />
        },
        {
          path: '/find-pet-sitter',
          element: < FindPetSitter/>
        },
        {
          path: '/find-house-sit',
          element: <FindHouseSit />
        },
        {
          path: '/faq',
          element : <FAQ/>
        },
        {
          path: '/contact',
          element : <Contact/>
        },

        // {
        //   path : '/name-cards',
        //   element: <NameCardPage/>
        // }
      ]
    },

  ]);


  return (
    <>
      <div className="app">

        <RouterProvider router={router} />
        <TourButton/>
      </div>
    </>
  )
}

export default App
