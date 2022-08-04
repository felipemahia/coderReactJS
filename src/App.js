import 'bootstrap/dist/css/bootstrap.min.css';
import './Estilos.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap';
import './components/NavBar/NavBar.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function Header() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='container'>
        <div className='row'>
          <ItemListContainer section="Hamburguesas" /> {/* como hago acá para pasar solo los type:'hamburguesa' del mock? */}
          <ItemListContainer section="Sushi" /> {/* idem pero sushi */}
          <ItemListContainer section="Otros éxitos ♥" /> {/* idem pero otros exitos xD */}
        </div>
      </div>
    </div>
  );
}

export default Header;
