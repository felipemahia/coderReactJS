import './NavBar.scss' 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

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
                        <li style={{color: 'white'}}><button><FontAwesomeIcon icon={faCartShopping}/></button></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar