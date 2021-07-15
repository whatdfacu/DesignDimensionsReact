import React , {useState, useEffect} from 'react'
import Productos from './Productos'
import { useParams } from  'react-router-dom'
import { firestore } from '../firebaseConfig'

const Tienda = ( {products} ) => {

    const [ items, setItems ] = useState ([])
    const { id } = useParams()

    useEffect(() => {
        if(id){
            const db = firestore
            const collection = db.collection("items")
            const query = collection.where('categoryId', '==', id).get()

            query.then( (i) => {
                    setItems(i.docs.map(p => ({id: p.id, ...p.data()})))
            })
                .catch((error) => {
                    console.log(error)
                })
        }
        else{
            setItems(products)
            }
        }, [id, products])
    
    return (
        <div>
            estas en la tienda
            {products.length > 0 ? <Productos products={items}/> : <h2>Cargando Tienda</h2>}
        </div> 
    )
}

export default Tienda
