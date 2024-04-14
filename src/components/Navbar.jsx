import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'
import './navbar.css'

export default function Navbar({counter}) {
    return <div className="navbar">
        <div className="navbar-logo">
            <img src={logo}/>
        </div>
        <div className="navbar-links">
            <ul>
                <li className="link"><Link to="/">Home</Link></li>
                <li className="link"><Link to="shop">Shop</Link></li>
                <li className="link"><Link to="cart">Cart<div className="counter">{counter}</div></Link></li>
            </ul>
        </div>
    </div>
}