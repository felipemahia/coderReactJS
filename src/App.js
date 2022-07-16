
import './Estilos.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap';
import './components/NavBar/NavBar.scss'; 

function Header() {
  return (
    <div className='container'>
      <NavBar/>
    </div>
  );
}

export default Header;
