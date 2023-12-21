import { ItemListContainer as Home } from "./components/ItemListContainer/ItemListContainer";
import { ItemListContainer as Category } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar as Menu } from "./components/NavBar/NavBar";


import "bootstrap/dist/css/bootstrap.min.css";
import { CartContextProvider } from "./contexts/CartContext";
import { CartContainer } from './components/CartContainer/CartContainer';





function App() {
  return (

    <BrowserRouter>
      <CartContextProvider>
        <div className="container">
          <Menu />
          <Routes>
            <Route path='/' element={<Home greeting='Bienvenidos a la tienda de Videoland Post' />} />
            <Route path='/category/:cid' element={<Category />} />
            <Route path='/detail/:pid' element={<ItemDetailContainer />} />
            <Route path='/cart' element={< CartContainer />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          <br />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;
