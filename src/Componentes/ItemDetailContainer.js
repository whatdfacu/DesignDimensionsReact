import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { firestore } from '../firebaseConfig'

const ItemDetailContainer = () => {

    const [ item, setItem ] = useState()
    const { id } = useParams()

    useEffect(() => {
        const db = firestore
        const collection = db.collection("items")
        const item = collection.doc(id)
        
        item.get()
            .then( (i) => {
            setItem({ id: i.id, ...i.data()})
        
        })

    }, [id])
    

    return (
        <div>
            estas en el item detail container
            {item ? 
        <ItemDetail 
            item={item}
            id={item.id}
            name={item.name}     
            price={item.price}
            image={item.image}
            description={item.description}
            stock={item.stock}
            initial={item.initial}
            />
            : <p>Cargando items...</p>
            }
        </div>
    )
}

export default ItemDetailContainer
