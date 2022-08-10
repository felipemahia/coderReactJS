import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return(
        <li style={{color: 'white'}}>
            <button><FontAwesomeIcon icon={faCartShopping}/></button>
        </li>
    )
}

export default CartWidget