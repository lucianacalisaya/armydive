import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import Spinner from "../Spinner/Spinner"
import './Checkout.scss'
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
                    navigate('armydive/')
                }, 3500)
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
        return (
            <div className='checkoutLoading'>
                <h1 className='checkoutLoading__title'>Creating order</h1>
                <Spinner/>
            </div>
        ) 
    }

    if(orderCreated) {
        return (
            <div className="checkoutSuccessful">
                <h1 className='checkoutSuccessful__title'>Order created successfully.</h1>
                <h2>You will be redirected.</h2>
            </div>
        )
    }
    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    return (
        <div className='checkout'>
            <h1 className='checkout__title'>Checkout</h1>
            <hr/>
            <form className='checkout__form'>
                <div className='checkout__inputBox'>
                    <label>Name:</label>
                    <input className='checkout__input' type='text' value={name} onChange={handleChangeName}/>
                </div>
                <div className='checkout__inputBox'>
                    <label>Email:</label>
                    <input className='checkout__input'type='text' value={email} onChange={handleChangeEmail}/>
                </div>
                <button className='checkout__order' onClick={createOrder}>Generate order</button>
            </form>
        </div>
    )
}

export default Checkout