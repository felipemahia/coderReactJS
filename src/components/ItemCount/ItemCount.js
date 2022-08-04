import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, valInicial, onAdd }) => {
    const [counter, setCounter] = useState(0);
    const oneMore = () => {
        if (counter > valInicial){
        setCounter(counter + 1)
    }
    }

    const oneLess = () => {
        if (counter < stock ) {
        setCounter(counter - 1);
    }
    }
    
    return (
    <div className='contadorProductos'>
        <Button variant="outline-danger" size="sm" onClick={oneLess}>-</Button>
        <p>{counter}</p>
        <Button variant="outline-danger" size="sm" onClick={oneMore}>+</Button>
    </div>
    )
}

export default ItemCount