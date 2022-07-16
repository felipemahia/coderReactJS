import 'bootstrap/dist/css/bootstrap.min.css';
import './Estilos.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap';
import './components/NavBar/NavBar.scss';
import CardProduct from './components/CardProducts/CardProducts';

function Header() {
  return (
    <div className='container'>
      <div className='container'>
        <NavBar />
      </div>
      <div className='container'>
        <h1>Productos</h1>
        <CardProduct />
      </div>
    </div>
  );
}

export default Header;
