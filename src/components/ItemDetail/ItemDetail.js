import './ItemDetail.scss';
import Counter from '../Counter/Counter';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const ItemDetail = ({ id, name, img, price, description, stock }) => {
    
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
        
        const productToAdd = {
            id, img, name, price, quantity
        }

        addItem(productToAdd)
        
    }

    const productQuantity = getProductQuantity(id)

    return (
        <div className='detail'>
            <div className='detail__image-container'>
                <img className='detail__image' src={img} alt={name}/>
            </div>
            <div className='detail__info'>
                <h3 className='detail__title'>{name}</h3>
                <p className='detail__price'>${price}</p>
                {
                    quantityToAdd === 0 ? (
                    <Counter onAdd={handleOnAdd} stock={stock} initial={productQuantity} /> 
                    ) : (
                        <Link className='detail__cart' to='./cart'>Go to cart</Link>
                    )
                }
                <p className='detail__description'>{description}</p>
            </div>
        </div>
    );
};

export default ItemDetail