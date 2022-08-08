import {Routes,Route} from 'react-router-dom'
import './Estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './components/NavBar/NavBar.scss';
import Home from './pages/Home';
import Hamburguesas from './pages/Hamburguesas';
import Sushi from './pages/Sushi';
import Contact from './pages/Contacto';
import NavBar from './components/NavBar/NavBar';
import Footer from './Footer/Footer';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Detail from './pages/Detail';

function Header() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
       <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/hamburguesas/:id' element={<Hamburguesas />} />
        <Route path='/sushi/:id' element={<Sushi />} />
        <Route path='/contacto' element={< Contact />} />
        <Route path='/producto/:id' element={<Detail/>} />

      </Routes>
      {/* <ItemListContainer /> */}
      {/*<ItemDetailContainer />*/}
      <Footer />
    </div>
  );
}

export default Header;
