import './ItemDetail.scss'
import Button from '../Button/Button'
import Counter from '../counter/counter'
import { useState } from 'react'

const ItemDetail = ({product}) => {

    const [cartCount, setCartCount] = useState(0)

    const addToCart = () => {
        alert(`Añadiste ${cartCount} ${product.producto} ${product.modelo} al carrito`)
    }

    return (
        <>
        <Button content={'Atras'} path={'/'} />
        <div id='ItemDetail'>
            <div>
                <img src={product.img} alt={'Imagen'}></img>
            </div>
            <div>
            <h3 className={'productDetail'}>{product.producto}</h3>
            <h3 className={'productDetail'}>Modelo: {product.modelo}</h3>
            <h4 className={'productDetail'}>${product.precio}</h4>
            <h6 className={'productDetail'}>Stock: {product.stock} unidades</h6>
            <Counter initialValue={1} maxValue={10} onAdd={(value) => setCartCount(value)} />
            <Button content={`Agregar al carrito`} callback={addToCart} />
            </div>
        </div>
        </>
    )
}

export default ItemDetail;