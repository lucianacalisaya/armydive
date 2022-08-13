import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Link, useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId])

    return (
        <div>
            {/* <button>
                <Link to='/'>--</Link> en realida hacerlo para ir hacia atras
            </button> */}
           <ItemDetail {...product}/>    
        </div>
          
    )
}

export default ItemDetailContainer