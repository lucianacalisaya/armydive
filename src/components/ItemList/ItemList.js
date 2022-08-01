import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({products}) => {
    const album =products.filter(obj => {
        return obj.category === 'album';
    });
    return(
        <ul className="products">
            {album.map(prod => <Item key={prod.id} product={prod}/>)}
        </ul>      
    )
}

export default ItemList