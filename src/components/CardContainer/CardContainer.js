import CardProducts from "../CardProducts/CardProducts.js";
import CardGroup from 'react-bootstrap/CardGroup';

const CardContainer = ({ section }) => {
    return (
        <div>
            <h2>{section}</h2>
            <CardGroup>
                <CardProducts title="Doble Carne" description="Dos carnes jugosas, doble sabor, más placer" price="$470" img="./assets/img/doblecarne.jpg" />
                <CardProducts title="Extra Queso" description="Para los amantes del queso, QUESO" price="$480" img="./assets/img/extraqueso.jpg" />
                <CardProducts title="Veggie" description="Opción vegetariana, hamburguesas para tod@s" price="$450" img="./assets/img/Veggie.jpg" />
                <CardProducts title="Cheese Bomb" description="La especialidad de la casa, si la probas, volvés" price="$500" img="./assets/img/cheeseboomb.jpg" />
            </CardGroup>
        </div>
    )
}

export default CardContainer