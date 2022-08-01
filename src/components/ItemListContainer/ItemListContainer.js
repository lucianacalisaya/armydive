import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductsFromMarket } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsFromMarket().then(products => {
            setProducts(products)
        })
    }, [])
    return (
        <>
            <div className="albums-container">
                <h3 className="albums-title">{greeting}</h3>
            </div>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer