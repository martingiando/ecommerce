import useCartContext from "../../Context/CartContext";
import Button from "../../components/Button/Button";

import CartList from "../../components/CartList/CartList";
import "../../components/Button/Button.scss";

const Cart = () => {
  const { products } = useCartContext();

  return (
    <div id="CartContainer">
      <h1 className="cart__cart">Carrito</h1>
      {products.length === 0 ? (
        <div className="cart__vacio">
          <h3 className="titulo">
            Actualmente no tienes artículos en tu Carrito
          </h3>
          <Button
            path="/"
            content="Volver a comprar"
          />
        </div>
      ) : (
        <div>
          <CartList products={products} />
        </div>
      )}
    </div>
  );
}

export default Cart;