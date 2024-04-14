import { useState } from 'react';
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";

function App() {
  const [cartProducts, setCartProducts] = useState([])

  return (
    <>
      <Navbar counter={cartProducts.length}/>
      <Outlet context={[cartProducts, setCartProducts]}/>
      <Footer />
    </>
  )
}

export default App
