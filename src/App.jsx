import './App.css'
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"

function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App