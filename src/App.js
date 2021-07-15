import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route  } from "react-router-dom" 
import Header from './Componentes/Header'
import Switch from 'react-bootstrap/esm/Switch'
import Tienda from './Componentes/Tienda'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import Cart from './Componentes/Cart'
import CartProvider from '../src/Componentes/CartContext'
import { firestore } from './firebaseConfig'

const App = () => {

    const [items, setItems] = useState([])

    useEffect(() => {

        const db = firestore
        const collection = db.collection("items")
        const query = collection.get()

        query.then(({ docs }) => {
                setItems(docs.map(doc => ({ id: doc.id, ...doc.data() })))
                const arr = []
                docs.forEach(doc => {
                    const nuevoDoc = {
                        id: doc.id, ...doc.data()
                    }

                    arr.push(nuevoDoc)
                })

                setItems(arr)
            })
            .catch(() => {
                console.log('fallo')
            })
    }, [])

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