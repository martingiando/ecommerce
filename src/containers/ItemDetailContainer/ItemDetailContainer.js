import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { getProductById } from '../../api/products'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Spinner from '../../components/Spinner/Spinner'
import { getProductsById } from '../../api/products'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            getProductsById(id).then((result) => {
            setProduct(result);
            setLoading(false); // aca recibimos los resultados por eso sacamos el loading
          });
        }, 1000);
      }, [id]);

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