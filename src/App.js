import Home from './pages/Home'
import ErroPagina from './pages/ErroPagina';
import Products from './pages/Products'
import Cadastro from './pages/Cadastro'
import Opiniao from './pages/Opiniao'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
        <Route path="/opiniao" element={<Opiniao/>}></Route>
        <Route path="/notfound" element={<ErroPagina />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
