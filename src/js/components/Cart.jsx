import React, { useState } from "react";

const Cart = ({articulos = 1})=>{

    const [items,setItems] = useState(articulos)

    const [cartItems, setCartItem] = useState(1)

    function addItems(){
        console.log("addItems")
        setItems(items + cartItems)
    }

    
     
    return(
        <>
            <div className="text-center">
                <h4 className="text-center mt-5">
                    {items}
                    <i className="bi bi-cart2"></i>
                </h4>
            </div>
            <div className="card" style={{width: "20rem"}}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Aprende React</h5>
                    <p className="card-text">Libro aprende React , en este libro aprenderas sobre componenentes, class, props y hooks, especialmente el useState</p>
                    <button onClick={()=>{
                        if (cartItems > 1) setCartItem(cartItems - 1)
                        }} >-</button>
                    <input type="number" value={cartItems}  />
                    <button onClick={()=>setCartItem(cartItems + 1)} >+</button>
                    <a onClick={addItems} href="#" className="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>
            <div className="text-center">
                <a onClick={ ()=>setItems(0)} href="#" className="btn btn-danger">Limpiar carrito</a>
            </div>
        </>
    )
}

export default Cart