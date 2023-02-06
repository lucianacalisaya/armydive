import { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true)
    const { productId } = useParams();

    useEffect(() => {
        getDoc(doc(db, 'products', productId)).then(response => {
            console.log(response)
            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])


    if(loading) {
        return 
    }
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