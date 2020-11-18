import { useState, useEffect } from 'react'
import { getProduct } from '../../api/products'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            getProduct().then(
            (response) => {
                setProduct(response)
                setLoading(false)
            }
        )}, 3000)
        
    }, [])


    return(
        <div id='ItemDetailContainer'>
            {
                loading ? <h3>Cargando producto...</h3> :
                <ItemDetail product={product} />
            }
        </div>
    )
}

export default ItemDetailContainer;