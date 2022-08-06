import { useState } from 'react'
import Button from 'react-bootstrap/Button';

/* const ItemCount = ({ stock, }) => {
    const [counter, setCounter] = useState(1);

    const oneLess = () => {
        if (counter < stock) {
            setCounter(counter - 1);
        }
    }
    const oneMore = () => {
        if (counter > 1) {
            setCounter(counter + 1)
        }
    } */

const ItemCount = ({ stock }) => {
    const [counter, setCounter] = useState(1);

        function ingSig(signo) {
            if (signo === "-") {
                if (counter > 1) {
                    setCounter(counter - 1);
                }
            } else if (signo === "+") {
                if (counter < stock) {
                    setCounter(counter + 1);
                }
            }
        }


        return (
            <div className='contadorProductos'>
                <Button variant="outline-danger" size="sm" onClick={() => ingSig("-")}>-</Button>
                <p>{counter}</p>
                <Button variant="outline-danger" size="sm" onClick={() => ingSig("+")}>+</Button>
            </div>
        )
    }

    export default ItemCount