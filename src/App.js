import {Routes,Route} from 'react-router-dom'
import './Estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './components/NavBar/NavBar.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import ItemDetail from './components/ItemDetail/ItemDetail';


function Header() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' section="Nuestros Productos" element = {<ItemListContainer />}/>
        <Route path='/ItemDetail/:type' element='Acá iría el itemdetailcontainer si me funcionara bien :C' />
      </Routes>
    </div>
  );
}

export default Header;
