import './cartitem.css'

export default function CartItem({product, changeCart, deleteFromCart}){
    return <div className="cart-item">
        <div className="cart-item-img" style={{backgroundImage: `url(${product.image})`}}></div>
        <div className="cart-item-data">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
        <div className="cart-item-action">
            <div className="item-count">
                <button className="btn btn-left" onClick={() => product.counter > 0 && changeCart({...product, counter: product.counter-1})}>-</button>
                <input type="number" value={product.counter} name="value" min={0} onChange={(e) => changeCart({...product, counter: e.target.value})}/>
                <button className="btn btn-right" onClick={() => changeCart({...product, counter: parseInt(product.counter)+1})}>+</button>
            </div>
            <button className="btn btn-delete" onClick={()=>deleteFromCart(product)}>Delete</button>
        </div>
    </div>
}