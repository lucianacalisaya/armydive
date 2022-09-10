import './Item.scss';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price}) => {
    const handleClick = (e) => {
        e.stopPropagation();
    };/*Le puse el handleClick para ver si esto estaba afectando a que vuelva el valor a 1 pero no creo que sea eso*/

    return (
            <Link to={`/detail/${id}` } className='product' onClick={handleClick}>
                <div className='product__imageContainer'>
                    <img className='product__image' src={img} alt={name}/>
                </div>
                <h3 className='product__title'>{name}</h3>
                <h4 className='product__price'><span>From</span> ${price}USD</h4>
            </Link>
      );
};

export default Item