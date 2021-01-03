import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button/Button";
import useCartContext from "../../Context/CartContext";
import './CartList.scss';

const CartList = () => {
    const { products, delProduct, getGrandTotal } = useCartContext();

    const handleDel = (p) => {
        delProduct(p.id)
    }

    return (
        <>
            <Button content={`Seguir Comprando`} path={'/'} />
            <div id="Cart">
                <div id={'CartTitles'}>
                    <h4>Borrar</h4>
                    <h4>Producto</h4>
                    <h4>Cantidad</h4>
                    <h4>Precio</h4>
                </div>
                {products.map((product) => (
                    <div id={'productsCart'} key={product.id}>
                        <FontAwesomeIcon icon={faTrash} id={'iconTrash'} onClick={() => handleDel(product)} />
                        <h4>{product.modelo}</h4>

                        <h4>{product.quantity} </h4>
                        <h4>${product.precio}</h4>
                    </div>
                ))}
                <div id={'cartTotal'}>
                    <h4>Sub Total</h4>
                    <h4>${getGrandTotal()}</h4>
                    <Button content={`CheckOut`} path={'/checkout'} />
                </div>
            </div>
        </>
    );
}

export default CartList;