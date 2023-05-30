import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'
import DetailItemContainer from './components/DetailItemContainer/DetailItemContainer'
import { createContext, useContext } from 'react'
import { ProviderCartContext, cartContext } from './components/ContextCart/ContextCart'
import Cart from './components/Cart/Cart'
import Checkout from './components/CheckoutContainer/CheckoutContainer'
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation'
import Footer from './components/Footer/Footer'
import InitContainer from './components/InitContainer/InitContainer'
import Login from './components/Login/Login'

function App() {
 
  return (
    <ProviderCartContext>

        <BrowserRouter>
          <NavBar />
          <Routes>
          {/* <Route
            path='/'
            element={<InitContainer />}
          /> */}
            <Route 
            path='/'
            element={<Login />} 
            />
            <Route 
            path='/productos'
            element={<ItemListContainer />} 
            />
            <Route 
            path='/category/:cpd'
            element={<ItemListContainer />} 
            />
            <Route 
            path='/detail/:idpd'
            element={<DetailItemContainer />} 
            />
            <Route 
            path='/checkout'
            element={<Checkout/>} 
            />
            <Route 
            path='/orderConfirmation'
            element={<OrderConfirmation/>} 
            />
            <Route 
            path='/orderConfirmation'
            element={<OrderConfirmation/>} 
            />
            <Route 
            path='*'
            element={<Navigate to="/"/>} 
            />
        
          </Routes>
          <Footer/>
        </BrowserRouter>
      
    </ProviderCartContext>
  )
}

export default App
