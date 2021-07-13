import React , {useState, useEffect} from 'react'
import Productos from './Productos'
import { useParams } from  'react-router-dom'

const Tienda = ( {products} ) => {

    const [ items, setItems ] = useState ([])

    const { id } = useParams()

    useEffect(() => {
        if(id){
            const category = products.filter(product => product.categoryId === id)
            setItems(category)
            }
            else{
                setItems(products)
            }
        }, [id, products])
    
    return (
        <div>
            {products.length > 0 ? <Productos products={items}/> : <h2>Cargando Tienda</h2>}
        </div> 
    )
}

export default Tienda
