import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductsFromMarket, getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()


    
    useEffect(() => {
        if (!categoryId) {
            getProductsFromMarket().then(products => {
                setProducts(products)
            })
        } else {
            getProductsByCategory(categoryId).then(products => {
                setProducts(products)
            })
        }
    }, [categoryId])
    return (
        <>
            <div className="albums-container">
                <h3 className="albums-title">{categoryId ? categoryId : 'Our products'}</h3>
                <ItemList products={products}/>
            </div>
        </>
    )
}

export default ItemListContainer