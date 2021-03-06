import './NavBar.scss' 
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="header">
            <div className="header__contenedor">
                    <img className="header__logo" src="./assets/img/LOGO.png" alt="LogoVapeLife" />
                <div className="header__navLista">
                    <ul>
                        <li><button>Inicio</button></li>
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