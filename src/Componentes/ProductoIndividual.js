import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductoIndividual = ({id, name, image, price}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <NavLink 
                to={`/item/${id}`}
            >
                <img src={image} 
                    alt="alt" 
                    height="250px"
                />
            </NavLink>
        </div>
    )
}

export default ProductoIndividual


