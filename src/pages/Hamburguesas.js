import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import products from "../utils/productMock"

const Hamburguesas = () => {
    return(
        <h2>
            <ItemDetailContainer data={products} />
        </h2>
    )
}

export default Hamburguesas