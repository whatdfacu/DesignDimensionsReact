import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function CartItem( { id, name, image, price, amount }) {
    const { eliminateFromCart } = useContext(CartContext)

    return (
        <div>
            <div>    
                <img src={image} alt={name} />
                <button onClick={ () => eliminateFromCart(id )} >
                    X
                </button>
            </div>
            <div>    
                <h5>Producto: {name}</h5>
                <h6>Precio ${price}</h6>
                <h6>Cantidad: {amount}</h6>
                <h6>Sub Total ${amount * price}</h6>
            
                
            </div>
        </div>
    )
}

export default CartItem
