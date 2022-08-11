import { Routes, Route } from 'react-router-dom'
import './Estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './components/NavBar/NavBar.scss';
import Home from './pages/Home';
//import Hamburguesas from './pages/Hamburguesas';
//import Sushi from './pages/Sushi';
import Contact from './pages/Contacto';
import NavBar from './components/NavBar/NavBar';
import Footer from './Footer/Footer';
import Cart from './pages/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartProvider from './context/CartContext';

function Header() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <CartProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<ItemDetailContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/contacto' element={< Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='*' element={<h2>Error 404 - not found</h2>} />
      </Routes>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default Header;
