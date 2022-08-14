import { useState, useEffect} from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(); /*Aca tenia llaves pero las saque porque es una de las diferencias que tenia con lo que subio el profe, no creo que esto sea el error.*/ 

    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product);
            })
            .catch(error => {
                console.log(error);
            })
    }, [productId])

    return (
        <div>
            {/* <button>
                <Link to='/'>--</Link> en realida hacerlo para ir hacia atras
            </button> */}
           <ItemDetail {...product}/>    
        </div>
          
    );
};

export default ItemDetailContainer