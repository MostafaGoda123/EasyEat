import React, { Fragment } from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import WhishList from './pages/WhishList';
import Cart from './pages/Cart';
import { MobileHandlerProvider } from './context/MobileHandler';

const App = () => {
   const Routing = createHashRouter([
      {path : "/" , element : <Layout /> , children : [
         {index : true , element : <Home />},
         {path : "/about" , element : <About />},
         {path : "/shop" , element : <Shop />},
         {path : "/contact" , element : <Contact />},
         {path : "/whishList" , element : <WhishList />},
         {path : "/cart" , element : <Cart />},
      ]},
   ])

   return (
      <Fragment>
         <MobileHandlerProvider>
            <RouterProvider router={Routing} />
         </MobileHandlerProvider>
      </Fragment>
   )
}

export default App
