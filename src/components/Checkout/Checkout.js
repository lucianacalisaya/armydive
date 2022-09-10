import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"

import { db } from "../../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const totalQuantity = getQuantity()
    const total = getTotal()

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name,
                    email
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore
    
            const outOfStock = []
    
            const batch = writeBatch(db)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
    
                console.log(`Your order id is: ${orderAdded.id}`)
                clearCart()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            } else {
                console.log('Products out of stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    if(orderCreated) {
        return <h1>Order created successfully. You will be redirected to home</h1>
    }
    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    return (
        <>
            <h1>Checkout</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type='text' value={name} onChange={handleChangeName}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' value={email} onChange={handleChangeEmail}/>
                </div>
            </form>
            <button className="Option" onClick={createOrder}>Generate order</button>
        </>
    )
}

export default Checkout