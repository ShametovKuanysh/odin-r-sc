import { useEffect, useState } from 'react'
import './shop.css'
import Item from '../item/Item'
import { useOutletContext } from "react-router-dom";


export default function Shop(){
    const [cartProducts, setCartProducts] = useOutletContext();
    const [products, setProducts] = useState([])

    function changeCart(item, counter){
        const arr = cartProducts.map(cartp => {
            if (cartp.id === item.id){
                return {...item, counter: cartp.counter + counter}
            }

            return cartp
        })
        setCartProducts(arr)
        // setCartProducts([...cartProducts, item])
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                setProducts(json)
            })
    },[])

    return <div className="shop">
        {products.map(product => <Item key={product.id} product = {product} setCartItem = {changeCart}/>)}
    </div>
    
}