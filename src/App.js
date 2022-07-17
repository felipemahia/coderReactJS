import 'bootstrap/dist/css/bootstrap.min.css';
import './Estilos.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap';
import './components/NavBar/NavBar.scss';
import CardContainer from './components/CardContainer/CardContainer';

function Header() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='container'>
        <div className='row'>
        <CardContainer section="Hamburguesas" />
        <CardContainer section="Sushi" />
        <CardContainer section="Otros éxitos ♥" />
        </div>
      </div>
    </div>
  );
}

export default Header;
