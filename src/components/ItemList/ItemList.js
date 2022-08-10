import './ItemList.css'
import Item from "../Item/Item"

//ItemList antes de Route
// const ItemList = ({products}) => {
//     const album =products.filter(obj => {
//         return obj.category === 'album';
//     });
//     return(
//         <ul className="products">
//             {album.map(prod => <Item key={prod.id} product={prod}/>)}
//         </ul>      
//     )
// }

const ItemList = ({products}) => {
    return(
        <div className='itemList'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>      
    )
}



export default ItemList