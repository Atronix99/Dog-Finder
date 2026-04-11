import './App.css'
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"

function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<Product/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
    
  )
}

export default App
