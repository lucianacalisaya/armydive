import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, img}) => {
    const handleClick = (e) => {
        e.stopPropagation();
    };/*Le puse el handleClick para ver si esto estaba afectando a que vuelva el valor a 1 pero no creo que sea eso*/

    return (
            <div className='product' onClick={handleClick}>
                <img className='product-image' src={img} alt={name}/>
                <h3 className='product-title'>{name}</h3>
                <Link to={`/detail/${id}` }>See Details</Link>
            </div>
      );
};

export default Item