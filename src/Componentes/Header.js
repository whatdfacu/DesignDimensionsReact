import React from 'react'
import { NavLink } from 'react-router-dom'
import Carrito from './Carrito'
import { Nav } from 'react-bootstrap'
import "../Clases/Header.css"
import '../Clases/NavBar.css'

const categories = [{
    categoryId: "Stands",
    name: "Phone_Stand03"
},
{
    categoryId: "Home",
    name: "Faceted_Vase_"
}, {
    categoryId: "MovieProps",
    name: "Pick_of_Destiny"
}]

const Header = () => {
    return (
        <>
            <header>
                <section>
                    <NavLink to="/" exact >
                        <img src={'https://practical-booth-a6ed96.netlify.app/images/logo.gif'} alt='Logo de Design Dimensions' className='Imagen' />
                    </NavLink>
                </section>
                <section>
                    <Nav>
                        <li className='NavBar'>
                            <NavLink to={"/cart"} className='cart'> <Carrito /> </NavLink>
                            <NavLink to="/" exact className='Link'>Todos</NavLink>
                            {categories.map(category => <NavLink className='Link' to={`/category/${category.categoryId}`}>{category.categoryId}</NavLink>)}
                        </li>
                    </Nav>
                </section>
            </header>
        </>
    )
}
export default Header