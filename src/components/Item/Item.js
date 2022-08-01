import './Item.css';
import Counter from '../Counter/Counter';

const Item = ({product}) => {
    const handleOnAdd = (quantity) => {
        console.log(`Add to chart: ${quantity}`)
    };
    return (
            <li className='product'>
                <h3 className='product-title'>{product.name}</h3>
                <img className='product-image' src={product.img} alt={product.name}/>
                <Counter stock={10} onAdd={handleOnAdd}/>
            </li>
      )  
}

export default Item