import Button from "../../components/Button/Button";
import useCartContext from "../../Context/CartContext";

const Cart = () => {
    const { products, delProduct, getGrandTotal } = useCartContext();
    console.log(products);

    const handleDel = (p) => {
        delProduct(p.id)
    }

    //   const handleTotal = (p) => {
    //       getGrandTotal(p)
    //   }

    return (
        <>
            <Button content={`Seguir Comprando`} path={'/'} />
            <div id="Cart">
                {products.map((product) => (
                    <div key={product.id}>
                        <Button content={`X`} callback={() => handleDel(product)} />
                        <h1> Producto: {product.modelo} </h1>
                        <h1> Cantidad: {product.quantity} </h1>
                        <img src={product.img} alt={product.modelo} />
                    </div>
                ))}
                <h3>${getGrandTotal()}</h3>
            </div>
        </>
    );
}

export default Cart