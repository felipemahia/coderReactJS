import './NavBar.scss' 

const NavBar = () => {
    return (
        <div className="header">
            <div className="header__contenedor">
                    <img className="header__logo" src="./assets/img/LOGO.png" alt="LogoVapeLife" />
                <div className="header__navLista">
                    <ul>
                        <li><button>Inicio</button></li>
                        <li><button>Equipos</button></li>
                        <li><button>Liquidos</button></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar