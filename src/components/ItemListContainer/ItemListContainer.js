import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductsFromMarket, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProductsFromMarket
        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])
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