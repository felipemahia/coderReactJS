import './NavBar.scss' 

const NavBar = () => {
    return (
        <div className="header">
            <div className="header__contenedor">
                    <img className="header__logo" src="./assets/img/LOGO.png" alt="LogoVapeLife" />
                <div className="header__navLista">
                    
                        <li><button className='btn-outline-primary'>Inicio</button></li>
                        <li><button className='btn-outline-primary'>Equipos</button></li>
                        <li><button className='btn-outline-primary'>Liquidos</button></li>
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar