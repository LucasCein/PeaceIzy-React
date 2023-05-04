import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'
import DetailItemContainer from './components/DetailItemContainer/DetailItemContainer'
import { createContext } from 'react'
import { ProviderCartContext } from './components/Context/Context'
export const cartContext=createContext([])
function App() {

  return (
    
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route 
          path='/'
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
          path='*'
          element={<Navigate to="/"/>} 
          />
        </Routes>
        
      </BrowserRouter>
    
  )
}

export default App
