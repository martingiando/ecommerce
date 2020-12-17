import Button from "../../components/Button/Button";
import {useState} from 'react'
import useCartContext from "../../Context/CartContext";
import { getFirestore } from '../../Firebase/Firebase'

const CheckoutContainer = () => {
    const { products, getGrandTotal } = useCartContext();
    const [orderId, setOrderId] = useState()
    console.log(products)

    const db = getFirestore()
    
    const orders =  db.collection("orders")

    const Compra = () => {

        let nombre = document.querySelector("#fname").value;
        let PrecioTotal = getGrandTotal(products);

        const newOrder = {
            buyer: nombre,
            items: products,
            total: PrecioTotal,
        }

        console.log(nombre)
        orders.add(newOrder).then(({ id }) => {
            setOrderId(id)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            alert("Compra realizada con exito")
            console.log(orderId)
        })
    }

    return (
        <>
            <h2>Checkout</h2>
            <form action="#">
                <label for="fname">Nombre:</label>
                <input type="text" id="fname" name="fname" />
            </form>
            {
                products.map((product) => {
                    <div key={product.id} className={"checkoutProduct"}>
                        <h3>{product.modelo}</h3>
                        <h3>{product.quantity}</h3>
                        <h3>${product.precio}</h3>
                    </div>
                })
            }
            <h3>${getGrandTotal()}</h3>
            <Button content={'Finalizar Compra'} callback={() => Compra()} />
        </>
    )
}

export default CheckoutContainer;