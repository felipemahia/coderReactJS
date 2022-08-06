import './NavBar.scss' 
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom' 

const NavBar = () => {
    return (
        <div className="header">
            <div className="header__contenedor">
                <Link to='/'>
                    <img className="header__logo" src="./assets/img/LOGO.png" alt="Logo BBC Burger and Sushi" />
                </Link>
                <div className="header__navLista">
                    <ul>
                        <Link to='/'>
                        <li><button>Inicio</button></li>
                        </Link>
                        <li><button>Hamburguesas</button></li>
                        <li><button>Sushi</button></li>
                        <li><button>Locales</button></li>
                        <CartWidget />
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar