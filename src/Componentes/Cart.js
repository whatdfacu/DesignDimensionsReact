import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from './CartContext'
import CartItem from './CartItem'
import firebase from 'firebase/app'
import { firestore } from '../firebaseConfig'


const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext)

    const [ nombre, setNombre ] = useState("")
    const [ telefono, setTelefono ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ id, setId] = useState("")

    
    const manejarCompra = (e) => {
        e.preventDefault()
        const datosCompra = {
            buyer : {
                nombre:nombre, 
                telefono:telefono, 
                email:email
                
            },
            items : cart,
            date : firebase.firestore.Timestamp.fromDate(new Date()),
            total : total,
        }
       
        
     
     const db = firestore
        const collection = db.collection("orders")

        collection
        .add(datosCompra)
        .then((response)=>{
            setId(response.id)
        })
        .catch((err)=>{
            console.log(err)
        }) 
    }

    return (
        <div className= "text-center">
            { cart.length > 0 
            ?
            (<h2 className="TituloCart" >Detalle del carrito</h2>)
            :
            (
            <>
            <h2>Aun no hay productos seleccionados</h2>
            <button className="BotonTienda" onClick={clearCart}> 
                    
            <NavLink to="/">Ir a comprar</NavLink>

            </button>
                
            </>
            )}

            <div className="ItemsCarrito">
                { cart.length > 0 && cart.map( product =>
                <CartItem key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                amount={product.amount} /> )}
            </div>
 
            { cart.length > 0 &&
            <>
            <h3>Precio total del carrito: ${total}</h3>
            <div>
                <button className="BotonTienda">
                    <NavLink to="/">Seguir comprando</NavLink>
                </button>
            </div>
            
            <h2>Detalle de la compra</h2>
    
                <form >
                    <div>
                        <input 
                        onChange={e=>setNombre(e.target.value)} 
                        type="text" 
                        placeholder="Nombre" 
                        value={nombre} />
                    </div>
                    <div>
                        <input 
                        onChange={e=>setTelefono(e.target.value)} 
                        type="tel" 
                        placeholder="Telefono" 
                        value={telefono} />
                    </div> 
                    <div>
                        <input 
                        onChange={e=>setEmail(e.target.value)} 
                        type="email" 
                        placeholder="E-mail" 
                        value={email} />
                    </div>
                </form>

            <div>
                <button className="BotonTienda" 
                    onClick={clearCart}>Vaciar Carrito
                </button>
                <button className="BotonTienda"  type="submit" onClick={manejarCompra}> Terminar Compra </button>
            </div>
            <div>
                {id ? <h4>Gracias por tu compra!: Numero de Orden {id} </h4> : null }
            </div>
            </>}
        </div>
    )
}

export default Cart