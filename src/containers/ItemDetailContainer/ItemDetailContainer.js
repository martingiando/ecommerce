import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../api/products'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Spinner from '../../components/Spinner/Spinner'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            getProductById(id).then(
            (response) => {
                setProduct(response)
                setLoading(false)
            }
        )}, 3000)
        
    }, [id])


    return(
        <div id='ItemDetailContainer'>
            {
                loading ? (<Spinner />) : (
                <ItemDetail product={product} />)
            }
        </div>
    )
}

export default ItemDetailContainer;