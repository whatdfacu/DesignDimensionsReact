import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route  } from "react-router-dom" 
import Header from './Componentes/Header'
import Switch from 'react-bootstrap/esm/Switch'
import Tienda from './Componentes/Tienda'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import Cart from './Componentes/Cart'
import CartProvider from '../src/Componentes/CartContext'

const products = [{
    id: 1,
    name: "Phone_Stand03",
    price: "1000",
    image: "https://cdn.thingiverse.com/renders/cb/02/3e/0f/04/9bb57d6d25706d2482a415baa38b9977_preview_featured.jpg",
    description: "Printable Phone Stand",
    stock: 9,
    initial: 1,
    categoryId: "Stands",
},{
    id: 2,
    name: "Faceted_Vase_",
    price: "1100",
    image: "https://cdn.thingiverse.com/renders/48/b1/b1/c0/e9/5a537a24912fdd724271f2379e8b1fc5_preview_featured.jpg",
    description: "Printable vase",
    stock: 5,
    initial: 1,
    categoryId: "Home",
},{
    id: 3,
    name: "Pick_of_Destiny",
    price: "1200",
    image: "https://cdn.thingiverse.com/renders/89/ab/27/30/ca/d3f0e4936942520b21093319c878a068_preview_featured.jpg",
    description: "Printable pick of destiny movie prop",
    stock: 6,
    initial: 1,
    categoryId: "MovieProps",
}
]

const App = () => {

    const [ items, setItems] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolver, rechazar) => {
            setTimeout(function(){
                resolver(products)
            }, 2000);
        })
        promesa.then(result => setItems (result))
        promesa.catch(err=> console.log("Algo salio mal"))
    },[]);

return(
    <CartProvider>
        <BrowserRouter>
            <Header />
            <Switch> 
                <Route exact path="/" >
                    <Tienda products={items} />
                </Route>
                <Route exact path="/category/:id" >
                    <Tienda products={items}/>
                </Route>
                <Route exact path="/item/:id" >
                    <ItemDetailContainer/>
                </Route>
                <Route exact path="/Cart">
                    <Cart />
                </Route>
            </Switch>
        </BrowserRouter>
    </CartProvider>
    )
}

export default App