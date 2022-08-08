import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return(
        <li style={{color: 'white'}}>
            <button><FontAwesomeIcon icon={faCartShopping}/></button>
            {/* Acá pongo el MODAL para las compras? */}
        </li>
    )
}

export default CartWidget