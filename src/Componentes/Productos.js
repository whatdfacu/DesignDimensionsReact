import React from 'react'
import ProductoIndividual from './ProductoIndividual'

const Productos = ({products}) => {

    return (
        <div>
            { products.map ( product => <ProductoIndividual key={product.id} id={product.id} 
                name={product.name} image={product.image} price={product.price}/>)
                }
        </div>
    )
}

export default Productos