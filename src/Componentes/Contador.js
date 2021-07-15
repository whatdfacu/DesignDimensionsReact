import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Clases/contador.css'
import { CartContext } from './CartContext'


const Contador = ({ item, id, aumentarContador, restarContador, cantidad }) => {

    const [open, setOpen] = useState(false)

    const { addToCart } = useContext(CartContext)

    function addAndOpen(item, cantidad, id) {
        addToCart(item, cantidad, id);
        setOpen(true)
    }

    return (
        <div>
            <div>
                <button onClick={restarContador}>-</button>
                <h3>{cantidad}</h3>
                <button onClick={aumentarContador}>+</button>
            </div>
            {!open ? (<div>
                <button onClick={() => addAndOpen(item, cantidad, id)}>
                    <h3>Agregar al carrito </h3>
                </button>
            </div>) :
                (

                    <>
                        <NavLink to="/Cart">

                            <button className="BotonTienda" >
                                <h3>Terminar la compra</h3>
                            </button>
                        </NavLink>
                        <NavLink to="/">
                            <button className="BotonTienda" >
                                <h3>Seguir Comprando</h3>
                            </button>
                        </NavLink>
                    </>
                )



            }

        </div>
    )
}

export default Contador

