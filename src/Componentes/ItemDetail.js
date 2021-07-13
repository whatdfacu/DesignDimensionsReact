import React, { useState } from 'react'
import Contador from './Contador'

const ItemDetail = ({ item, stock, initial }) => {    

const [cantidad, setCantidad] = useState(initial) 

    const aumentarContador = () => {
        if(cantidad < stock ) {
            setCantidad(cantidad + 1)  
        }
        else{ console.log("llegamos al stock")}
    }

    const restarContador = () => {
        if (cantidad > initial){
            setCantidad(cantidad - 1)
        }
        else{ console.log("hay un solo item")}
    }

    return (
        <div>
            <div>
                <h6>Categoría: {item.categoryId}</h6>
                <h2>{item.name}</h2>
                <h3>${item.price}</h3>
                <img src={item.image} alt=""/>
                <h6>{item.description}</h6>
            </div>    
            <div>
                <Contador 
                    stock={item.stock} 
                    initial={initial} 
                    aumentarContador={aumentarContador}
                    restarContador={restarContador}
                    cantidad={cantidad}
                    item={item}
                />
            </div>

        </div>
    )
}

export default ItemDetail