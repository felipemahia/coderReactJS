import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = () => {
    const [counter, setCounter] = useState(1);
    const oneMore = () => {
        setCounter(counter + 1);
    }
    const oneLess = () => {
        setCounter(counter - 1);
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