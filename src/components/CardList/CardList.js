import CardProducts from "../CardProducts/CardProducts.js";
import CardGroup from 'react-bootstrap/CardGroup';

const CardList = ({ dataProducts }) => {
    return (
        <>
        <CardGroup>
                
                
            {dataProducts.map( (product) => {
                return <CardProducts key={product.id} data={product} />
            })}
        </CardGroup>
        </>
    )
}

export default CardList