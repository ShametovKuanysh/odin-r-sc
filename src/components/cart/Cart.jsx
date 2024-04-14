import CartItem from './cart-item/CartItem'
import './cart.css'
import {useOutletContext} from 'react-router-dom'

export default function Cart(){

    const [cartProducts, setCartProducts] = useOutletContext()

    const changeCart = (product) => {
        const arr = cartProducts.map(cartp => {
            if (cartp.id === product.id){
                return product
            }

            return cartp
        })
        setCartProducts(arr)
    }

    const deleteFromCart = (product) => {
        setCartProducts(cartProducts.filter(pr => pr.id !== product.id))
    }

    return <div className="cart">
        <h3>Cart Items Count - {cartProducts.length}</h3>
        <h3>Cart Price - ${cartProducts.reduce((a, b) => {return a + b.counter * b.price}, 0)}</h3>

        <div className="cart-items">
            {cartProducts.map(product => <CartItem key={product.id} product={product} changeCart={changeCart} deleteFromCart={deleteFromCart} />)}
        </div>
    </div>
}