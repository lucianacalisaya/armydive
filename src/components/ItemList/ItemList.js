import Item from "../Item/Item"

const ItemList = ({products}) => {
    const album =products.filter(obj => {
        return obj.category === 'album';
    });
    return(
        <ul>
            {album.map(prod => <Item key={prod.id} product={prod}/>)}
        </ul>      
    )
}

export default ItemList