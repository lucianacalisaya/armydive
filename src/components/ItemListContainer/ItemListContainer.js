import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams();

    useEffect(() => {
        const collectionRef = !categoryId 
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))
        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data=doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch(error=> {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId]);

    if(loading) {
        return <h1>Loading...</h1>
    }
    
    return (
        <>
            <div className="albums-container">
                <h3 className="albums-title">{categoryId ? categoryId : 'Our products'}</h3>
                <ItemList products={products}/>
            </div>
        </>
    );
};

export default ItemListContainer