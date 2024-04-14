import { useState } from 'react'
import './item.css'

export default function Item({product, setCartItem}){

    const [value, setValue] = useState(0)

    return <div className="item">
        <div className="item-img" style={{backgroundImage: `url(${product.image})`}}></div>
        <div className="item-data">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
        <div className="item-action">
            <div className="item-count">
                <button className="btn btn-left" onClick={() => value > 0 && setValue(value-1)}>-</button>
                <input type="number" value={value} name="value" min={0} onChange={(e) => setValue(e.target.value)}/>
                <button className="btn btn-right" onClick={() => setValue(value+1)}>+</button>
            </div>
            <button className="btn card-btn" disabled={value <= 0} onClick={() => {setCartItem(product, value); setValue(0)}}>Add to cart</button>
        </div>
    </div>
}