import './ItemDetail.scss'
import Button from '../Button/Button'

const ItemDetail = ({product}) => {
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
            <Button content={'Comprar'} callback={()=> {alert(`Agregaste ${product.producto} ${product.modelo} al carrito`)}}/>
            </div>
        </div>
        </>
    )
}

export default ItemDetail;