import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { getProductById } from '../../api/products'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Spinner from '../../components/Spinner/Spinner'
import { getProdSolo } from '../../api/products'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            getProdSolo(id).then((response) => {
                    response.forEach((productos) => {
                        if (productos.id === Number(id)) {
                            setProduct(productos)
                        }
                    });
                    setLoading(false)
                });

        }, 3000)

    }, [id])

    return (
        <div id='ItemDetailContainer'>
            {
                loading ? (<Spinner />) : (
                    <ItemDetail product={product} />)
            }
        </div>

    )
}

export default ItemDetailContainer;