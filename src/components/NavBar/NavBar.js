import './NavBar.scss' 
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom' 

const NavBar = () => {
    return (
        <div className="header">
            <div className="header__contenedor">
                <Link to='/'>
                    <img className="header__logo" src="../assets/img/LOGO.png" alt="Logo BBC Burger and Sushi" />
                </Link>
                <div className="header__navLista">
                    <ul>
                        <Link to='/'><li><button>Inicio</button></li></Link>
                        <Link to='/category/hamburguesas'><li><button>Hamburguesas</button></li></Link>
                        <Link to='/category/sushi'><li><button>Sushi</button></li></Link>
                        <Link to='/contacto'><li><button>Contacto</button></li></Link>
                        <CartWidget />
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar