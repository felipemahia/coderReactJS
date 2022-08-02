import 'bootstrap/dist/css/bootstrap.min.css';
import './Estilos.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap';
import './components/NavBar/NavBar.scss';
import CardContainer from './components/CardContainer/CardContainer';

function Header() {
  /* fetch('../utils/productsMock.js')
    .then((res) => res.json())
    .then((data) => {console.log(data)}); 
    Acá no logro traer el mock, porque es un JS creo; pero no se si dejarlo así como está, o si pasarlo a json y traerlo con
    */
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='container'>
        <div className='row'>
        <CardContainer section="Hamburguesas" /> {/* como hago acá para pasar solo los type:'hamburguesa' del mock? */}
        <CardContainer section="Sushi" /> {/* idem pero sushi */}
        <CardContainer section="Otros éxitos ♥" /> {/* idem pero otros exitos xD */}
        </div>
      </div>
    </div>
  );
}

export default Header;
